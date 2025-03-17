import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Login Page</h2>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
