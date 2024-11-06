import React, { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTabs from "./OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["offered", "dessert", "soup", "salad", "pizza"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  //   console.log(categories.indexOf(category));

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover image={orderCoverImg} title="order food"></Cover>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Offered</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
          </TabList>

          <TabPanel>
            <OrderTabs items={offered}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={dessert}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={soup}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={salad}></OrderTabs>
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizza}></OrderTabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
