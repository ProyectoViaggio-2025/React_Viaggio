function SelectorFechas({ fechaLlegada, setFechaLlegada, fechaRegreso, setFechaRegreso, formularioIntentado }) {
  const hoy = new Date().toISOString().split('T')[0];
  const mostrarError = formularioIntentado && fechaLlegada === '';

  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="fecha-llegada">Fecha de llegada:</label>
        <input
          type="date"
          className={`form-control form-control-lg ${mostrarError ? 'is-invalid' : ''}`}
          id="fecha-llegada"
          value={fechaLlegada}
          onChange={(e) => setFechaLlegada(e.target.value)}
          min={hoy}
        />
        {mostrarError && (
          <div className="invalid-feedback">
            Por favor, selecciona una fecha de llegada.
          </div>
        )}
      </div>

      <div className="col-md-6">
        <label htmlFor="fecha-regreso">Fecha de regreso:</label>
        <input
          type="date"
          className="form-control form-control-lg"
          id="fecha-regreso"
          value={fechaRegreso}
          onChange={(e) => setFechaRegreso(e.target.value)}
          min={fechaLlegada || hoy}
        />
      </div>
    </div>
  );
}

export default SelectorFechas;