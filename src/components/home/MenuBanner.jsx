import fetature from "../../assets/home/featured.jpg";
import SectionTitle from "../sheard/sectionTitel/SectionTitle";
const MenuBanner = () => {
  return (
    <div>
      <div className="w-full relative my-14 bg-[url({fetature})]">
        <img className="object-cover h-[650px]  w-full" src={fetature} alt="" />
        <div className="inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute"></div>
        <div className="w-[1096px] text-center items-center mx-auto absolute top-[0px] left-[112px] ">
          <SectionTitle
            smalltitle="Check it out"
            bigtitle="FROM OUR MENU"
          ></SectionTitle>
          <div className="flex text-center items-center justify-center space-x-7 ">
            <img className="w-[500px] h-[300px]" src={fetature} alt="" />
            <div className="text-start text-[#c8c7c4] ">
              <h2 className="text-xl">March 20, 2023</h2>
              <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
