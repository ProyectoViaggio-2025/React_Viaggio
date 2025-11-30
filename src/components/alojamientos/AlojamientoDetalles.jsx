import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import alojamientosDetalles from "../../data/alojamientosDetalles";
import { FaWifi, FaParking, FaUtensils, FaSnowflake } from "react-icons/fa";
import "../../css/alojamientoDetalles.css";
import { useAuth } from "../../context/AuthContext";
import alojamientoMapa from "../../data/alojamientosMapa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Swal from "sweetalert2";


function AlojamientoDetalle() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  // --------- STATE ---------
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [editandoId, setEditandoId] = useState(null);
  const [mensajeEditado, setMensajeEditado] = useState("");
  const [fechaLlegada, setFechaLlegada] = useState(
    localStorage.getItem("fechaLlegada") || ""
  );
  const [fechaRegreso, setFechaRegreso] = useState(
    localStorage.getItem("fechaRegreso") || ""
  );
  const [hotel, setHotel] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // mapa: datos del hotel para el marker
  const hotelMapa = alojamientoMapa.find((h) => h.id === Number(id));

  // --------- ICONOS SERVICIOS ---------
  const iconosServicios = {
    wifi: <FaWifi size={22} />,
    "wi-fi": <FaWifi size={22} />,
    estacionamiento: <FaParking size={22} />,
    parking: <FaParking size={22} />,
    desayuno: <FaUtensils size={22} />,
    "desayuno incluido": <FaUtensils size={22} />,
    breakfast: <FaUtensils size={22} />,
    aire: <FaSnowflake size={22} />,
    "aire acondicionado": <FaSnowflake size={22} />,
  };

  // --------- CARGAR HOTEL + COMENTARIOS ---------
  useEffect(() => {
    async function cargar() {
      // 1) Intentar cargar datos del backend
      let backend = null;
      try {
        const res = await fetch(`http://localhost:3000/hoteles/${id}`);
        if (res.ok) backend = await res.json();
      } catch (err) {
        console.error("Error backend:", err);
      }

      // 2) Fallback local
      const local = alojamientosDetalles.find((a) => a.id === parseInt(id));

      // 3) Armar galería final
      let imagenesFinal = [];

      if (backend?.imagenPrincipal) {
        imagenesFinal.push({ url: backend.imagenPrincipal });
      }
      if (backend?.imagenesExtras?.length > 0) {
        backend.imagenesExtras.forEach((url) => {
          imagenesFinal.push({ url });
        });
      }

      if (imagenesFinal.length === 0 && local?.imagen?.length > 0) {
        imagenesFinal = local.imagen;
      }

      if (!imagenesFinal.length) {
        imagenesFinal = [
          {
            url: "/src/assets/alojamientos/PortadasHoteles/detallesImg/habitacion1.jpg",
          },
        ];
      }

      setMainImage(imagenesFinal[0].url);

      const fusionado = {
        ...local,
        ...backend,
        imagen: imagenesFinal,
      };

      setHotel(fusionado);
    }

    async function cargarComentarios() {
      try {
        const res = await fetch(`http://localhost:3000/comentarios/${id}`);
        if (res.ok) {
          const data = await res.json();
          setComentarios(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    cargar();
    cargarComentarios();
  }, [id]);

  // cerrar menú de comentarios al hacer click afuera
  useEffect(() => {
    const cerrar = () => setMenuAbierto(null);
    window.addEventListener("click", cerrar);
    return () => window.removeEventListener("click", cerrar);
  }, []);

  // --------- MAPA MINI ---------
  useEffect(() => {
    // si no hay coords o todavía no hay hotel, no hacemos nada
    if (!hotelMapa || !hotel) return;

    // esperar que el div #miniMapa exista en el DOM
    const mapContainer = document.getElementById("miniMapa");
    if (!mapContainer) return;

    const map = L.map("miniMapa").setView(hotelMapa.coords, 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker(hotelMapa.coords).addTo(map);

    return () => {
      map.remove();
    };
  }, [hotelMapa, hotel]);



  // mientras no cargó el hotel
  if (!hotel) return <p>Cargando...</p>;

  // --------- CALCULO NOCHES / TOTAL ---------
  const calcularNoches = () => {
    if (!fechaLlegada || !fechaRegreso) return 0;
    const inicio = new Date(fechaLlegada);
    const fin = new Date(fechaRegreso);
    const diff = fin - inicio;
    const noches = diff / (1000 * 60 * 60 * 24);
    return noches > 0 ? noches : 0;
  };

  const totalEstadia = calcularNoches() * (hotel?.precio || 0);

  // --------- FUNCIONES COMENTARIOS ---------
  const enviarComentario = async () => {
    if (!user) {
      alert("Debes iniciar sesión para comentar.");
      return;
    }

    if (!nuevoComentario.trim()) {
      alert("Escribe un comentario.");
      return;
    }

    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hotelId: Number(id),
        usuarioId: user.id,
        usuarioNombre: user.nombre,
        usuarioEmail: user.email,
        mensaje: nuevoComentario,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setNuevoComentario("");
      setComentarios([data, ...comentarios]);
    }
  };

  const borrarComentario = async (comentarioId) => {
    const confirmar = confirm("¿Seguro que quieres eliminar este comentario?");
    if (!confirmar) return;

    const res = await fetch(
      `http://localhost:3000/comentarios/${comentarioId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      setComentarios(comentarios.filter((c) => c.id !== comentarioId));
      setMenuAbierto(null);
    }
  };

  function tiempoRelativo(fecha) {
    const diff = (Date.now() - new Date(fecha).getTime()) / 1000;

    if (diff < 60) return "Justo ahora";
    if (diff < 3600) return `Hace ${Math.floor(diff / 60)} minutos`;
    if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} horas`;
    if (diff < 604800) return `Hace ${Math.floor(diff / 86400)} días`;

    const semanas = Math.floor(diff / 604800);
    return semanas === 1 ? "Hace 1 semana" : `Hace ${semanas} semanas`;
  }

  const editarComentario = async (comentarioId) => {
    if (!mensajeEditado.trim()) {
      alert("El comentario no puede estar vacío.");
      return;
    }

    const res = await fetch(
      `http://localhost:3000/comentarios/${comentarioId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje: mensajeEditado }),
      }
    );

    if (res.ok) {
      const actualizado = await res.json();

      setComentarios(
        comentarios.map((c) =>
          c.id === comentarioId ? { ...c, mensaje: actualizado.mensaje } : c
        )
      );

      setEditandoId(null);
      setMenuAbierto(null);
    }
  };

  // --------- JSX ---------
  return (
    <div className="detalle-container">
      {/* MINIATURAS */}
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="detalle-miniaturas"
      >
        {hotel.imagen.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.url}
              alt={`foto ${index + 1}`}
              className={`miniatura ${
                mainImage === img.url ? "activa" : ""
              }`}
              onClick={() => setMainImage(img.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* IMAGEN PRINCIPAL */}
      <div className="detalle-principal">
        <img
          src={mainImage}
          alt="principal"
          className="detalle-img-principal"
        />
      </div>

      {/* INFORMACIÓN */}
      <div className="detalle-info">
        {/* IZQUIERDA */}
        <div className="detalle-info-left">
          <h2>{hotel.nombre}</h2>
          <p className="detalle-subinfo">
            ⭐ {hotel.estrellas} · {hotel.direccion}
          </p>

          {/* SERVICIOS */}
          <div className="detalle-servicios">
            {hotel.servicios?.length > 0 &&
              hotel.servicios.map((serv, i) => {
                const clave = serv.toLowerCase().trim();
                const icono = iconosServicios[clave];

                return (
                  <div key={i} className="servicio-item">
                    {icono ? (
                      <>
                        {icono}
                        <p>{serv}</p>
                      </>
                    ) : (
                      <p>{serv}</p>
                    )}
                  </div>
                );
              })}

            {(!hotel.servicios || hotel.servicios.length === 0) && (
              <>
                <div className="servicio-item">
                  <FaWifi size={22} />
                  <p>Wi-Fi</p>
                </div>
                <div className="servicio-item">
                  <FaParking size={22} />
                  <p>Free parking</p>
                </div>
                <div className="servicio-item">
                  <FaUtensils size={22} />
                  <p>Breakfast included</p>
                </div>
                <div className="servicio-item">
                  <FaSnowflake size={22} />
                  <p>Air conditioning</p>
                </div>
              </>
            )}
          </div>

          {/* DESCRIPCIÓN */}
          <h3 className="detalle-titulo">Descripción</h3>
          <p className="detalle-descripcion">{hotel.descripcion}</p>
        </div>

        {/* DERECHA */}
        <div className="detalle-info-right">
          <div className="reserva-card">
            <h3>{hotel.nombre}</h3>
            <p className="detalle-rating">
              ⭐ {hotel.estrellas} · 20 reviews
            </p>

            <div className="reserva-form">
              <div className="input-group">
                <label>Fecha de llegada:</label>
                <input
                  type="date"
                  value={fechaLlegada}
                  onChange={(e) => {
                    setFechaLlegada(e.target.value);
                    localStorage.setItem("fechaLlegada", e.target.value);
                  }}
                />

                <label>Fecha de regreso:</label>
                <input
                  type="date"
                  value={fechaRegreso}
                  onChange={(e) => {
                    setFechaRegreso(e.target.value);
                    localStorage.setItem("fechaRegreso", e.target.value);
                  }}
                />
              </div>

              <select>
                <option>1 persona</option>
                <option>2 personas</option>
                <option>3 personas</option>
              </select>

              <button
                className="btn-reserve"
                onClick={() => {
                  // 🔥 GUARDAR ALOJAMIENTO SELECCIONADO ANTES DEL SWEETALERT
                  const alojamiento = {
                    id: hotel.id,
                    nombre: hotel.nombre,
                    imagen: hotel.imagenPrincipal || hotel.imagen?.[0]?.url,
                    precio: hotel.precio,
                    estrellas: hotel.estrellas,
                    direccion: hotel.direccion,
                    fechaLlegada,
                    fechaRegreso
                  };

                  localStorage.setItem("alojamientoSeleccionado", JSON.stringify(alojamiento));

                  Swal.fire({
                    title: "¿Deseas agregar actividades a tu viaje?",
                    text: "Puedes elegir actividades para completar tu experiencia.",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonText: "Sí, ver actividades",
                    cancelButtonText: "No, gracias",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/actividades");
                    } else {
                      navigate("/miViaje");
                    }
                  });
                }}
              >
                {fechaLlegada && fechaRegreso ? (
                  <span>
                    <strong>Reservar </strong>${totalEstadia}
                  </span>
                ) : (
                  <span>
                    <strong>Reservar</strong>
                  </span>
                )}
              </button>


            </div>

            <p className="no-charges">
              No se realiza ningún cargo aún
            </p>

            <div className="mini-mapa-container">
              <h4>Ubicación</h4>
              <div
                id="miniMapa"
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "12px",
                  marginTop: "10px",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* FORM COMENTARIOS */}
        <div className="comentarios-form-container">
          <div className="h2-comentario-container">
            <h2 className="detalle-titulo">Comentarios</h2>
          </div>

          <div className="comentarios-form">
            <textarea
              placeholder="Escribe tu comentario..."
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
            />

            <button onClick={enviarComentario}>Enviar</button>
          </div>
        </div>
      </div>

      {/* LISTA DE COMENTARIOS */}
      <div className="comentarios-lista-container">
        <div className="comentarios-lista">
          {comentarios.map((c) => (
            <div key={c.id} className="comentario-item">
              <div className="comentario-header">
                <strong>{c.usuarioNombre}</strong>
                <span className="comentario-tiempo">
                  {tiempoRelativo(c.fecha)}
                </span>

                {user?.id === c.usuarioId && (
                  <div className="menu-wrapper">
                    <button
                      className="menu-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMenuAbierto(
                          menuAbierto === c.id ? null : c.id
                        );
                      }}
                    >
                      ⋮
                    </button>

                    {menuAbierto === c.id && (
                      <div
                        className="menu-opciones"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => {
                            setEditandoId(c.id);
                            setMensajeEditado(c.mensaje);
                            setMenuAbierto(null);
                          }}
                        >
                          Editar
                        </button>

                          <button onClick={() => borrarComentario(c.id)}>
                            Eliminar
                          </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="p-comentarios-container">
                {editandoId === c.id ? (
                  <div className="editar-comentario-box">
                    <textarea
                      value={mensajeEditado}
                      onChange={(e) =>
                        setMensajeEditado(e.target.value)
                      }
                      className="editar-textarea"
                    />

                    <div className="editar-buttons">
                      <button
                        className="btn-guardar-edit"
                        onClick={() => editarComentario(c.id)}
                      >
                        Guardar
                      </button>

                      <button
                        className="btn-cancelar-edit"
                        onClick={() => setEditandoId(null)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>{c.mensaje}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlojamientoDetalle;
