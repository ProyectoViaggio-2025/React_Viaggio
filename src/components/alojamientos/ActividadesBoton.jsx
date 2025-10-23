import { useNavigate } from "react-router-dom";


function ActividadesBoton({ visible }) {
  if (!visible) return null;

  const navigate = useNavigate();

  const irActividades = () => {
    navigate("/actividades");
  };


  return (
    <div className="text-center my-5" id="contenedor-actividades">
      <button className="btn btn-lg px-5 py-3" id="btn-ver-actividades" onClick={irActividades}>
        Ver actividades
      </button>
    </div>
  );
}

export default ActividadesBoton;