function SelectorDestino({ ciudad, setCiudad, formularioIntentado }) {
  const mostrarError = formularioIntentado && ciudad === '';

  return (
    <div className="row mb-3">
      <div className="col-12">
        <label htmlFor="ciudad">Seleccione su ciudad:</label>
        <select
          className={`form-control form-control-lg ${mostrarError ? 'is-invalid' : ''}`}
          id="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        >
          <option value="" disabled>Seleccione una ciudad</option>
          <option value="Olavarria">Olavarría</option>
          <option value="Tandil" disabled style={{ color: 'gray' }}>Tandil (próximamente)</option>
          <option value="Mar del Plata" disabled style={{ color: 'gray' }}>Mar del Plata (próximamente)</option>
        </select>
        {mostrarError && (
          <div className="invalid-feedback">
            Por favor, selecciona una ciudad.
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectorDestino;