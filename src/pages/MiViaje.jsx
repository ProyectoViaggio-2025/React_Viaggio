import { useState, useEffect } from 'react';
import ResumenViaje from '../components/MiViaje/ResumenViaje';
import ItinerarioActividades from '../components/miViaje/ItinerarioActividades';
import MenuOrdenar from '../components/miViaje/MenuOrdenar';
import BotonVolver from '../components/miViaje/BotonVolver';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../css/miViaje.css';
const filterIcon = "https://cdn-icons-png.flaticon.com/512/54/54481.png";

function MiViaje() {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [itinerario, setItinerario] = useState([]);

  useEffect(() => {
    const actividadesGuardadas = JSON.parse(localStorage.getItem('itinerario')) || [];
    setItinerario(actividadesGuardadas);
  }, []);

  const toggleMenu = () => setMostrarMenu(prev => !prev);
  const cerrarMenu = () => setMostrarMenu(false);

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h1 className="mb-4">Mi viaje</h1>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-4">
            <ResumenViaje />
          </div>
          <div className="col-12 col-lg-8 col-md-7 ms-auto">
            <h2 className="text-md-end text-center pe-md-5">Actividades</h2>
            <ItinerarioActividades itinerario={itinerario} />
          </div>
        </div>
      </div>

      <button id="btnOrdenar" onClick={toggleMenu}>
        <img src={filterIcon} alt="Ordenar" /> Ordenar
      </button>

      {mostrarMenu && <MenuOrdenar cerrarMenu={cerrarMenu} />}

      <BotonVolver />
      <Footer />
    </>
  );
}

export default MiViaje;