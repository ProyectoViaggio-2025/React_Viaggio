import "../css/SobreViaggio.css";
import fachadaImg from "../assets/SobreViaggioImgs/carousel-fachada.png";
import interiorImg from "../assets/SobreViaggioImgs/carousel-interior.png";
import reunionImg from "../assets/SobreViaggioImgs/carousel-reunion.png";
import planificadorImg from "../assets/SobreViaggioImgs/planificadorInteligente.png";
import actividadesImg from "../assets/SobreViaggioImgs/actividades.png";
import itinerarioImg from "../assets/SobreViaggioImgs/itinerario.png";

export default function SobreViaggio() {
  return (
    <>
      <div className="head">
        <div className="text-content">
          <h2>Acerca de Viaggio</h2>
          <h1>Quiénes somos</h1>
        </div>
      </div>
      <div className="container mt-5 mb-3">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-6 h-100">
            <div className="info">
              <h1 className="text-center text-lg-start">Somos Viaggio</h1>
              <p>
                Nos mueve la pasión por facilitar experiencias de viaje
                auténticas y accesibles para todos. Creemos que descubrir nuevos
                destinos y conectar con culturas es una forma de vivir mejor y
                más plenamente.
              </p>
              <p>
                Por eso, innovamos constantemente en nuestra plataforma,
                integrando tecnología inteligente para ofrecer planificaciones
                personalizadas, prácticas y adaptadas a las necesidades de cada
                viajero en Argentina.
              </p>
              <p>
                Nuestra misión es ser el compañero ideal para quienes sueñan con
                recorrer el país, optimizando su tiempo y presupuesto con
                propuestas inteligentes y flexibles.
              </p>
              <p>
                Viaggio es más que una herramienta: es una comunidad que busca
                enriquecer el turismo local, respetando el entorno y promoviendo
                un desarrollo sostenible y responsable.
              </p>
              <p>
                Cada viaje comienza con una buena planificación, y con Viaggio,
                ese primer paso es simple, confiable y lleno de posibilidades.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="contImagen">
              <h4>Viaggio en acción</h4>
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={fachadaImg}
                      className="d-block w-100"
                      alt="fachada edificio Viaggio"
                      height={550}
                    />
                    <div className="carousel-caption d-none d-md-block" />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={interiorImg}
                      className="d-block w-100"
                      alt="sala de estar Viaggio"
                      height={550}
                    />
                    <div className="carousel-caption d-none d-md-block" />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={reunionImg}
                      className="d-block w-100"
                      alt="oficinas Viaggio"
                      height={550}
                    />
                    <div className="carousel-caption d-none d-md-block" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sucursales">
        <h2>
          <span className="linea">———————</span> Diseñamos experiencias
          <span className="linea">———————</span>
        </h2>
      </div>
      <div className="tarjetas row">
        <div className="tarjeta col-6 col-md-4">
          <a href="alojamientos.html">
            <img src={planificadorImg} alt="Mapa" />
          </a>
          <h3>PLANIFICACIÓN INTELIGENTE</h3>
          <p>
            Organizá tu viaje en segundos con itinerarios personalizados según
            tus intereses, presupuesto y duración del viaje.
          </p>
        </div>
        <div className="tarjeta col-6 col-md-4">
          <a href="alojamientos.html">
            <img src={actividadesImg} alt="Actividades" />
          </a>
          <h3>RECOMENDACIONES PERSONALIZADAS</h3>
          <p>
            Recibí sugerencias de destinos, actividades, alojamiento y
            transporte según tu estilo de viaje.
          </p>
        </div>
        <div className="tarjeta col-12 col-md-4">
          <a href="alojamientos.html">
            <img src={itinerarioImg} alt="Packaging" />
          </a>
          <h3>TODO EN UN SOLO LUGAR</h3>
          <p>
            Guardá tu itinerario, reservas, tickets y documentos de viaje en un
            solo lugar accesible desde cualquier dispositivo.
          </p>
        </div>
      </div>
    </>
  );
}
