import fotoperfil from "../../assets/perfilUsuario/fotoperfil.jpg";
import { useAuth } from "../../context/AuthContext";

const PerfilHeader = () => {
  const { user } = useAuth();

  return (
    <div className="perfil-header text-center">
      <div className="perfil-foto mb-3">
        <img
          src={fotoperfil}
          alt="Foto de perfil"
          className="rounded-circle border border-3 border-dark"
        />
      </div>

      <h2>{user?.nombre || "Usuario"}</h2>

      <p className="text-muted">"Siempre buscando nuevos horizontes ✈️"</p>
      <button className="btn btn-warning">Editar perfil</button>
    </div>
  );
};

export default PerfilHeader;
