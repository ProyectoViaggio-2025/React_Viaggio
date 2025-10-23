import { Routes, Route, useLocation } from "react-router-dom";
import Actividades from "./pages/Actividades.jsx";
import Destinos from "./pages/Destinos.jsx";
import Registro from "./pages/Registro.jsx";
import Navbar from "./components/Navbar.jsx";
import MiViaje from "./pages/MiViaje.jsx";


import PaginaAlojamientos from "./pages/PaginaAlojamientos.jsx";
import PerfilUsuario from "./pages/PerfilUsuario.jsx";
import SobreViaggio from "./pages/SobreViaggio.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const location = useLocation();

  //RUTAS DONDE NO QUEREMOS MOSTRAR EL NAVBAR Y FOOTER
  const hideLayout = ["/login", "/register"];

  const shouldHideLayout = hideLayout.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/alojamientos" element={<PaginaAlojamientos />} />
        <Route path="/sobreViaggio" element={<SobreViaggio />} />
        <Route path="/miViaje" element={<MiViaje />} />
      </Routes>
      {!shouldHideLayout && <Footer/>}
    </>
  );
}
