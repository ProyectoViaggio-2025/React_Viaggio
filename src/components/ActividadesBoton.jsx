function ActividadesBoton({ visible }) {
  if (!visible) return null;

  return (
    <div className="text-center my-5" id="contenedor-actividades">
      <button className="btn btn-lg px-5 py-3" id="btn-ver-actividades">
        Ver actividades
      </button>
    </div>
  );
}

export default ActividadesBoton;