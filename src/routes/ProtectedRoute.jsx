import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function ProtectedRoute({ children, requiredRole }) {
    const { currentUser } = useAppContext()
  
    if (!currentUser) {
      return <Navigate to="/login" />
    }
  
    if (requiredRole && currentUser.role !== requiredRole) {
      return <Navigate to="/" />
    }
  
    return children
  }