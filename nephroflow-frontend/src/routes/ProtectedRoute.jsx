import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext'; 

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();



  if (!token || token === "null") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;