import { Mugs } from "../data/data";
import CardMug from "./CardMug";

import { motion } from "framer-motion";
const Presentation = () => {
  return (
    <div id="products">
      <div className="  mt-20 justify-center items-center space-y-6 ">
        <h2 className=" font-title text-2xl text-center items-cente font-bold">
          Fun and <span className=" text-pink-500">Original</span>
        </h2>
        <p className=" text-lg px-6 text-shadow justify-self-center ">
          Whether you're designing for yourself or creating the perfect gift,
          our platform lets you fully customize every detail. Send us your
          design and your own mug we will make it a reality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20">
        {Mugs.map((mug, i) => (
          <motion.div
            key={mug.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: i * 0.3 }}
          >
            <CardMug
              name={mug.name}
              description={mug.description}
              image={mug.image}
            />
          </motion.div>
        ))}
      </div>

      <hr className="  w-2/3 mx-auto my-10 h-1 bg-pink-100 rounded-full shadow-lg" />
    </div>
  );
};

export default Presentation;
