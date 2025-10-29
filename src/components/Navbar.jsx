import { Link } from "react-router-dom";
import "../css/navbar.css";


export default function Navbar() {
    return (
            <nav
                className="navbar-contenedor container-fluid navbar-expand-lg"
                id="mainNavbar"
            >
                <div className="navbar container">
                    <Link className="a-logo navbar-brand" to="*">
                        <img src="/src/assets/home/logo.svg" alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        id="navbarToggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="navbar-ul-contenedor collapse navbar-collapse"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/destinos">
                            Destinos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobreViaggio">
                            Sobre Viaggio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn-registrate nav-link text-white" to="/register">
                            Registrarse
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

    );
}
