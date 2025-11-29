import generarTextoFecha from "../../utils/generarTextoFecha";
import { useEffect, useState } from "react";

const Countdown = ({ fechaLlegada }) => {
  const [tiempo, setTiempo] = useState("");

  useEffect(() => {
    const objetivo = new Date(fechaLlegada).getTime();

    const intervalo = setInterval(() => {
      const ahora = Date.now();
      const diferencia = objetivo - ahora;

      if (diferencia <= 0) {
        setTiempo("¡El viaje ya está por comenzar!");
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
      const segundos = Math.floor((diferencia / 1000) % 60);

      setTiempo(`Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s`);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fechaLlegada]);

  return <span className="contador-badge">{tiempo}</span>;
};

const ViajesPlaneadosCard = ({ title, text, fechaLlegada }) => {
  return (
    <div className="perfil-usuario card mb-3">
      <div className="card-body">

        <h5 className="card-title mb-1">{title}</h5>

        <Countdown fechaLlegada={fechaLlegada} />

        <p className="card-text mb-3">{text}</p>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm">Ver detalles</button>
          <button className="btn btn-success btn-sm">Sincronizar viaje</button>
        </div>

      </div>
    </div>
  );
};


const ViajesPlaneados = ({ reservas }) => {
  const fechaHoy = new Date();

  const reservasPendientes = reservas.filter((reserva) => {
    const fechaLlegada = new Date(reserva.fechaLlegada);
    return fechaLlegada > fechaHoy;
  });

  return (
    <div className="tab-pane" id="planeados" role="tabpanel">
      {reservasPendientes.length === 0 ? (
        <p>No tenés viajes planeados.</p>
      ) : (
        reservasPendientes.map((reserva) => (
          <ViajesPlaneadosCard
            key={reserva.idReserva}
            title={`Viaje a ${reserva.ciudad}`}
            text={`${generarTextoFecha(
              reserva.fechaLlegada,
              reserva.fechaRegreso
            )} - ${reserva.hotel.nombre}`}
            fechaLlegada={reserva.fechaLlegada}
          />
        ))
      )}
    </div>
  );
};

export default ViajesPlaneados;
