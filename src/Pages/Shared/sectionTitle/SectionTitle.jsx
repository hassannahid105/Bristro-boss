import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mb-10 md:w-3/12 mx-auto">
      <p className="text-yellow-600 mb-3">---{subHeading}---</p>

      <h2 className="text-3xl uppercase border-y-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
