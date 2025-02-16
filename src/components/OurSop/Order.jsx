import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../sheard/orderTab/OrderTab";
import UseMenu from "../sheard/UseMenu/UseMenu";

const Order = () => {
  const [tabIndex, settabIndex] = useState(0);
  console.log(tabIndex);
  const [menu] = UseMenu();

  const drinksDtata = menu.filter((item) => item.category === "drinks");
  const dessertData = menu.filter((item) => item.category === "dessert");
  const pizzadata = menu.filter((item) => item.category === "pizza");
  const saladData = menu.filter((item) => item.category === "salad");
  const soupData = menu.filter((item) => item.category === "soup");

  return (
    <div className="text-center items-center my-[80px]">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>desert</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={saladData}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzadata}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupData}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertData}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksDtata}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
