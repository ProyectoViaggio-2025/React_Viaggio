import PerfilHeader from "../components/PerfilUsuario/PerfilHeader";
import PerfilTabs from "../components/PerfilUsuario/PerfilTabs";
import "./../css/perfilUsuario.css";

const PerfilUsuario = () => {
  return (
    <section className="perfil container mt-5">
      <PerfilHeader />
      <PerfilTabs />
    </section>
  );
};

export default PerfilUsuario;
