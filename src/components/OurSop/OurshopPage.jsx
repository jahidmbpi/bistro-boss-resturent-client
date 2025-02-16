import { Helmet } from "react-helmet-async";
import SheardBanner from "../OurMenuPage/ourMenuBanner/SheardBanner";
import shoping from "../../assets/shop/banner2.jpg";
import Order from "./Order";

const OurshopPage = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss || Our Shop</title>
      </Helmet>
      <SheardBanner
        img={shoping}
        heading={"OUR SHOP"}
        subheading={"would you like to try a dish ?"}
      ></SheardBanner>
      <Order></Order>
    </div>
  );
};

export default OurshopPage;
