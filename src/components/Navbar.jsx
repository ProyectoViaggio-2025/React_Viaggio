import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/Imagenes/home/logo.svg" alt="Logo Viaggio" style={{ height: '40px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/destinos">Destinos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobreViaggio">Sobre Viaggio</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;