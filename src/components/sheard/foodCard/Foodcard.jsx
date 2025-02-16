/* eslint-disable react/prop-types */
const Foodcard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="img" />
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-start">{recipe}</p>
        <div className="">
          <button className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
