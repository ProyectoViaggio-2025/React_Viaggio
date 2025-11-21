import "../css/actividades.css";

    export default function ActividadCard({
    actividad,
    itinerario,
    setItinerario,
    deleteMode,
    editMode,
    onDelete,
    onEdit,
    }) {
    const estaAgregada = itinerario.some(item => item.titulo === actividad.titulo);

    const toggleActividad = () => {
        if (estaAgregada) {
        setItinerario(itinerario.filter(item => item.titulo !== actividad.titulo));
        } else {
        setItinerario([...itinerario, actividad]);
    }

    };

    return (
        <div className="col-md-4">
        <div className="actividades card rounded-4 h-100 w-100">

            {/* ⚠ Imagen → ahora usa actividad.imagenUrl si existe */}
            <img
            src={actividad.imagenUrl || actividad.imagen}
            className="card-img-top rounded-top-4 img-fluid"
            alt={actividad.titulo}
            />

            <div className="card-body d-flex flex-column">
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
                <h5 className="card-title text-center">{actividad.titulo}</h5>
                <p className="card-text text-center">{actividad.descripcion}</p>
            </div>

            {/* ======================== */}
            {/* BOTONES ADMIN (si están activos) */}
            {/* ======================== */}
            {(editMode || deleteMode) && (
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
                {editMode && (
                    <button
                    className="btn btn-warning btn-sm rounded-5"
                    onClick={() => onEdit(actividad.id)}
                    >
                    Editar
                    </button>
                )}

                {deleteMode && (
                    <button
                    className="btn btn-danger btn-sm rounded-5"
                    onClick={() => onDelete(actividad.id)}
                    >
                    Borrar
                    </button>
                )}
                </div>
            )}

            {/* ======================== */}
            {/* BOTÓN AGREGAR / QUITAR ITINERARIO (TU FUNCIÓN) */}
            {/* ======================== */}
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
