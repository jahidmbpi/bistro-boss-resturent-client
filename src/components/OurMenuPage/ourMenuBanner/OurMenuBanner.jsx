import bannerimg from "../../../assets/menu/banner3.jpg";
const OurMenuBanner = () => {
  return (
    <div
      className=" relative bg-cover bg-center h-[550px] justify-center items-center text-center mx-auto flex"
      style={{ backgroundImage: `url(${bannerimg})` }}
    >
      <div className="absolute bg-black opacity-50 h-[300px] w-[1000px] flex justify-center items-center text-center mx-auto">
        <div>
          <h2 className="text-[88px] uppercase font-semibold text-white">
            our menu
          </h2>
          <p className="uppercase text-white">would you like to try a dish ?</p>
        </div>
      </div>
    </div>
  );
};

export default OurMenuBanner;
