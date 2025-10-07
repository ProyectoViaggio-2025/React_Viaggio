import { useState } from 'react';
import SelectorDestino from '../components/alojamientos/SelectorDestino';
import SelectorFechas from '../components/alojamientos/SelectorFechas';
import Presupuesto from '../components/alojamientos/Presupuesto';
import Alojamientos from '../components/alojamientos/Alojamientos';
import ActividadesBoton from '../components/alojamientos/ActividadesBoton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../css/alojamientos.css';
import fondoAlojamientos from '../assets/alojamientos/PortadasHoteles/lineas-grise-dos.svg';

import argentinoImg from '../assets/alojamientos/PortadasHoteles/Argentino.png';
import casaJosefinaImg from '../assets/alojamientos/PortadasHoteles/Casa_Josefina.png';
import centenarioImg from '../assets/alojamientos/PortadasHoteles/Centenario.png';
import demetrioImg from '../assets/alojamientos/PortadasHoteles/Demetrio.png';
import riyakImg from '../assets/alojamientos/PortadasHoteles/Riyak.png';
import santaRosaImg from '../assets/alojamientos/PortadasHoteles/Santa_Rosa.png';
import rexImg from '../assets/alojamientos/PortadasHoteles/rex.jpg';
import olavarriaImg from '../assets/alojamientos/PortadasHoteles/HotelOlavarria.jpg';
import skyViewImg from '../assets/alojamientos/PortadasHoteles/skyView.jpg';

function PaginaAlojamientos() {
  const [ciudad, setCiudad] = useState('');
  const [fechaLlegada, setFechaLlegada] = useState('');
  const [fechaRegreso, setFechaRegreso] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [formularioIntentado, setFormularioIntentado] = useState(false);
  const [mostrarAlojamientos, setMostrarAlojamientos] = useState(false);
  const [alojamientoSeleccionado, setAlojamientoSeleccionado] = useState(null);

  const formularioValido = ciudad !== '' && fechaLlegada !== '';

  const handleContinuar = () => {
    setFormularioIntentado(true);
    if (formularioValido) {
      setMostrarAlojamientos(true);
      const seccion = document.getElementById('seccion-alojamientos');
      if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const alojamientos = [
    { id: 1, nombre: 'Hotel Argentino', descripcion: 'Ubicado en el centro, ideal para viajeros que buscan comodidad y cercanía.', imagen: argentinoImg },
    { id: 2, nombre: 'Casa Josefina', descripcion: 'Alojamiento familiar con encanto local y atención personalizada.', imagen: casaJosefinaImg },
    { id: 3, nombre: 'Hotel Centenario', descripcion: 'Elegancia clásica frente a espacios verdes, perfecto para descansar.', imagen: centenarioImg },
    { id: 4, nombre: 'Hotel Demetrio', descripcion: 'Moderno y funcional, cerca de los principales puntos turísticos.', imagen: demetrioImg },
    { id: 5, nombre: 'Hotel Riyak', descripcion: 'Estilo boutique con diseño contemporáneo y servicios premium.', imagen: riyakImg },
    { id: 6, nombre: 'Hotel Santa Rosa', descripcion: 'Ambiente tranquilo y acogedor, ideal para escapadas relajantes.', imagen: santaRosaImg },
    { id: 7, nombre: 'Hotel Rex', descripcion: 'Opción económica con excelente ubicación y atención cordial.', imagen: rexImg },
    { id: 8, nombre: 'Hotel Olavarría', descripcion: 'Conectado con la historia local, frente al Parque Mitre.', imagen: olavarriaImg },
    { id: 9, nombre: 'Sky View', descripcion: 'Vistas panorámicas y diseño minimalista para una experiencia única.', imagen: skyViewImg },
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundImage: `url(${fondoAlojamientos})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <div className="container mb-5">
          <h2 className="titulo-destino">Elige tu destino</h2>

          <SelectorDestino ciudad={ciudad} setCiudad={setCiudad} formularioIntentado={formularioIntentado} />
          <SelectorFechas
            fechaLlegada={fechaLlegada}
            setFechaLlegada={setFechaLlegada}
            fechaRegreso={fechaRegreso}
            setFechaRegreso={setFechaRegreso}
            formularioIntentado={formularioIntentado}
          />
          <Presupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
          <button
            className="btn btn-warning btn-lg mt-4"
            onClick={handleContinuar}
            disabled={!formularioValido}
          >
            Continuar
          </button>

          {mostrarAlojamientos && (
            <Alojamientos
              alojamientos={alojamientos}
              alojamientoSeleccionado={alojamientoSeleccionado}
              setAlojamientoSeleccionado={setAlojamientoSeleccionado}
            />
          )}

          <ActividadesBoton visible={alojamientoSeleccionado != null} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PaginaAlojamientos;