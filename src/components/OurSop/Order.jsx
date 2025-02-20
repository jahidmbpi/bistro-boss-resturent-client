import { useState } from "react";
import OrderTab from "../sheard/orderTab/OrderTab";
import UseMenu from "../sheard/UseMenu/UseMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = UseMenu();

  // Filter menu items by category
  const drinksData = menu.filter((item) => item.category === "drinks");
  const dessertData = menu.filter((item) => item.category === "dessert");
  const pizzaData = menu.filter((item) => item.category === "pizza");
  const saladData = menu.filter((item) => item.category === "salad");
  const soupData = menu.filter((item) => item.category === "soup");

  // Tab data
  const tabs = [
    { label: "Salad", data: saladData },
    { label: "Pizza", data: pizzaData },
    { label: "Soup", data: soupData },
    { label: "Dessert", data: dessertData },
    { label: "Drinks", data: drinksData },
  ];

  return (
    <div className="text-center items-center my-[80px]">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setTabIndex(index)}
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
            <OrderTab items={tab.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
