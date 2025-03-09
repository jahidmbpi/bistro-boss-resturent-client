/* eslint-disable no-unused-vars */
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItem = () => {
  const FetchMenu = async () => {
    const res = await axios.get("http://localhost:5000/almenu");
    return res.data;
  };
  // use tanstak query by fetaching all menu data

  const {
    data: allmenu,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allmenu"],
    queryFn: FetchMenu,
  });
  console.log(allmenu, isLoading, error);
  const handeledelete = (id) => {
    console.log("Deleting ID:", id);
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
          .delete(`http://localhost:5000/deletemenu/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              console.log("Data deleted successfully");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          })
          .catch((error) => {
            console.log("Delete Error:", error);
          });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex justify-center flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
          <h1 className="text-lg">
            please wait...
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

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <h2>#</h2>
              </th>
              <th>image</th>
              <th>Name</th>
              <th>price</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {allmenu.map((item, index) => (
              <tr key={index}>
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
                  <h2 className="text-[18px]">{item.name}</h2>
                </td>
                <td>
                  <h2 className="text-[18px]">${item.price}</h2>
                </td>
                <th>
                  <Link to={`/dashboard/update/${item._id}`}>
                    <button className="btn btn-ghost btn-xs">
                      <FaRegEdit className="text-[22px]" />
                    </button>
                  </Link>
                </th>
                <th>
                  <MdOutlineDeleteOutline
                    onClick={() => handeledelete(item._id)}
                    className="text-[22px]"
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
