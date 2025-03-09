import { useParams } from "react-router-dom";
import SectionTitle from "../../../sheard/sectionTitel/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      category: "",
      price: "",
      recipe: "",
    },
  });
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);

    axios
      .patch(`http://localhost:5000/update/${id}`, data)
      .then((res) => {
        console.log(res.data);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "updated succesfuly",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(id);
  return (
    <div>
      <div>
        <SectionTitle
          smalltitle="whats new"
          bigtitle="update menu"
        ></SectionTitle>
        <form className="bg-gray-200" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-7 p-12">
            <div>
              <label>Recipe Name</label>
              <input
                {...register("name")}
                className="input w-full"
                placeholder="enter your recepi name"
              />
            </div>

            {/* flex div */}
            <div className="flex items-center gap-6  ">
              <div className="w-full">
                <label>Category</label>
                <select
                  {...register("category")}
                  className="select select-neutral w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="salad">salad</option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="desert">desert</option>
                  <option value="drinks">drinks</option>
                </select>
              </div>
              <div className="w-full">
                <label>Price</label>
                <input
                  type="text"
                  {...register("price")}
                  className="input w-full"
                  placeholder="enter your recepi price "
                />
              </div>
            </div>

            {/* Recipe Details */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Recipe Details</legend>
              <textarea
                {...register("recipe")}
                className="textarea h-24 w-full"
                placeholder="Recipe details"
              ></textarea>
            </fieldset>
            {/* <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input
                {...register("image")}
                type="file"
                className="file-input"
              />
            </fieldset> */}

            <button className="btn btn-primary mt-4" type="submit">
              upadate menu <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
