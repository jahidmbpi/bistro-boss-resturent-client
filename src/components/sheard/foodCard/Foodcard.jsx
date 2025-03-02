import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

/* eslint-disable react/prop-types */
const Foodcard = ({ item }) => {
  console.log(item);
  const { name, image, recipe, _id } = item;
  console.log(_id);

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const foodItem = {
    name,
    image,
    recipe,
    menuId: _id,
    userEmail: user?.email,
  };

  const handleAddCard = (food) => {
    console.log(food);
    if (!user) {
      return navigate("/login", {
        state: { from: location },
        replace: true,
      });
    } else {
      axios
        .post("http://localhost:5000/addCard", foodItem)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
            onClick={() => {
              handleAddCard(foodItem);
            }}
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
