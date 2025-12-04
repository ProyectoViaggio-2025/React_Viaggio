import CardAlojamiento from "./CardAlojamiento";
import { imagenesHoteles } from "../../data/imagenesHoteles";
import { useAuth } from "../../context/AuthContext";
import { use, useState } from "react";
import API from "../../config/api";
import "../../css/alojamientos.css"

function Alojamientos({
  alojamientos,
  alojamientoSeleccionado,
  onSeleccionar,
}) {
  const handleSeleccionar = (hotel) => {
    onSeleccionar(hotel);
  };

  const limpiarFormulario = () => {
    setNombre("");
    setPrecio("");
    setEstrellas("");
    setDescripcion("");
    setImagenPrincipal("");
    setImagenesExtras([]);

    setHotelEditado(null);
  };

  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState("");
  const [estrellas, setEstrellas] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [servicios, setServicios] = useState([""]);

  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [hotelEditado, setHotelEditado] = useState(null);

  const [imagenPrincipal, setImagenPrincipal] = useState(null);
  const [imagenesExtras, setImagenesExtras] = useState([]);

  const handleExtraImageChange = (index, value) => {
    const nuevas = [...imagenesExtras];
    nuevas[index] = value;
    setImagenesExtras(nuevas);
  };

  const agregarCampoImagen = () => {
    if (imagenesExtras.length >= 5) {
      alert("Máximo 5 imágenes adicionales");
      return;
    }
    setImagenesExtras([...imagenesExtras, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imagenesExtras.length > 5) {
      alert("Máximo 5 imágenes adicionales");
      return;
    }

    const nuevoHotel = {
      nombre,
      precio,
      estrellas,
      descripcion,
      imagenPrincipal,
      imagenesExtras,
      direccion,
      servicios,
    };

    let url = `${API}/hoteles`;
    let method = "POST";

    //SI ESTAMOS EDITANDO USAR PUT
    if (hotelEditado) {
      url = `${API}/hoteles/${hotelEditado}`;
      method = "PUT";
    }

    const response = await fetch(url, {
      method,
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(nuevoHotel),
    });

    if (response.ok) {
      limpiarFormulario();
      setShowForm(false);
      alert(hotelEditado ? "Alojamiento actualizado" : "Alojamiento agregado");
      window.location.reload();
    } else {
      alert("Error al guardar alojamiento");
    }
  };

  const { user } = useAuth();

  const isAdmin = user?.role === "admin";

  const borrarAlojamiento = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que desea borrar este alojamiento?"
    );

    if (!confirmar) return;

    const res = await fetch(`${API}/hoteles/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Alojamiento eliminado");
      window.location.reload();
    } else {
      alert("Error al borrar alojamiento");
    }
  };

  const comenzarEdicion = (id) => {
    const hotel = alojamientos.find((h) => h.id === id);

    if (!hotel) return alert("No encontrado");

    //CARGAR DATOS AL FORMULARIO
    setNombre(hotel.nombre);
    setDescripcion(hotel.descripcion || "");
    setPrecio(hotel.precio);
    setEstrellas(hotel.estrellas);
    setImagenPrincipal(hotel.imagenPrincipal || "");
    setImagenesExtras(hotel.imagenesExtras || []);
    setHotelEditado(hotel.id);
    setShowForm(true);
  };

  return (
    <div className="container mt-5" id="seccion-alojamientos">
      {isAdmin && (
        <div className="admin-action">
          <button
            onClick={() => {
              limpiarFormulario();
              setEditMode(false);
              setDeleteMode(false);
              setShowForm(true);
            }}
            className="boton1 admin-alojamientos-btn"
          >
            Agregar alojamiento
          </button>

          <button
            onClick={() => {
              setEditMode(!editMode);
              setDeleteMode(false);
              setShowForm(false);
            }}
            className="boton2 admin-alojamientos-btn"
          >
            {editMode ? "Cancelar edición" : "Modificar alojamiento"}
          </button>

          <button
            onClick={() => {
              setDeleteMode(!deleteMode);
              setEditMode(false);
              setShowForm(false);
            }}
            className="boton3 admin-alojamientos-btn"
          >
            {deleteMode ? "Cancelar eliminación" : "Borrar alojamiento"}
          </button>
        </div>
      )}

      {showForm && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content p-4">
              <h2 className="text-center mb-4">
                {hotelEditado ? "Modificar alojamiento" : "Nuevo alojamiento"}
              </h2>

              <form className="form-admin-alojamientos" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />

                <label>Ubicación / Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />

                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                />

                <label>Estrellas (0 a 5)</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className="form-control"
                  value={estrellas}
                  onChange={(e) => setEstrellas(e.target.value)}
                  required
                />

                <label>Descripción</label>
                <textarea
                  className="form-control"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                />

                <label>Servicios</label>
                {servicios.map((serv, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Servicio ${index + 1}`}
                    className="form-control mb-2"
                    value={serv}
                    onChange={(e) => {
                      const nuevos = [...servicios];
                      nuevos[index] = e.target.value;
                      setServicios(nuevos);
                    }}
                  />
                ))}

                <button
                  type="button"
                  className="btn boton3 mb-3"
                  onClick={() => setServicios([...servicios, ""])}
                >
                  + Agregar servicio
                </button>

                <label>Imagen principal (URL)</label>
                <input
                  type="text"
                  className="form-control"
                  value={imagenPrincipal}
                  onChange={(e) => setImagenPrincipal(e.target.value)}
                  required
                />

                <label>Imágenes adicionales (URLs)</label>
                {imagenesExtras.map((url, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`URL imagen ${index + 1}`}
                    className="form-control mb-2"
                    value={url}
                    onChange={(e) =>
                      handleExtraImageChange(index, e.target.value)
                    }
                  />
                ))}

                <button
                  type="button"
                  className="btn boton3 mb-3"
                  onClick={agregarCampoImagen}
                  disabled={imagenesExtras.length >= 5}
                >
                  + Agregar otra imagen
                </button>

                <div className="d-flex justify-content-between gap-2 mt-3 flex-wrap">
                  <button type="submit" className="btn btn-warning">
                    Guardar
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      limpiarFormulario();
                      setShowForm(false);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-center mb-4">Elige tu alojamiento</h2>
      <div className="row">
        {alojamientos.map((a) => (
          <CardAlojamiento
            key={a.id}
            id={a.id}
            nombre={a.nombre}
            descripcion={a.descripcion}
            precio={a.precio}
            estrellas={a.estrellas}
            imagen={
              imagenesHoteles[a.imagenUrl] ||
              a.imagenPrincipal ||
              "https://via.placeholder.com/400"
            }
            seleccionado={alojamientoSeleccionado?.id === a.id}
            onSeleccionar={(hotel) => handleSeleccionar(hotel)}
            onDelete={borrarAlojamiento}
            deleteMode={deleteMode}
            editMode={editMode}
            onEdit={comenzarEdicion}
          />
        ))}
      </div>
    </div>
  );
}

export default Alojamientos;
