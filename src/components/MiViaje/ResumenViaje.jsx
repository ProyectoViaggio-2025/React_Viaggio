import { useEffect, useState } from 'react';

function ResumenViaje() {
  const [datosReserva, setDatosReserva] = useState(null);

  useEffect(() => {
    const reserva = JSON.parse(localStorage.getItem('datosReserva'));
    setDatosReserva(reserva);
  }, []);

  if (!datosReserva) {
    return <p className="text-center mt-4">No hay información de alojamiento seleccionada.</p>;
  }

  return (
    <div>
      <h2 className="text-center mb-4">Alojamiento</h2>
      <div className="card mb-4 shadow p-4" style={{ maxWidth: '480px', margin: '0 auto' }}>
        <h5 className="card-title text-center">{datosReserva.hotel}</h5>
        <img src={datosReserva.imagen} className="img-fluid rounded my-3" alt={datosReserva.hotel} />
        <p className="card-text"><strong>Destino:</strong> {datosReserva.ciudad}</p>
        <div className="d-flex justify-content-between" style={{ gap: '2rem', paddingTop: '0.5rem' }}>
          <p className="card-text mb-0"><strong>Fecha de llegada:</strong> {datosReserva.fechaLlegada}</p>
          <p className="card-text mb-0"><strong>Fecha de regreso:</strong> {datosReserva.fechaRegreso}</p>
        </div>
      </div>
    </div>
  );
}

export default ResumenViaje;