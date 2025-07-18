import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const role = localStorage.getItem("role");

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
