import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import { useAuth } from "../context/AuthContext";
import logo from "../../src/assets/home/logo.svg";
import logoUsuario from "../../src/assets/perfilUsuario/fotoperfil.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className="navbar-contenedor container-fluid navbar-expand-lg"
      id="mainNavbar"
    >
      <div className="navbar container">
        {/* Logo */}
        <Link className="a-logo navbar-brand" to="/">
          <img src={logo} alt="logo" height="50" />
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler navbar-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-ul-contenedor collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="Nav-bar-link nav-link" to="/destinos">
                Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="Nav-bar-link nav-link" to="/sobreViaggio">
                Sobre Viaggio
              </Link>
            </li>

            {/* Usuario */}
            {!user ? (
              <li className="nav-item">
                <Link
                  className="btn-registrate Nav-bar-link nav-link text-white"
                  to="/register"
                >
                  Registrarse
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <a
                  className="Nav-bar-link nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={logoUsuario}
                    alt="Usuario"
                    className="rounded-circle"
                    width="35"
                    height="35"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link
                      className="Nav-bar-dropdown-item dropdown-item"
                      to="/perfilUsuario"
                    >
                      Mi perfil
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                      style={{ cursor: "pointer" }}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
