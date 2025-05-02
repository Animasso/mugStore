import React from "react";
import { motion } from "framer-motion";
const CardMug = ({ name, image, description }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-2xl shadow-pink-300 p-4 max-w-sm mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-contain rounded-lg"
        />
        <h2 className="text-xl font-bold mt-4">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300">
          Customize
        </button>
      </div>
    </div>
  );
};

export default CardMug;
