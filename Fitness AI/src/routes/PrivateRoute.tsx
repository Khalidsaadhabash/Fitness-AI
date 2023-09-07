import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }
  return <>{children}</>;
};