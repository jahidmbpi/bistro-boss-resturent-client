import Swal from "sweetalert2";
import UseCard from "../../sheard/useCard/UseCard";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

const MyCard = () => {
  const [data, isLoading, refetch] = UseCard();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex justify-center flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
          <h1 className="text-lg">
            Loading
            <span className="text-2xl font-semibold">
              <span className="dot-animation">.</span>
              <span className="dot-animation">.</span>
              <span className="dot-animation">.</span>
            </span>
          </h1>
        </div>
      </div>
    );
  }

  const totalPrice = data?.length
    ? data.reduce((total, item) => total + (item.price || 0), 0)
    : 0;
  const formattedPrice = totalPrice.toFixed(2);

  const handelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/cards/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.error("Error deleting card:", err);
          });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-xl font-bold">Item: {data?.length}</h2>
        <h2 className="text-xl font-bold">Total Price: ${formattedPrice}</h2>
        {data.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary hover:bg-green-700">
              Payment
            </button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary hover:bg-green-700">
            Payment
          </button>
        )}
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <p>{index + 1}</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>{item.name}</h2>
                </td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-ghost btn-xs "
                  >
                    <AiOutlineDelete className="text-red-600 text-2xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCard;
