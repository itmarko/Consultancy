import { Outlet } from "react-router-dom";
import Header from "../Common/Header/Header"
import Footer from "../Common/Footer/Footer"
import Copyright from "../Common/Footer/Copyright"
const PublicLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center mt-16">
        <Outlet /> {/* This renders the nested routes */}
      </main>
      <Footer />
      <Copyright />
    </div>
  );
};

export default PublicLayout;
