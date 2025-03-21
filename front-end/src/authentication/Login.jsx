// src/pages/LoginPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importing useNavigate for v6 and later
import { login } from "../services/authService"; // Importing login function
import Button from "../Components/Button/Button";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();  // useNavigate hook to navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userData = await login(email, password);  // Call the login function
      localStorage.setItem("authToken", userData.token);  // Store the token in localStorage
      navigate("/dashboard");  // Use navigate() to redirect to the dashboard
    } catch (err) {
      console.error("Login error:", err);  // Logging the error if needed
      setError("Login failed. Please try again.");  // Show error if login fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p>i don&apos;t have accout !</p>
        <Button label = "sign up"/>
      </form>
    </div>
  );
};

export default LoginPage;
