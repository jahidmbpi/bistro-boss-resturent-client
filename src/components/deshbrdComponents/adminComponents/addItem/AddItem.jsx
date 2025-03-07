import { useForm } from "react-hook-form";
import SectionTitle from "../../../sheard/sectionTitel/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import axios from "axios";
const image_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
console.log(image_hosting_api_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      category: "",
      price: "",
      recipe: "",
      image: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    const imageFile = { image: data.image[0] };
    axios
      .post(image_hosting_api, imageFile, {
        method: "post",
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data.data.display_url);
        if (res.data.success) {
          const menuItem = {
            name: data.name,
            category: data.cetegory,
            recipe: data.recipe,
            price: parseFloat(data.price),
            image: res.data.data.display_url,
          };
          console.log(menuItem);
          axios
            .post("http://localhost:5000/menu", menuItem)
            .then((res) => {
              console.log(res.data);
              console.log("data save in database succesfully");
              reset();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SectionTitle
        smalltitle="whats new"
        bigtitle="add an item"
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
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Pick a file</legend>
            <input {...register("image")} type="file" className="file-input" />
          </fieldset>

          <button className="btn btn-primary mt-4" type="submit">
            add menu <FaUtensils />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
