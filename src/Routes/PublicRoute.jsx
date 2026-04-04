import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <Outlet />;
}