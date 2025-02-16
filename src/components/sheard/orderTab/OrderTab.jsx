/* eslint-disable react/prop-types */
import Foodcard from "../foodCard/Foodcard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-[50px]">
      {items?.map((item) => (
        <Foodcard key={item._id} item={item}></Foodcard>
      ))}
    </div>
  );
};

export default OrderTab;
