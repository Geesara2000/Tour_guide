import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const RequireAuth = ({ allowedRoles, children }) => {
  const { user, admin } = useContext(AuthContext);
  const location = useLocation();

  // Determine the logged-in user (either user or admin)
  const currentUser = user || admin;

  if (!currentUser) {
    // Redirect to the correct login page if not authenticated
    return <Navigate to={location.pathname.startsWith("/admin") ? "/admin/login" : "/login"} replace />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    // If user/admin role is not allowed, redirect to the respective login page
    return <Navigate to={currentUser.role === "admin" ? "/admin/login" : "/login"} replace />;
  }

  return children;
};

export default RequireAuth;
