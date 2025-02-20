import { FaLocationDot } from "react-icons/fa6";
import SectionTitle from "../../sheard/sectionTitel/SectionTitle";
import { FiPhoneCall } from "react-icons/fi";
import { MdAccessTimeFilled } from "react-icons/md";

const ContactFrom = () => {
  return (
    <div>
      <SectionTitle
        smalltitle="visite us "
        bigtitle="our location"
      ></SectionTitle>
      <div className="flex space-x-5">
        <div className="w-[424px] h-[300px]  border-2 shadow-2xl relative p-6">
          <div className="text-center w-full h-full shadow-2xl bg-[#f3f3f3]  flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold uppercase ">phone</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
          <div className=" w-full h-[80px] flex bg-[#d1a054] absolute top-0 right-0 items-center justify-center">
            <div className=" text-center items-center mx-auto">
              <FiPhoneCall />
            </div>
          </div>
        </div>
        <div className="w-[424px] h-[300px]  border-2 shadow-2xl relative p-6">
          <div className="text-center w-full h-full shadow-2xl bg-[#f3f3f3]  flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold uppercase ">ADDRESS</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
          <div className=" w-full h-[80px] flex bg-[#d1a054] absolute top-0 right-0 items-center justify-center">
            <div className=" text-center items-center mx-auto">
              <FaLocationDot />
            </div>
          </div>
        </div>
        <div className="w-[424px] h-[300px]  border-2 shadow-2xl relative p-6">
          <div className="text-center w-full h-full shadow-2xl bg-[#f3f3f3]  flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold uppercase ">WORKING HOURS</h2>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div className=" w-full h-[80px] flex bg-[#d1a054] absolute top-0 right-0 items-center justify-center">
            <div className=" text-center items-center mx-auto">
              <MdAccessTimeFilled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
