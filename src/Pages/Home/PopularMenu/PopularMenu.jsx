import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <section className="mt-10">
      <SectionTitle
        heading={"Form Our Menu"}
        subHeading={"Popular Item"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
