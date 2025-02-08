// import Navbar from "../nabvar/Navbar";
import SectionTitle from "../sheard/sectionTitel/SectionTitle";
import Banner from "./Banner";
import Call from "./Call";
import Catagory from "./foodCatagory/Catagory";
import MenuBanner from "./MenuBanner";
import OurpopularMenu from "./ourpopularmenu/OurpopularMenu";
import SubBannerHome from "./SubBannerHome";
import { Helmet } from "react-helmet-async";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss || Home</title>
      </Helmet>
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <SectionTitle
        smalltitle="From 11:00am to 10:00pm"
        bigtitle="ORDER ONLINE"
      ></SectionTitle>
      <Catagory></Catagory>
      <SubBannerHome></SubBannerHome>
      <OurpopularMenu></OurpopularMenu>
      <Call></Call>
      <MenuBanner></MenuBanner>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
