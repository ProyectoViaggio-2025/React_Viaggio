import { useEffect, useState } from 'react';
import SelectorDestino from '../components/alojamientos/SelectorDestino';
import SelectorFechas from '../components/alojamientos/SelectorFechas';
import Presupuesto from '../components/alojamientos/Presupuesto';
import Alojamientos from '../components/alojamientos/Alojamientos';
import ActividadesBoton from '../components/alojamientos/ActividadesBoton';


import '../css/alojamientos.css';
import fondoAlojamientos from '../assets/alojamientos/PortadasHoteles/lineas-grise-dos.svg';


function PaginaAlojamientos() {
  const [hoteles, setHoteles] = useState([]);
  const [seleccionadoHoy, setSeleccionadoHoy] = useState(false);
  const [alojamientoSeleccionado, setAlojamientoSeleccionado] = useState( JSON.parse(localStorage.getItem(`alojamientoSeleccionado`)) || null );
  const [ciudad, setCiudad] = useState('');
  const [fechaLlegada, setFechaLlegada] = useState('');
  const [fechaRegreso, setFechaRegreso] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [formularioIntentado, setFormularioIntentado] = useState(false);
  const [mostrarAlojamientos, setMostrarAlojamientos] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/hoteles")
      .then((res) => res.json())
      .then((data) => setHoteles(data));
  }, []);


  const handleSeleccionar = (hotel) => {
    if(!hotel) {
      setAlojamientoSeleccionado(null);
      localStorage.removeItem('alojamientoSeleccionado');
      setSeleccionadoHoy(false);
      return;
    }

    setAlojamientoSeleccionado(hotel);
    localStorage.setItem('alojamientoSeleccionado', JSON.stringify(hotel));
    setSeleccionadoHoy(true);
  };


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


  return (
    <>
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
              alojamientos={hoteles}
              alojamientoSeleccionado={alojamientoSeleccionado}
              onSeleccionar={handleSeleccionar}
            />
          )}

          <ActividadesBoton visible={seleccionadoHoy}/>
        </div>
      </div>
    </>
  );
}

export default PaginaAlojamientos;