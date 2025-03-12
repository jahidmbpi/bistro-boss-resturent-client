import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin = [], error } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:5000/admin?email=${user.email}`
      );
      console.log(result.data);
      return result.data;
    },
  });
  return { isAdmin, error };
};

export default UseAdmin;
