import CardAlojamiento from './CardAlojamiento';

function Alojamientos({ alojamientos, alojamientoSeleccionado, setAlojamientoSeleccionado }) {
  const handleSeleccionar = (id) => {
    setAlojamientoSeleccionado(id);
  };

  return (
    <div className="container mt-5" id="seccion-alojamientos">
      <h2 className="text-center mb-4">Elige tu alojamiento</h2>
      <div className="row">
        {alojamientos.map((a) => (
          <CardAlojamiento
            key={a.id}
            {...a}
            seleccionado={a.id === alojamientoSeleccionado}
            onSeleccionar={handleSeleccionar}
          />
        ))}
      </div>
    </div>
  );
}

export default Alojamientos;