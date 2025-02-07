/* eslint-disable react/prop-types */
const Menu = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-6">
      <img
        className="rounded-[0%_45%_45%_45%] w-[114px] h-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h2 className="text-2xl font-bold">{name}----------</h2>
        <h2>{recipe}</h2>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default Menu;
