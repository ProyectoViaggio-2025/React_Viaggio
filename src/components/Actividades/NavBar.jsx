    import "./actividades.css"
    
    // src/components/Navbar.jsx
    export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand a-logo" href="/">
            <img src="/src/assets/Imagenes/home/logo.svg" alt="Logo Viaggio" />
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
                <a className="nav-link" href="/sobreViaggio">
                    Sobre Viaggio
                </a>
                </li>
                <li className="nav-item">
                <a className="btn btn-warning nav-link text-white" href="/registrarse">
                    Registrarse
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    }
