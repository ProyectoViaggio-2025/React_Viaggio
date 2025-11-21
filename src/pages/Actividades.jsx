// src/pages/Actividades.jsx
import { useState, useEffect } from "react";
import ActividadCard from "./ActividadCard.jsx";
import "../css/actividades.css";
import { useAuth } from "../context/AuthContext.jsx";

export default function Actividades() {
    const { user } = useAuth();
    const isAdmin = user?.role === "admin";

    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [actividadesMostradas, setActividadesMostradas] = useState(6);

    const [itinerario, setItinerario] = useState(
        JSON.parse(localStorage.getItem("itinerario")) || []
    );

    // ACTIVIDADES DESDE BD
    const [actividades, setActividades] = useState([]);

    // ESTADO FORMULARIO (ADMIN)
    const [showForm, setShowForm] = useState(false);
    const [actividadEditada, setActividadEditada] = useState(null);

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagenUrl, setImagenUrl] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);

    // =========================================
    // 🔥 CARGAR ACTIVIDADES DESDE BACKEND
    // =========================================
    useEffect(() => {
        fetch("http://localhost:3000/actividades")
        .then((res) => res.json())
        .then((data) => setActividades(data))
        .catch((err) => console.error("Error cargando actividades ", err));
    }, []);

    // =========================================
    // 🔥 ADMIN: funciones
    // =========================================
    const limpiarForm = () => {
        setTitulo("");
        setDescripcion("");
        setImagenUrl("");
        setActividadEditada(null);
    };

    const comenzarEdicion = (id) => {
        const act = actividades.find((a) => a.id === id);
        if (!act) return;

        setTitulo(act.titulo);
        setDescripcion(act.descripcion);
        setImagenUrl(act.imagenUrl);
        setActividadEditada(act.id);
        setShowForm(true);
    };

    const borrarActividad = async (id) => {
        const confirmar = window.confirm("¿Seguro que deseas borrar esta actividad?");
        if (!confirmar) return;

        const res = await fetch(`http://localhost:3000/actividades/${id}`, {
        method: "DELETE",
        });

        if (res.ok) {
        alert("Actividad eliminada");
        window.location.reload();
        } else {
        alert("Error al borrar actividad");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevaActividad = {
        titulo,
        descripcion,
        imagenUrl,
        };

        let url = "http://localhost:3000/actividades";
        let method = "POST";

        if (actividadEditada) {
        url = `http://localhost:3000/actividades/${actividadEditada}`;
        method = "PATCH";
        }

        console.log("EDITANDO:", actividadEditada);
        console.log("URL:", url);
        console.log("fetch keyword test:", fetch);


        const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaActividad),
        });


        if (res.ok) {
        alert(actividadEditada ? "Actividad modificada" : "Actividad agregada");
        window.location.reload();
        } else {
        alert("Error al guardar actividad");
        }
    };

    // =========================================
    // 🔥 ITINERARIO
    // =========================================
    useEffect(() => {
        localStorage.setItem("itinerario", JSON.stringify(itinerario));
    }, [itinerario]);

    const verMas = () => {
        setActividadesMostradas((prev) =>
        Math.min(prev + 3, actividades.length)
        );
    };



    return (
        <main>
        {/* Título y filtro */}
        <div className="titulo">
            <h2 className="mx-5">Explora nuevos lugares</h2>
            <button id="btnFiltrar" onClick={() => setMostrarFiltros(!mostrarFiltros)}>
            <img src=""/> Filtrar
            </button>
        </div>

        {/* FILTROS (SIN CAMBIOS) */}
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

        {/* ===========================
            🔥 ADMIN BOTONES
        =========================== */}
        {isAdmin && (
            <div className="contbotones mt-4">
            <button
                className="boton1"
                onClick={() => {
                limpiarForm();
                setEditMode(false);
                setDeleteMode(false);
                setShowForm(true);
                }}
            >
                Agregar actividad
            </button>

            <button
                className="boton1"
                onClick={() => {
                setEditMode(!editMode);
                setDeleteMode(false);
                setShowForm(false);
                }}
            >
                {editMode ? "Cancelar edición" : "Modificar actividad"}
            </button>

            <button
                className="boton2"
                onClick={() => {
                setDeleteMode(!deleteMode);
                setEditMode(false);
                setShowForm(false);
                }}
            >
                {deleteMode ? "Cancelar eliminación" : "Eliminar actividad"}
            </button>
            </div>
        )}

        {/* ===========================
            🔥 MODAL ADMIN
        =========================== */}
        {showForm && (
            <div className="modal-overlay">
            <div className="modal-content">
                <h2>{actividadEditada ? "Modificar actividad" : "Nueva actividad"}</h2>

                <form className="form-agregarAlojamiento" onSubmit={handleSubmit}>
                <label>Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />

                <label>Descripción</label>
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                ></textarea>

                <label>URL Imagen (Cloudinary)</label>
                <input
                    type="text"
                    value={imagenUrl}
                    onChange={(e) => setImagenUrl(e.target.value)}
                    required
                />

                <div className="btns-modal">
                    <button type="submit" className="btn-guardar">
                    Guardar
                    </button>
                    <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => {
                        limpiarForm();
                        setShowForm(false);
                    }}
                    >
                    Cancelar
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}

        {/* ===========================
            TARJETAS
        =========================== */}
        <div className="d-flex align-items-center justify-content-center">
            <div className="m-4 row gy-5 gx-5 align-items-stretch">
            {actividades
                .filter(a => a.id)               // 💥 solo actividades válidas
                .slice(0, actividadesMostradas)
                .map((act) => (
                <ActividadCard
                key={act.id}
                actividad={act}
                itinerario={itinerario}
                setItinerario={setItinerario}
                deleteMode={deleteMode}
                editMode={editMode}
                onDelete={borrarActividad}
                onEdit={comenzarEdicion}
                />
            ))}
            </div>
        </div>

        {/* Botón Ver Más */}
        <div className="d-flex justify-content-center">
            {actividadesMostradas < actividades.length ? (
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
        </main>
    );
}
