import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/home/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="navbar container">
        <a className="navbar-brand a-logo" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/destinos">
                Destinos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre-viaggio">
                Sobre Viaggio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-warning nav-link text-white"
                href="/registrarse"
              >
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
