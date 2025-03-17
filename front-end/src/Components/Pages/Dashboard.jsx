import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Dashboard (Private)</h2>
      <button
        className="mt-4 px-6 py-2 bg-red-500 text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
