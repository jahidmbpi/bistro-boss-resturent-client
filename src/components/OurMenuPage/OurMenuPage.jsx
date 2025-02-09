// import Navbar from "../nabvar/Navbar";
import OurMenuBanner from "./ourMenuBanner/SheardBanner";
import MenuCatagory from "../sheard/Menucatagory/MenuCatagory";
import UseMenu from "../sheard/UseMenu/UseMenu";
import SectionTitle from "../sheard/sectionTitel/SectionTitle";
import bannerimg from "../../assets/menu/banner3.jpg";
import desertimg from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";

const OurMenuPage = () => {
  const [menu] = UseMenu();

  const todayOffer = menu.filter((item) => item.category === "offered");
  const dessertData = menu.filter((item) => item.category === "dessert");
  const pizzadata = menu.filter((item) => item.category === "pizza");
  const saladData = menu.filter((item) => item.category === "salad");
  const soupData = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <OurMenuBanner
        img={bannerimg}
        heading={"our menu"}
        subheading={"would you like to try a dish ?"}
      ></OurMenuBanner>

      {/* today offer data  */}
      <div className=" space-y-10">
        <SectionTitle
          smalltitle="dont miss"
          bigtitle="today offers"
        ></SectionTitle>
        <MenuCatagory item={todayOffer}></MenuCatagory>
        {/* desert data */}
        <div className="space-y-10">
          <OurMenuBanner
            img={desertimg}
            heading={"desert"}
            subheading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></OurMenuBanner>
          <MenuCatagory item={dessertData}></MenuCatagory>
        </div>
        {/* pizza */}
        <div className="space-y-10">
          <OurMenuBanner
            img={pizzaimg}
            heading={"pizza"}
            subheading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></OurMenuBanner>
          <MenuCatagory item={pizzadata}></MenuCatagory>
        </div>
        {/* salad */}
        <div className="space-y-10">
          <OurMenuBanner
            img={saladimg}
            heading={"salad"}
            subheading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></OurMenuBanner>
          <MenuCatagory item={saladData}></MenuCatagory>
        </div>
        {/* .......... */}
        <div className="space-y-10">
          <OurMenuBanner
            img={soupimg}
            heading={"soup"}
            subheading={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ></OurMenuBanner>
          <MenuCatagory item={soupData}></MenuCatagory>
        </div>
      </div>
    </div>
  );
};

export default OurMenuPage;
