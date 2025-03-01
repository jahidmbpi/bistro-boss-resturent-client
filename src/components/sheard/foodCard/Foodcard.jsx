import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Foodcard = ({ item }) => {
  const { name, image, recipe } = item;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddCard = (food) => {
    console.log(food);

    if (!user) {
      return navigate("/login", {
        state: { from: location },
        replace: true,
      });
    } else {
      console.log("Added to cart");
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="img" />
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-start">{recipe}</p>
        <div className="">
          <button
            onClick={() => handleAddCard(item)}
            className="btn btn-primary"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
