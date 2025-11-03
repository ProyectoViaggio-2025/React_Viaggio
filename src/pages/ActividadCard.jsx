import "../css/actividades.css";

export default function ActividadCard({ actividad, itinerario, setItinerario }) {
    const estaAgregada = itinerario.includes(actividad.titulo);

    const toggleActividad = () => {
        if (estaAgregada) {
        setItinerario(itinerario.filter((t) => t !== actividad.titulo));
        } else {
        setItinerario([...itinerario, actividad.titulo]);
        }
    };

    return (
        <div className="col-md-4">
        <div className="actividades card rounded-4 h-100 w-100">
            <img
            src={actividad.imagen}
            className="card-img-top rounded-top-4 img-fluid"
            alt={actividad.titulo}
            />
            <div className="card-body d-flex flex-column">
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h5 className="card-title text-center">{actividad.titulo}</h5>
                <p className="card-text text-center">{actividad.descripcion}</p>
            </div>
            <div className="mt-3">
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn rounded-5" onClick={toggleActividad}>
                    {estaAgregada ? "Quitar" : "Agregar"}
                </button>
                </div>
                {estaAgregada && (
                <p className="text-success mt-2 text-center">
                    Actividad agregada al itinerario
                </p>
                )}
            </div>
            </div>
        </div>
        </div>
    );
    }