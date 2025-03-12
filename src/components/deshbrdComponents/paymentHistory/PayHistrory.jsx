import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const PayHistrory = () => {
  const { user } = useContext(AuthContext);

  const {
    data: payment,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:5000/payment?email=${user?.email}`
      );
      return result.data;
    },
  });
  console.log(payment);
  console.log(error);
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

  return (
    <div>
      <h2 className="text-3xl">total payment:{payment?.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>price</th>
                <th>transactionId</th>
                <th className="lowercase">STATUS</th>
                <th className="lowercase">date</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((item, index) => (
                <tr key={item._id} className="hover:bg-base-300">
                  <th>{index + 1}</th>
                  <td>${item.price}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayHistrory;
