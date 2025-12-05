import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx"

export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  
  //si no esta logueado redirigir a la pagina de registro
  if (!user) return <Navigate to="/register" replace />;
 
  //si no tiene el rol requerido redirigir al login
  if (requiredRole && user.role !== requiredRole) {
    alert(`Necesitas tener el rol de ${requiredRole} para acceder a esta página`)
    return <Navigate to="/login" replace />;
  }

  return children;
}

