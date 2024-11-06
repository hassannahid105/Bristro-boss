import React from "react";
import SectionTitle from "../../Shared/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="mt-10 bg-fixed fatured-item py-10">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex gap-16 px-40 bg-black  py-24 opacity-70">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-2 flex flex-col justify-center text-white">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi
            maxime sit reiciendis! Ad cum mollitia distinctio doloremque. Magni
            autem in architecto unde quis sapiente, itaque non ad vitae! Atque
            voluptatibus optio labore voluptatum nulla dolores, alias
            reiciendis? Enim saepe odit vitae ullam quis atque. Officia
            recusandae minus neque doloremque!
          </p>
          <button className="uppercase btn btn-outline w-36 mt-4 text-white border-0 border-b-4 border-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
