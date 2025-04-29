import React from "react";

const TestiCard = ({ name, text, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl shadow-gray-900 p-4 max-w-sm mx-auto">
      <img
        src={image}
        alt="Testimonial"
        className=" w-38 h-38 object-cover justify-self-center rounded-full"
      />
      <h2 className="text-xl text-center font-title font-bold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">{text} </p>
    </div>
  );
};

export default TestiCard;
