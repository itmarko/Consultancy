import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import PublicLayout from "../Layout/PublicLayout";
import PrivateLayout from "../Layout/PrivateLayout";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Dashboard from "../Components/Pages/Dashboard";
import NotFound from "../Components/Pages/NotFound";
import Contact from "../Components/Pages/ContactUs"

function PublicRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            {/* Nested routes for public pages implemented here */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Contactus" element={<Contact />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateLayout />}>
            {/* Nested route for the dashboard implemented here */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default PublicRouter;
