import React from "react";
import { Testi } from "../data/data";
import TestiCard from "./TestiCard";
const Testimonials = () => {
  return (
    <div id="testimonials" className=" mt-40 space-y-5">
      <h2 className=" text-2xl font-title font-bold  text-center">
        What our <span className=" text-pink-500">Customers</span> say
      </h2>
      <div className=" mt-8 flex gap-7 flex-wrap spay justify-between">
        {Testi.map((testi) => (
          <TestiCard
            key={testi.id}
            name={testi.name}
            image={testi.image}
            text={testi.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
