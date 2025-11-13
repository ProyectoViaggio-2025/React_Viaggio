import CardAlojamiento from './CardAlojamiento';
import { imagenesHoteles } from '../../data/imagenesHoteles';

function Alojamientos({ alojamientos, alojamientoSeleccionado, onSeleccionar }) {
  const handleSeleccionar = (hotel) => {
    onSeleccionar(hotel);
  };

  return (
    <div className="container mt-5" id="seccion-alojamientos">
      <h2 className="text-center mb-4">Elige tu alojamiento</h2>
      <div className="row">
        {alojamientos.map((a) => (
          <CardAlojamiento
            key={a.id}
            id={a.id}
            nombre = {a.nombre}
            descripcion = {a.descripcion}
            imagen={imagenesHoteles[a.imagenUrl]}
            seleccionado={alojamientoSeleccionado?.id === a.id}
            onSeleccionar={handleSeleccionar}
          />
        ))}
      </div>
    </div>
  );
}

export default Alojamientos;