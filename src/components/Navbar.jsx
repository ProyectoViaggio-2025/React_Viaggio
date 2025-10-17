import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/home/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="navbar container">
        {/* Logo como Link */}
        <Link className="navbar-brand a-logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>

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
              <Link className="nav-link" to="/destinos">
                Destinos
              </Link>{" "}
              |{" "}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobreviaggio">
                Sobre Viaggio
              </Link>{" "}
              |{" "}
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-warning nav-link text-white"
                to="/register"
              >
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
