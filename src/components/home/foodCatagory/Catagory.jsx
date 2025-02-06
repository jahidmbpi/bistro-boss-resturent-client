// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Catagory = () => {
  return (
    <div className="w-[90%] justify-between mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={img1} alt="" className="w-full h-auto" />
          <h3 className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-4xl text-white text-center">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img2} alt="" className="w-full h-auto" />
          <h3 className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-4xl text-white text-center">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img3} alt="" className="w-full h-auto" />
          <h3 className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-4xl text-white text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img4} alt="" className="w-full h-auto" />
          <h3 className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-4xl text-white text-center">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img5} alt="" className="w-full h-auto" />
          <h3 className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-4xl text-white text-center">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catagory;
