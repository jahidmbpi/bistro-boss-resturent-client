import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UseCard = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      const result = await fetch(
        `http://localhost:5000/cards?email=${user.email}`
      );

      return result.json();
    },
  });
  console.log("Query Data:", data);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  return [data, isLoading, refetch];
};

export default UseCard;
