import img from "../../assets/home/chef-service.jpg";
const SubBannerHome = () => {
  return (
    <div>
      <div className="w-full mt-[90px] relative">
        <img className="object-cover h-[580px]" src={img} alt="" />
        <div className="w-[1096px] bg-[#FFFFFF] text-center items-center mx-auto absolute top-[120px] left-[112px] py-[96px]">
          <h2 className="text-[45px] font-medium uppercase">Bistro Boss</h2>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBannerHome;
