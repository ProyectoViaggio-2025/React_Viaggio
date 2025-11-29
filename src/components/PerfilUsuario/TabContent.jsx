import ViajesPlaneados from "./ViajesPlaneados";
import ViajesRealizados from "./ViajesRealizados";
import Deseados from "./Deseados";
import Favoritos from "./Favoritos";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import ViajeEnCurso from "./ViajeEnCurso.jsx";

const components = {
  "enCurso-tab": ViajeEnCurso,
  "planeados-tab": ViajesPlaneados,
  "realizados-tab": ViajesRealizados,
  "deseados-tab": Deseados,
  "favoritos-tab": Favoritos,
};

const TabContent = ({ selectedTab }) => {
  const { user, token } = useAuth();
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchReservas = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/usuarios/${user.id}/reservas`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch reservas");
        const data = await res.json();
        setReservas(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservas();
  }, [user]);

  if (!user) return <p>Debes iniciar sesión.</p>;
  if (loading) return <p>Cargando reservas...</p>;

  const SelectedComponent = components[selectedTab] || ViajeEnCurso;

  return <SelectedComponent reservas={reservas} />;
};

export default TabContent;
