import { Routes, Route } from 'react-router-dom';
import PaginaAlojamientos from './pages/PaginaAlojamientos';
import MiViaje from './pages/MiViaje';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaAlojamientos />} />
      <Route path="/miviaje" element={<MiViaje />} />
    </Routes>
  );
}