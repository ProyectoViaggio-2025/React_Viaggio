import "../css/destinos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

import Olavarria from "../assets/destinos/Olavarria.jpg";
import MarDelPlata from "../assets/destinos/MarDelPlata.jpg";
import Mendoza from "../assets/destinos/Mendoza.jpg";
import Cafayate from "../assets/destinos/Cafayate.jpg";
import Bariloche from "../assets/destinos/Bariloche.jpg";
import SanJuan from "../assets/destinos/SanJuan.jpg";
import LosAndes from "../assets/destinos/SanMartinDeLosAndes.jpg";
import Ushuaia from "../assets/destinos/UshuaiaTrenDelFinDelMundo.webp";

export default function Destinos() {
  const navigate = useNavigate();

  const destinos = [
    { nombre: "Olavarría", imagen: Olavarria, enlace: "/alojamientos" },
    { nombre: "Mar del Plata", imagen: MarDelPlata },
    { nombre: "Mendoza", imagen: Mendoza },
    { nombre: "Salta Cafayate", imagen: Cafayate },
    { nombre: "Bariloche", imagen: Bariloche },
    { nombre: "San Juan", imagen: SanJuan },
    { nombre: "Los Andes", imagen: LosAndes },
    { nombre: "Ushuaia", imagen: Ushuaia },
  ];

  const handleClick = (enlace) => {
    if (enlace) navigate(enlace);
  };

  return (
    <>
      <Navbar />

      <div className="columnas-imagenes-contenedor">
        <h2>Destinos</h2>
        <div className="columna-imagenes">
          {destinos.map((d, i) => (
            <div key={i} className="columna">
              <img
                className={d.nombre === "Olavarría" ? "columna-img-olavarria" : "columna-img"}
                src={d.imagen}
                alt={d.nombre}
                style={{ cursor: d.enlace ? "pointer" : "default" }}
                onClick={() => handleClick(d.enlace)}
              />

              {/* Overlay solo si no es Olavarría */}
              {d.nombre !== "Olavarría" && <div className="overlay"></div>}

              <p>{d.nombre}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
