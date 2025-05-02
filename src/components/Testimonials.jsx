import React from "react";
import { Testi } from "../data/data";
import TestiCard from "./TestiCard";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <div id="testimonials" className=" mt-40 space-y-5 ">
      <h2 className=" text-2xl font-title font-bold  text-center">
        What our <span className=" text-pink-500">Customers</span> say
      </h2>
      <div className=" mt-8 mx-3 flex gap-7 flex-wrap spay justify-between">
        {Testi.map((testi, i) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: i * 0.3 }}
          >
            <TestiCard
              key={testi.id}
              name={testi.name}
              image={testi.image}
              text={testi.text}
            />
          </motion.div>
        ))}
      </div>
      <hr className="  w-2/3 mx-auto my-20 h-1 bg-pink-100 rounded-full shadow-lg" />
    </div>
  );
};

export default Testimonials;
