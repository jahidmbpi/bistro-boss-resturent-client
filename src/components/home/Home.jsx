import Navbar from "../nabvar/Navbar";

import SectionTitle from "../sheard/sectionTitel/SectionTitle";
import Banner from "./Banner";
import Catagory from "./foodCatagory/Catagory";
import SubBannerHome from "./SubBannerHome";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <SectionTitle
        smalltitle="---From 11:00am to 10:00pm---"
        bigtitle="ORDER ONLINE"
      ></SectionTitle>
      <Catagory></Catagory>
      <SubBannerHome></SubBannerHome>
    </div>
  );
};

export default Home;
