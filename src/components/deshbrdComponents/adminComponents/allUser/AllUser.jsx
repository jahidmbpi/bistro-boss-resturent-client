import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUser = () => {
  const queryClient = useQueryClient();

  const { data: userall = [], refetch } = useQuery({
    queryKey: ["userAll"],
    queryFn: async () => {
      try {
        const result = await fetch("http://localhost:5000/allUser");

        if (!result.ok) {
          throw new Error("Failed to fetch users");
        }

        return await result.json();
      } catch (err) {
        console.error("Fetching error:", err);
        throw err;
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      try {
        return await axios.delete(`http://localhost:5000/user/${id}`);
      } catch (err) {
        console.error("Delete error:", err);
        throw err;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userAll"]);
    },
  });

  const handleDelete = async (id) => {
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
        try {
          deleteMutation.mutateAsync(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        } catch (err) {
          console.error("Delete operation failed:", err);
        }
      }
    });
  };
  const handeleAdmin = (id) => {
    console.log(id);
    axios
      .patch(`http://localhost:5000/user/admin/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handeleUser = (id) => {
    console.log(id);
    axios
      .patch(`http://localhost:5000/user/genareluser/${id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="justify-evenly items-center flex">
        <h2 className="text-2xl font-bold"> all user</h2>
        <p className="text-2xl font-bold">total users:({userall.length})</p>
      </div>
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {userall?.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <h2>{index + 1}</h2>
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
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>
                    {item.role === "admin" ? (
                      <>
                        <button
                          onClick={() => handeleUser(item._id)}
                          className="btn  bg-green-500"
                        >
                          {" "}
                          <FaUser></FaUser>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handeleAdmin(item._id)}
                          className="btn btn-primary"
                        >
                          <FaUsers></FaUsers>
                        </button>{" "}
                      </>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-primary"
                    >
                      <MdOutlineDelete className="text-xl text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
