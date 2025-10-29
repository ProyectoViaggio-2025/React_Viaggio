import fotoperfil from "../assets/perfilUsuario/fotoperfil.jpg";
import "../css/perfilUsuario.css";

const PerfilUsuario = () => {
  return (
    <>
      {/* PERFIL */}
      <section className="perfil container mt-5">
        {/* Header de perfil */}
        <div className="perfil-header text-center">
          <div className="perfil-foto mb-3">
            <img
              src={fotoperfil}
              alt="Foto de perfil"
              className="rounded-circle border border-3 border-dark"
            />
          </div>
          <h2>Nombre Usuario</h2>
          <p className="text-muted">"Siempre buscando nuevos horizontes ✈️"</p>
          <button className="btn btn-warning">Editar perfil</button>
        </div>
        {/* Tabs */}
        <ul
          className="nav nav-tabs justify-content-center mt-4"
          id="perfilTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="planeados-tab"
              data-bs-toggle="tab"
              data-bs-target="#planeados"
              type="button"
              role="tab"
            >
              Viajes planeados
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="realizados-tab"
              data-bs-toggle="tab"
              data-bs-target="#realizados"
              type="button"
              role="tab"
            >
              Viajes realizados
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="wishlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#wishlist"
              type="button"
              role="tab"
            >
              Wishlist
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="favoritos-tab"
              data-bs-toggle="tab"
              data-bs-target="#favoritos"
              type="button"
              role="tab"
            >
              Favoritos
            </button>
          </li>
        </ul>
        {/* Contenido tabs */}
        <div className="tab-content mt-4">
          {/* Viajes planeados */}
          <div
            className="tab-pane fade show active"
            id="planeados"
            role="tabpanel"
          >
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Viaje a Bariloche</h5>
                <p className="card-text">
                  Del 10 al 15 de diciembre - hospedaje en cabaña
                </p>
                <button className="btn btn-outline-primary btn-sm">
                  Ver detalles
                </button>
                <button className="btn btn-success btn-sm">
                  Sincronizar viaje
                </button>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Viaje a Córdoba</h5>
                <p className="card-text">
                  Del 20 al 25 de enero - hotel céntrico
                </p>
                <button className="btn btn-outline-primary btn-sm">
                  Ver detalles
                </button>
                <button className="btn btn-success btn-sm">
                  Sincronizar viaje
                </button>
              </div>
            </div>
          </div>
          {/* Viajes realizados */}
          <div className="tab-pane fade" id="realizados" role="tabpanel">
            <p>Estos son tus viajes completados:</p>
            {/* Viaje a Machu Picchu */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Viaje a Machu Picchu</h5>
                <p className="card-text">
                  <strong>Fecha:</strong> 5 al 12 de julio de 2025
                </p>
                <p className="card-text">
                  <strong>Alojamiento:</strong> Hotel boutique en Aguas
                  Calientes
                </p>
                <p className="card-text">
                  <strong>Actividades:</strong> Tour guiado en Machu Picchu,
                  Caminata a Huayna Picchu, Visita al Valle Sagrado, Paseo en
                  tren panorámico
                </p>
                <button className="btn btn-outline-primary btn-sm">
                  Ver detalles
                </button>
              </div>
            </div>
            {/* Viaje a Córdoba */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Viaje a Córdoba</h5>
                <p className="card-text">
                  <strong>Fecha:</strong> 20 al 25 de enero de 2025
                </p>
                <p className="card-text">
                  <strong>Alojamiento:</strong> Hotel céntrico en el microcentro
                </p>
                <p className="card-text">
                  <strong>Actividades:</strong> City tour histórico, Caminatas
                  por las sierras, Degustación gastronómica, Visita a museos
                  locales
                </p>
                <button className="btn btn-outline-primary btn-sm">
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
          {/* Wishlist */}
          <div className="tab-pane fade" id="wishlist" role="tabpanel">
            <p>Destinos que sueñas con visitar ✨</p>
            <ul>
              <li>Mar del Plata</li>
              <li>Salta</li>
              <li>El Calafate</li>
            </ul>
          </div>
          {/* Favoritos */}
          <div className="tab-pane fade" id="favoritos" role="tabpanel">
            <p>Actividades y hospedajes guardados.</p>
            <ul>
              <li>Cabañas en Bariloche</li>
              <li>City tour en Buenos Aires</li>
              <li>Restaurantes en Mendoza</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PerfilUsuario;
