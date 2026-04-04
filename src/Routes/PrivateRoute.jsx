import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}