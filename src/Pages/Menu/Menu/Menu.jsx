import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../Shared/sectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bristro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <div className="pt-[67px]"></div>
      <div>
        <Cover image={menuImg} title={"our menu"}></Cover>
      </div>
      {/* offered  menu items*/}
      <SectionTitle
        subHeading={"don't miss"}
        heading={"today offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert item */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* soup item */}
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}
      ></MenuCategory>
      {/* salad item */}
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
      {/* dessert item */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
