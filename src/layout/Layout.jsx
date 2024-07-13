import Navbar from "../components/shares/Navbar";
import Footer from "../components/shares/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
