import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { user } = useContext(AuthContext);

  const {
    data: saveData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["saveData", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${user.email}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      return res.json();
    },
  });

  console.log("Query Data:", saveData);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  return { saveData, error, isLoading, refetch };
};

export default Users;
