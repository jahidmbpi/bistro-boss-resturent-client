import { useQuery } from "@tanstack/react-query";

const UseCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/cards");

      return result.json();
    },
  });
  console.log("Query Data:", data);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  return { data, isLoading, error };
};

export default UseCard;
