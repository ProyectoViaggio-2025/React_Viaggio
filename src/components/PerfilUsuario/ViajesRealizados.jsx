const ViajesRealizadosCard = ({ titulo, fecha, alojamiento, actividades }) => {
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
          <strong>Actividades:</strong>   {actividades ? actividades.join(", ") : "No especificadas"}
        </p>
        <button className="btn btn-outline-primary btn-sm">Ver detalles</button>
      </div>
    </div>
  );
};

const ViajesRealizados = () => {
  return (
    <div className="tab-pane" id="realizados" role="tabpanel">
      <h2>Estos son tus viajes completados:</h2>
      <ViajesRealizadosCard
        titulo={"Viaje a Machu Picchu"}
        fecha={"5 al 12 de julio de 2025"}
        alojamiento={"Hotel boutique en Aguas Calientes"}
        actividades={[
          "Tour guiado en Machu Picchu",
          "Caminata a Huayna Picchu",
          "Visita al Valle Sagrado",
          "Paseo en tren panorámico",
        ]}
      />

      <ViajesRealizadosCard
        titulo={"Viaje a Córdoba"}
        fecha={"20 al 25 de enero de 2025"}
        alojamiento={"Hotel céntrico en el microcentro"}
        actividades={[
          "City tour histórico",
          "Caminatas por las sierras",
          "Degustación gastronómica",
          "Visita a museos locales",
        ]}
      />
    </div>
  );
};

export default ViajesRealizados;
