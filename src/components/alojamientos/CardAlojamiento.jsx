import { useNavigate } from "react-router-dom";


function CardAlojamiento({ id, nombre, descripcion, imagen, seleccionado, onSeleccionar, }) {
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate(`/alojamientosDetalles/${id}`);
  };

  const handleClick = () => {
    onSeleccionar(seleccionado ? null : { id, nombre, descripcion, imagen });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className={`alojamientos card h-100 ${seleccionado ? 'seleccionada' : ''}`}>
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-alojamiento card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <div className="d-flex justify-content-between">
            <button onClick={handleVerMas} className="btn btn-outline-primary btn-sm">
              Ver más
            </button>
            <button
              className={`btn btn-sm ${seleccionado ? 'btn-success' : 'btn-warning'}`}
              onClick={handleClick}
            >
              {seleccionado ? 'Seleccionado' : 'Seleccionar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAlojamiento;