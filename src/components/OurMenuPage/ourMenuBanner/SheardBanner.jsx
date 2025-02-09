/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";
const SheardBanner = ({ img, heading, subheading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
      style={{ height: "550px" }}
    >
      <div
        className=" relative bg-cover bg-center h-[550px] justify-center items-center text-center mx-auto flex"
        // style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute bg-black opacity-50 h-[300px] w-[1000px] flex justify-center items-center text-center mx-auto">
          <div>
            <h2 className="text-[88px] uppercase font-semibold text-white">
              {heading}
            </h2>
            <p className="uppercase text-white">{subheading}</p>
          </div>
        </div>
      </div>
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default SheardBanner;
