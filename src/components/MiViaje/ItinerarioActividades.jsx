import actividadesData from '../../data/actividadesData';

function ItinerarioActividades({ itinerario }) {
  if (itinerario.length === 0) {
    return <p className="text-center mt-4">No hay actividades en tu itinerario.</p>;
  }

  const actividadesSeleccionadas = actividadesData.filter(act =>
    itinerario.includes(act.titulo)
  );

  return (
    <>
      {actividadesSeleccionadas.map(actividad => (
        <div key={actividad.titulo} className="card mb-3 actividades">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{actividad.titulo}</h5>
                <p className="card-text">{actividad.descripcion}</p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={actividad.imagen}
                className="img-fluid actividades-img"
                alt={actividad.titulo}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItinerarioActividades;