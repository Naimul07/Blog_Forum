import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Store/AuthStore"; // Import the Zustand store

function Protected() {
  // Get the token and email verification status from Zustand store
  const token = useAuthStore((state) => state.token);
  const emailVerified = useAuthStore((state) => state.email_verified_at);

  // Check if user is authenticated but email is not verified
  if (token && !emailVerified) {
    return <Navigate to="/email_verification" />;
  }

  // If token is present and email is verified, allow access to the route
  return token && emailVerified ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
