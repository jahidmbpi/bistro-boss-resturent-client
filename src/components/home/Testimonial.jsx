import SectionTitle from "../sheard/sectionTitel/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setTestimonial(data);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        smalltitle="What Our Clients Say"
        bigtitle="TESTIMONIALS"
      ></SectionTitle>
      <div className=" text-center  mx-auto w-full">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonial.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="space-y-9 p-4 flex flex-col items-center">
                <h2>
                  {" "}
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={item.rating}
                    readOnly
                  />
                </h2>
                <p className="w-[80%] text-center mx-auto">{item.details}</p>
                <h2 className="text-xl font-bold text-yellow-500">
                  {item.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
