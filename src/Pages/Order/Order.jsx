import React from "react";
import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";

const Order = () => {
  return (
    <div>
      <Cover image={orderCoverImg} title="order food"></Cover>
    </div>
  );
};

export default Order;
