import generarTextoFecha from "../../utils/generarTextoFecha";

const ViajeEnCursoCard = ({ titulo, fecha, alojamiento, actividades }) => {
  return (
    <div className="perfil-usuario card mb-3">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          <strong>Fecha:</strong> {fecha}
        </p>
        <p className="card-text">
          <strong>Alojamiento:</strong> {alojamiento}
        </p>
        <p className="card-text">
          <strong>Actividades:</strong>{" "}
          {actividades && actividades.length > 0
            ? actividades.join(", ")
            : "No especificadas"}
        </p>
      </div>
    </div>
  );
};

const ViajeEnCurso = ({ reservas }) => {
  const fechaHoy = new Date();

  const reservaEnCurso = reservas.filter((reserva) => {
    const llegada = new Date(reserva.fechaLlegada);
    const regreso = reserva.fechaRegreso
      ? new Date(reserva.fechaRegreso)
      : null;

    const yaEmpezo = llegada <= fechaHoy;
    const noTermino = regreso === null || regreso >= fechaHoy;

    return yaEmpezo && noTermino;
  });

  return (
    <div className="tab-pane fade show active" id="enCurso" role="tabpanel">
      {reservaEnCurso.length === 0 ? (
        <p>No tenes viajes en curso.</p>
      ) : (
        reservaEnCurso.map((reserva) => {
          const actividadesArray = reserva.actividades?.map(
            (actividad) => actividad.titulo
          );
          return (
            <ViajeEnCursoCard
              key={reserva.idReserva}
              titulo={`Viaje a ${reserva.ciudad}`}
              fecha={generarTextoFecha(
                reserva.fechaLlegada,
                reserva.fechaRegreso
              )}
              alojamiento={reserva.hotel.nombre}
              actividades={actividadesArray}
            />
          );
        })
      )}
    </div>
  );
};

export default ViajeEnCurso;
