import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return localStorage.getItem('isAuthenticated') === 'true' ? <Component {...rest} /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
