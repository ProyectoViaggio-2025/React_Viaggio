    // src/pages/Actividades.jsx
    import { useState, useEffect } from "react";
    import ActividadCard from "./ActividadCard.jsx";
    import Navbar from "./NavBar.jsx";
    import Footer from "./Footer.jsx";
    import "./actividades.css";

    const nuevasActividades = [
    {
        titulo: "Casa del bicentenario",
        descripcion: "Espacio cultural moderno que ofrece exposiciones, talleres y actividades para toda la comunidad. Un punto de encuentro para el arte y la historia local.",
        imagen: "../../../public/actividades-img/Casa-del-Bicentenario.jpg"
    },
    {
        titulo: "Teatro municipal",
        descripcion: "Histórico escenario de la ciudad donde se presentan obras teatrales, conciertos y eventos culturales. Un ícono de la vida artística olavarriense.",
        imagen: "../../../public/actividades-img/teatro-municipal.jpg"
    },
    {
        titulo: "Museo de las ciencias",
        descripcion: "Centro interactivo dedicado a la divulgación científica. Ideal para aprender jugando, con propuestas educativas para todas las edades.",
        imagen: "../../../public/actividades-img/museo-de-ciencias.jpg"
    },
    {
        titulo: "Centro Cultural",
        descripcion: "Espacio cultural con muestras de arte, talleres y espectáculos en un edificio histórico restaurado.",
        imagen: "../../../public/actividades-img/centro-cultural.jpg"
    },
    {
        titulo: "Parque Mitre",
        descripcion: "Clásico parque olavarriense junto al arroyo Tapalqué, con puentes colgantes, juegos y espacios para caminar o hacer ejercicio.",
        imagen: "../../../public/actividades-img/parque-mitre.jpg"
    },
    {
        titulo: "Museo Municipal Hermanos Emiliozzi",
        descripcion: "El Museo Municipal Hermanos Emiliozzi rinde homenaje a los mas grandes deportistas de la historia de Olavarria:Dante y Torcuato Emiliozzi.",
        imagen: "../../../public/actividades-img/museo-he.jpg"
    },
    {
        titulo: "Museo Damaso Arce",
        descripcion: "Museo de artes plásticas y orfebrería en el centro de Olavarría, con colección permanente de piezas del orfebre Dámaso Arce y obras de artistas como Quinquela Martín y Raúl Soldi ",
        imagen: "../../../public/actividades-img/museo-da.jpg"
    },
    {
        titulo: "Cine Paris",
        descripcion: "Histórico cine olavarriense renovado, con salas modernas, proyección digital y candy bar. Un punto cultural emblemático del centro, que combina tradición y tecnología para una experiencia completa.",
        imagen: "../../../public/actividades-img/cine-lp.png"
    },
    {
        titulo: "Cine Flix",
        descripcion: "Moderno complejo de dos salas digitales (incluido 3D) dentro de Chango Mas, con buen sonido, cómodas butacas, estacionamiento amplio y promociones frecuentes",
        imagen: "../../../public/actividades-img/cine-flix.png"
    },
    {
        titulo: "Parque Helios Eseverri",
        descripcion: "Amplio espacio verde con más de 1 100 árboles, bicisenda, juegos infantiles y canchas deportivas. Ideal para caminar, entrenar o disfrutar actividades comunitarias al aire libre. ",
        imagen: "../../../public/actividades-img/parque-norte.png"
    },
    {
        titulo: "La Maxima",
        descripcion: "Espacio natural con senderos, juegos y un pequeño zoológico. Ideal para disfrutar en familia y aprender sobre la fauna local. Un lugar que combina recreación y educación ambiental en un entorno cuidado y accesible.",
        imagen: "../../../public/actividades-img/la-maxima.png"
    },
    {
        titulo: "Brau",
        descripcion: "Cervecería y restaurant moderno en Gral. Paz al 2600, con cervezas artesanales, pizzas, platos contundentes y ambiente cálido con patio. ",
        imagen: "../../../public/actividades-img/brau.jpg"
    },
    {
        titulo: "Parque Recreo La Isla",
        descripcion: "Amplio espacio natural junto al arroyo Tapalqué, con mesas, parrillas, quinchos, senderos y áreas de descanso; ideal para un día de picnic, caminatas o actividades al aire libre",
        imagen: "../../../public/actividades-img/la-isla.jpg"
    }
    // ... el resto
    ];

    export default function Actividades() {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [actividadesMostradas, setActividadesMostradas] = useState(6);
    const [itinerario, setItinerario] = useState(
        JSON.parse(localStorage.getItem("itinerario")) || []
    );

    useEffect(() => {
        localStorage.setItem("itinerario", JSON.stringify(itinerario));
    }, [itinerario]);

    const verMas = () => {
        setActividadesMostradas((prev) =>
        Math.min(prev + 3, nuevasActividades.length)
        );
    };

    return (
        <main>
        <Navbar />

        {/* Título y filtro */}
        <div className="titulo">
            <h2 className="mx-5">Explora nuevos lugares</h2>
            <button onClick={() => setMostrarFiltros(!mostrarFiltros)}>
            <img src="/src/assets/Imagenes/actividades/filter.png" alt="Filtro" /> Filtrar
            </button>
        </div>

        {mostrarFiltros && (
            <div className="menu-filtros">
            <h4>Filtrar por intereses</h4>
            <label>
                <input type="checkbox" value="relajacion" /> Relajación
            </label>
            <br />
            <label>
                <input type="checkbox" value="aventura" /> Aventura
            </label>
            <br />
            <label>
                <input type="checkbox" value="gastronomia" /> Gastronomía
            </label>
            <br />
            <label>
                <input type="checkbox" value="cultural" /> Cultural
            </label>
            <br />
            <button onClick={() => setMostrarFiltros(false)}>Cerrar</button>
            </div>
        )}

        {/* Tarjetas */}
        <div className="d-flex align-items-center justify-content-center">
            <div className="m-4 row gy-5 gx-5 align-items-stretch">
            {nuevasActividades.slice(0, actividadesMostradas).map((act, i) => (
                <ActividadCard
                key={i}
                actividad={act}
                itinerario={itinerario}
                setItinerario={setItinerario}
                />
            ))}
            </div>
        </div>

        {/* Botón Ver más */}
        <div className="d-flex justify-content-center">
            {actividadesMostradas < nuevasActividades.length ? (
            <button type="button" className="btn ver-mas-btn" onClick={verMas}>
                ✓ Ver más
            </button>
            ) : (
            <p className="text-center mt-3 fw-bold">No hay más actividades para mostrar</p>
            )}
        </div>

        {/* Botones extra */}
        <div className="contbotones">
            <a href="/alojamientos" className="boton1">
            Volver
            </a>
            <a href="/miViaje" className="boton2">
            Ir a Mi viaje
            </a>
        </div>

        <Footer />
        </main>
    );
    }
