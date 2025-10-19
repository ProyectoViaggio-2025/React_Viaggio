import { Routes, Route } from "react-router-dom";
import Actividades from "./pages/Actividades.jsx";
import Destinos from "./pages/Destinos.jsx";
import Registro from "./pages/Registro.jsx"; 

import PaginaAlojamientos from "./pages/PaginaAlojamientos.jsx";

export default function App() {
  return (
    <>

      <Routes>
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/alojamientos" element={<PaginaAlojamientos />} /> 
      </Routes>
 
    </>
  );
}

