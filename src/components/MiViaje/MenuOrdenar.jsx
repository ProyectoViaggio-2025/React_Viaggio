function MenuOrdenar({ cerrarMenu }) {
  return (
    <div id="menuOrdenar" className="menu-ordenar">
      <h4>Ordenar según:</h4>
      <label>
        <input type="checkbox" name="ordenar" value="cercanía" /> Cercanía
      </label>
      <br />
      <label>
        <input type="checkbox" name="ordenar" value="horario" /> Horario
      </label>
      <br />
      <label>
        <input type="checkbox" name="ordenar" value="interes" /> Interés
      </label>
      <br />
      <button id="btnCerrarOrdenar" onClick={cerrarMenu}>
        Cerrar
      </button>
    </div>
  );
}

export default MenuOrdenar;