import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-2 space-x-2 space-y-3">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
        className="w-[100px]"
      />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
        <p className="text-yellow-500 ">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
