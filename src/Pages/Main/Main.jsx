import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio | Ashikur Rahman Ashik</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
