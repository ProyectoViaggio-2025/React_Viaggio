function ItinerarioActividades({ itinerario }) {
  
    const actividadesLimpias = itinerario.filter(
      (act) => act && act.titulo && act.descripcion
    );  

  if (!itinerario || itinerario.length === 0) {
    return (
      <p className="text-center mt-4">No hay actividades en tu itinerario.</p>
    );
  }


  return (
    <>
      {actividadesLimpias.map((actividad) => (
        <div key={actividad.id || actividad.titulo} className="mi-viaje card mb-3">
          <div className="row align-items-center">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{actividad.titulo}</h5>
                <p className="card-text">{actividad.descripcion}</p>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src={actividad.imagenUrl || actividad.imagen}
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
