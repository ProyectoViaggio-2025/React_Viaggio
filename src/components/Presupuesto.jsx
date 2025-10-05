function Presupuesto({ presupuesto, setPresupuesto }) {
  return (
    <div className="form-group mt-4">
      <label htmlFor="presupuesto">Presupuesto (opcional)</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="number"
          className="form-control presupuesto"
          id="presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
          placeholder="Introduce cuanto dinero pretendes gastar"
        />
      </div>
    </div>
  );
}

export default Presupuesto;