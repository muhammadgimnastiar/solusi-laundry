import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/admin" />;
  }
  return children;
};
