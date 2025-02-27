import axios from "axios";
import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]); // ✅ প্রথমে খালি অ্যারে রাখলাম

  useEffect(() => {
    axios
      .get("http://localhost:5000/almenu")

      .then((res) => {
        setMenu(res.data);
        console.log("Fetched Menu:", res.data);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }, []);

  return menu;
};

export default UseMenu;
