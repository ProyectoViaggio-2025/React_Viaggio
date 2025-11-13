import { useParams } from "react-router-dom";
import { useState } from "react";
import alojamientosDetalles from "../../data/alojamientosDetalles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { FaWifi, FaParking, FaUtensils, FaSnowflake } from "react-icons/fa";
import "../../css/alojamientoDetalles.css";

function AlojamientoDetalle() {
  const { id } = useParams();
  const alojamiento = alojamientosDetalles.find(a => a.id === parseInt(id));
  const [mainImage, setMainImage] = useState(alojamiento.imagen[0].url);

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
        {alojamiento.imagen.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.url}
              alt={`foto ${index + 1}`}
              className={`miniatura ${mainImage === img.url ? "activa" : ""}`}
              onClick={() => setMainImage(img.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* IMAGEN PRINCIPAL */}
      <div className="detalle-principal">
        <img src={mainImage} alt="principal" className="detalle-img-principal" />
      </div>

      {/* INFORMACIÓN + RESERVA */}
      <div className="detalle-info">
        {/* IZQUIERDA */}
        <div className="detalle-info-left">
          <h2>{alojamiento.nombre}</h2>
          <p className="detalle-subinfo">
            ⭐ {alojamiento.puntuacion} · {alojamiento.ubicacion}
          </p>

          {/* SERVICIOS */}
          <div className="detalle-servicios">
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
          </div>

          {/* DESCRIPCIÓN */}
          <h3 className="detalle-titulo">Descripción</h3>
          <p className="detalle-descripcion">{alojamiento.descripcion}</p>
        </div>

        {/* DERECHA */}
        <div className="detalle-info-right">
          <div className="reserva-card">
            <h3>{alojamiento.nombre}</h3>
            <p className="detalle-rating">
              ⭐ {alojamiento.puntuacion} · 20 reviews
            </p>

            <div className="reserva-form">
              <div className="input-group">
                <input type="date" />
                <input type="date" />
              </div>

              <select>
                <option>1 persona</option>
                <option>2 personas</option>
                <option>3 personas</option>
              </select>

              <button className="btn-reserve">
                Reservar ${alojamiento.precio}
              </button>
            </div>

            <p className="no-charges">No se realiza ningún cargo aún</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlojamientoDetalle;
