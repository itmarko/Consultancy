import { Outlet } from "react-router-dom";
import Header from "../Components/Common/Header/Header";
import Footer from "../Components/Common/Footer/Footer";

const PublicLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center mt-16">
        <Outlet /> {/* This renders the nested routes */}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
