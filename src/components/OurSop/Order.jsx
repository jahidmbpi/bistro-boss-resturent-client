import { useEffect, useState } from "react";
import OrderTab from "../sheard/orderTab/OrderTab";

import axios from "axios";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabdata, setTabdata] = useState([]);
  const [Catagory, setCatagory] = useState("salad");
  const [totaldata, Settotaldata] = useState([]);

  const itemPerPage = 6;
  const totalPage = Math.ceil(totaldata.length / itemPerPage);
  console.log("total page", totalPage);
  const [currentPage, setCurrentPage] = useState(0);
  console.log("current page", currentPage);

  useEffect(() => {
    if (Catagory) {
      axios
        .get(`http://localhost:5000/menu?category=${Catagory}`)
        .then((res) => {
          Settotaldata(res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [Catagory]);

  useEffect(() => {
    if (Catagory) {
      axios
        .get(
          `http://localhost:5000/menu?category=${Catagory}&currentPage=${currentPage}&itemPerPage=${itemPerPage}`
        )
        .then((res) => {
          setTabdata(res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [Catagory, currentPage]);

  // Tab data
  const tabs = [
    { label: "Salad" },
    { label: "Pizza" },
    { label: "Soup" },
    { label: "Dessert" },
    { label: "Drinks" },
  ];

  return (
    <div className="text-center items-center my-[80px]">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setTabIndex(index);
              setCatagory(tab.label.toLowerCase());
              setCurrentPage(0);
            }}
            className={`px-6 py-2 rounded-lg transition-all duration-300 ${
              tabIndex === index
                ? "bg-red-500 cursor-pointer text-white shadow-lg"
                : "  cursor-pointer border border-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="mt-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${
              tabIndex === index ? "block" : "hidden"
            } animate-fade-in`}
          >
            <OrderTab items={tabdata} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        {[...Array(totalPage).keys()].map((index) => (
          <button
            style={currentPage === index ? { backgroundColor: "green" } : {}}
            onClick={() => setCurrentPage(index)}
            className="btn btn-primary"
            key={index}
          >
            {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Order;
