import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Private Layout</h1>
      <Outlet /> {/* This renders the nested private routes */}
    </div>
  );
};

export default PrivateLayout;
