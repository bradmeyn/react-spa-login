import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const user = null;

  if (!user) {
    console.log("User is not logged in");
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
