/* eslint-disable react/prop-types */
import Menu from "../../home/ourpopularmenu/Menu";

const MenuCatagory = ({ item }) => {
  return (
    <div>
      <div className="grid grid-cols-2 space-x-10 space-y-5">
        {item?.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
    </div>
  );
};

export default MenuCatagory;
