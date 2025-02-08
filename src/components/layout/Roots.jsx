import { Outlet } from "react-router-dom";
import Footer from "../sheard/footer/Footer";
import Navbar from "../nabvar/Navbar";

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
