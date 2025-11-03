const ViajesPlaneadosCard = ({ title, text }) => {
  return (
    <div className="perfil-usuario card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-outline-primary btn-sm">Ver detalles</button>
        <button className="btn btn-success btn-sm">Sincronizar viaje</button>
      </div>
    </div>
  );
};

const ViajesPlaneados = () => {
  return (
    <div className="tab-pane fade show active" id="planeados" role="tabpanel">
      <ViajesPlaneadosCard
        title={"Viaje a Bariloche"}
        text={"Del 10 al 15 de diciembre - hospedaje en cabaña"}
      />
      <ViajesPlaneadosCard
        title={"Viaje a Córdoba"}
        text={"Del 20 al 25 de enero - hotel céntrico"}
      />
    </div>
  );
};

export default ViajesPlaneados;
