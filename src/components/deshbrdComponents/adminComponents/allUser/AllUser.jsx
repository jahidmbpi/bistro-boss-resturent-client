import { useQuery } from "@tanstack/react-query";
import { MdOutlineDelete } from "react-icons/md";

const AllUser = () => {
  const { data: userall = [] } = useQuery({
    queryKey: ["userAll"],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/allUser");
      const data = await result.json();
      return data;
    },
  });

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
                  <td>{item.role}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
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
