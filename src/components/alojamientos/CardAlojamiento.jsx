import { useNavigate } from "react-router-dom";
import "../../css/cardAlojamientos.css"


function CardAlojamiento({ id, nombre, descripcion, imagen, precio, estrellas, seleccionado, onSeleccionar, onDelete, deleteMode, editMode, onEdit }) {
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate(`/alojamientosDetalles/${id}`);
  };

  const handleClick = () => {
    onSeleccionar(seleccionado ? null : { id, nombre, descripcion, imagen });
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className={`alojamientos card h-100 ${seleccionado ? 'seleccionada' : ''}`}>
        <div className="img-container">
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="precio-container">
              <p>${precio} por noche</p>
            </div>
            <div className="estrellas-container">
              ⭐ <strong>{estrellas}</strong>
            </div>
        </div>
        <div className="card-alojamiento card-body">
          <h5 className="card-title">{nombre}</h5>
          <div className="d-flex justify-content-between">
            <button onClick={handleVerMas} className="btn btn-verMas btn-sm">
              Ver más
            </button>
            <button
              className={`btn ${seleccionado ? 'btn-seleccionado' : 'btn-seleccionar'}`}
              onClick={handleClick}
            >
              {seleccionado ? 'Seleccionado' : 'Seleccionar'}
            </button>

            {deleteMode && (
              <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm" style={{marginLeft: "10px"}}>
                Borrar
              </button>
            )}

            {editMode && (
              <button onClick={() => onEdit(id)} className="btn btn-warning btn-sm" style={{marginLeft:"10px"}}>
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAlojamiento;