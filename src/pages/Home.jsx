import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../css/home.css";

// 🖼️ Imágenes (importadas desde assets/home)
import logo from "../assets/home/logo.svg";
import iglesiaSanJose from "../assets/home/iglesia-san-jose.png";
import laMaxima from "../assets/home/la-maxima.jpg";
import museoEmiliozzi from "../assets/home/museo-emiliozzi.jpg";
import parqueMitre from "../assets/home/parque-mitre.jpg";
import ilustracionInicio from "../assets/home/ilustracion-inicio.png";
import fotoVivi from "../assets/home/foto-vivi.jpg";
import fotoSergio from "../assets/home/foto-sergio.jpg";
import fotoCarolina from "../assets/home/foto-carolina.png";
import joseMauricio from "../assets/home/jose-mauricio.jpg";
import karenSimari from "../assets/home/karen-simari.jpg";
import facebook from "../assets/home/facebook.png";
import twitter from "../assets/home/twitter.png";
import instagram from "../assets/home/instagram.png";
import centroCultural from "../assets/home/centrocultural.jpg";
import mitre from "../assets/home/mitre.jpg";
import parqueHeliosE from "../assets/home/parqueHeliosE.png";
import Navbar from "../components/Navbar";

export default function Home() {
    useEffect(() => {

        // === LEAFLET MAP ===
        const map = L.map("mapa").setView([-36.8933, -60.3225], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        L.marker([-36.8933, -60.3225])
        .addTo(map)
        .bindPopup("Olavarría, Buenos Aires, Argentina")
        .openPopup();

        // === PARALLAX ===
        const t1 = document.getElementById("parallax-texto");
        const t2 = document.getElementById("parallax-texto2");

        const parallax = () => {
        const y = window.scrollY;
        if (t1) t1.style.transform = `translateX(${y * 0.6}px)`;
        if (t2) t2.style.transform = `translateX(${y * -0.6}px)`;
        };
        window.addEventListener("scroll", parallax);

        // === DRAG & DROP COMMENTS ===
        const zonaOrigen = document.getElementById("zona-origen");
        const dropZone = document.getElementById("drop-zone");

        const itemData = {
        draggable1: {
            titulo: "Vivi Blasco",
            descripcion:
            "¡Excelente página! Encontré todo lo que necesitaba para organizar mi escapada a Olavarría. Clara, rápida y muy visual.",
        },
        draggable2: {
            titulo: "Sergio García Retegui",
            descripcion:
            "Viaggio me ayudó a descubrir lugares increíbles como el Parque Mitre y la iglesia San José. ¡No sabía que Olavarría tenía tanto para ofrecer!",
        },
        draggable3: {
            titulo: "Carolina Vasconcellos",
            descripcion:
            "La mejor guía turística de Olavarría. Me encantaron las fotos y la info útil para cada lugar.",
        },
        draggable4: {
            titulo: "José Mauricio",
            descripcion:
            "Gracias a Viaggio visité el Museo de los Hermanos Emiliozzi. ¡Imperdible para los fans del automovilismo!",
        },
        draggable5: {
            titulo: "Karen Simari",
            descripcion:
            "¡Me encantó la experiencia! Viaggio hizo que recorrer Olavarría fuera fácil y emocionante. Todo está explicado con detalle.",
        },
        };

        function setupDraggable(el) {
        el.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", el.id);
            setTimeout(() => (el.style.display = "none"));
        });
        el.addEventListener("dragend", () => (el.style.display = "flex"));
        }

        document.querySelectorAll(".drg").forEach((el, index) => {
        el.dataset.originalIndex = index;
        setupDraggable(el);
        });

        function setupDrop(zone) {
        zone.addEventListener("dragover", (e) => e.preventDefault());
        zone.addEventListener("drop", (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const el = document.getElementById(id);
            const msg = document.getElementById("mensaje");

            if (el.classList.contains("en-dropzone") && zone.id === "zona-origen")
            return;

            if (zone.id === "drop-zone" && zone.childElementCount > 1) {
            msg.textContent = "Solo se permite un elemento en la zona de drop.";
            return;
            } else msg.textContent = "";

            if (zone.id === "drop-zone") {
            const placeholder = document.createElement("div");
            placeholder.classList.add("placeholder");
            placeholder.style.width = "50%";
            placeholder.style.visibility = "hidden";
            zonaOrigen.replaceChild(placeholder, el);
            placeholder.dataset.placeholderFor = id;

            const cont = document.createElement("div");
            cont.classList.add("info-container", "fade-in");
            cont.style.position = "relative";
            cont.appendChild(el);
            el.draggable = false;
            el.classList.add("en-dropzone");

            const data = itemData[id];
const info = document.createElement("div");
info.classList.add("brg-info");

        // Clonar estrellas del elemento original
        const estrellas = el.querySelector(".drg-estrellas")
        ? el.querySelector(".drg-estrellas").outerHTML
        : "";

        info.innerHTML = `
        <h3>${data.titulo}</h3>
        ${estrellas}
        <p>"${data.descripcion}"</p>
        `;

            const close = document.createElement("button");
            close.textContent = "X";
            close.style.position = "absolute";
            close.style.top = "0px";
            close.style.right = "10px";
            close.style.border = "none";
            close.style.background = "transparent";
            close.style.fontSize = "20px";
            close.style.cursor = "pointer";

            close.addEventListener("click", () => {
                cont.classList.remove("fade-in");
                cont.classList.add("fade-out");
                cont.addEventListener("animationend", () => cont.remove());
                const ph = zonaOrigen.querySelector(
                `[data-placeholder-for="${id}"]`
                );
                if (ph) zonaOrigen.replaceChild(el, ph);
                el.style.display = "flex";
                el.draggable = true;
                el.classList.remove("en-dropzone");
            });

            cont.appendChild(close);
            cont.appendChild(info);
            zone.appendChild(cont);
            }
        });
        }

        setupDrop(zonaOrigen);
        setupDrop(dropZone);

        return () => {
        window.removeEventListener("scroll", parallax);
        };
    }, []);

    // JSX ------------------------------------------------------------------------
    return (
        <>
        {/* HERO */}
        <div className="contenedor-inicio-info container-fluid">
            <div className="row justify-content-center align-items-center contenedor-inicio">
            <div className="col-lg-8 text-center inicio-info">
                <h1 className="display-3">Una mejor experiencia de turismo</h1>
                <p className="fs-4">Tu itinerario personalizado a donde sea que vayas</p>
                <div className="boton-contenedor">
                <button className="btn-comenzar btn-lg">Comenzar</button>
                </div>
            </div>
            </div>
        </div>

        {/* PÁGINA 1 */}
        <div className="contenedor-pag1 container">
            <div className="seccion-texto">
            <h2>Visita nuevos lugares</h2>
            <hr />
            <p>Lo mejor de la ciudad en la palma de tus manos</p>
            </div>

            <div className="cards-contenedor">
            <div className="img-card img-card-top">
                <img src={iglesiaSanJose} alt="Iglesia San José" />
                <div className="info-contenedor">
                <h2>Iglesia San José</h2>
                <p>Iglesia principal de la ciudad, punto histórico y religioso.</p>
                </div>
            </div>
            <div className="img-card img-card-top">
                <img src={laMaxima} alt="La Máxima" />
                <div className="info-contenedor">
                <h2>La Máxima</h2>
                <p>Reserva natural con fauna local, senderos y espacios verdes.</p>
                </div>
            </div>
            <div className="img-card margen-inferior img-card-bottom">
                <img src={museoEmiliozzi} alt="Museo Emiliozzi" />
                <div className="info-contenedor">
                <h2>Museo Hnos. Emiliozzi</h2>
                <p>Íconos del automovilismo argentino, con autos originales.</p>
                </div>
            </div>
            <div className="img-card margen-inferior img-card-bottom">
                <img src={parqueMitre} alt="Parque Mitre" />
                <div className="info-contenedor">
                <h2>Parque Mitre</h2>
                <p>Pulmón verde urbano con ferias y actividades recreativas.</p>
                </div>
            </div>
            </div>
        </div>

        {/*ACORDEON MOBILE PAG 1*/}
        <div className="acordeon-contenedor accordion container" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Iglesia San Jose 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse img-acordeon-container" data-bs-parent="#accordionExample">
                    <img src={iglesiaSanJose} className="img-fluid" alt=""/>
                <div className="accordion-body">
                    <strong>Iglesia principal de la ciudad</strong> , punto de referencia histórico y religioso, con su arquitectura neogótica, declarado como patrimonio histórico local.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    La Máxima (Reserva Natural Municipal)
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse img-acordeon-container" data-bs-parent="#accordionExample">
                    <img src={laMaxima} className="img-fluid" alt=""/>
                <div className="accordion-body">
                    <strong>La Máxima,</strong> Fauna local (Ciervos, aves, reptiles). Áreas verdes, juegos infantiles, parrilas.
                    Senderos para caminar y espacios recreativos.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Museo Hermanos Emiliozzi
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse img-acordeon-container" data-bs-parent="#accordionExample">
                    <img src={museoEmiliozzi} className="img-fluid" alt=""/>
                <div className="accordion-body">
                    <strong>Hnos Emiliozzi</strong> los corredos Juan y Dante Emiliozzi, íconos del automovilismo argentino.
                            ubicaco en su antiguo taller. Autos originales (como la "Galera"), trofeos, herrmientas y documentos. Patrimonio automovilístico nacional.
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Parque Mitre
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse img-acordeon-container" data-bs-parent="#accordionExample">
                    <img src={parqueMitre} className="img-fluid" alt=""/>
                <div className="accordion-body">
                    <strong>Parque Mitre </strong>Lugar de encuentro para caminatas, ferias y eventos, principal pulmón verde urbano y punto social de Olavarria, puentes, juegos y pista para correr o andar en bici
                </div>
                </div>
            </div>


        </div>

    {/* PAG 2*/}
    <div className="parallax">


        {/*SOBRE VIAGGIO*/}
        <div className="conte">
            <div className="casa-contenedor container-fluid bg-dark">
                <div className="info casi">
                    <div className="info-h3-p">
                        <h3>HOLA! ESTO ES VIAGGIO</h3>
                        <hr className="hr-sobreviaggio"/>
                        <p>Viaggio es una guía digital pensada para que descubras los mejor de <strong>Olavarría</strong> de forma simple, visual y auténtica.<br/>Reunimos los rincones hitóricos, los espacios verdes, las experiencias culturales y tambien <strong>Los mejores alojamientos</strong>, para que puedas planear tu viaje completo desde un solo lugar.</p>
                        <a className="a-boton-comenzar" href="./paginas/sobreViaggio.html">
                        <button id="btn-conocerMas">Conocer más</button>
                        </a>
                        
                    </div>
                </div>
                <div className="ilustracion-contenedor">
                        <img src={ilustracionInicio} alt=""/>
                </div>
            </div>
        </div>
    </div>



        {/* MAPA */}
        <div className="mapa-contenedor">
            <h2 className="mx-5">Mapa de la ciudad</h2>
            <div id="mapa" className="mapa"></div>
        </div>

        {/* COMENTARIOS */}
        <div className="draggable-container">
            <div className="drop-zone zone" id="drop-zone">
            <div className="zona-aqui">
                Arrastrá aquí cualquiera de las personas para ver su comentario
            </div>
            </div>
            <div id="mensaje" className="msj"></div>
            <div className="zone container" id="zona-origen">
            <div className="drg" id="draggable1" draggable="true">
                <img className="drg-img drg-img-js" src={fotoVivi} alt="" />
                <div className="drg-estrellas">
                <p>★</p><p>★</p><p>★</p><p>★</p><p>★</p>
                </div>
            </div>
            <div className="drg" id="draggable2" draggable="true">
                <img className="drg-img drg-img-js" src={fotoSergio} alt="" />
                <div className="drg-estrellas">
                <p>★</p><p>★</p><p>★</p><p>★</p><p>★</p>
                </div>
            </div>
            <div className="drg" id="draggable3" draggable="true">
                <img className="drg-img drg-img-js" src={fotoCarolina} alt="" />
                <div className="drg-estrellas">
                <p>★</p><p>★</p><p>★</p><p>★</p><p>★</p>
                </div>
            </div>
            <div className="drg" id="draggable4" draggable="true">
                <img className="drg-img drg-img-js" src={joseMauricio} alt="" />
                <div className="drg-estrellas">
                <p>★</p><p>★</p><p>★</p><p>★</p><p>★</p>
                </div>
            </div>
            <div className="drg" id="draggable5" draggable="true">
                <img className="drg-img drg-img-js" src={karenSimari} alt="" />
                <div className="drg-estrellas">
                <p>★</p><p>★</p><p>★</p><p>★</p><p>★</p>
                </div>
            </div>
            </div>
        </div>

        {/* CARRUSEL */}
        <div className="carousel-contenedor container-fluid">
            <div className="carrusel">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img src={centroCultural} className="d-block w-100" alt="Centro Cultural" />
                    </div>
                    <div className="carousel-item">
                        <img src={mitre} className="d-block w-100" alt="Parque Mitre" />
                    </div>
                    <div className="carousel-item">
                        <img src={parqueHeliosE} className="d-block w-100" alt="Helios E." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            </div>
        </div>

        </>
    );
}
