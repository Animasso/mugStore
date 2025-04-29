import { Mugs } from "../data/data";
import CardMug from "./CardMug";

const Presentation = () => {
  return (
    <>
      <div
        id="products"
        className="  mt-20 justify-center items-center space-y-6 "
      >
        <h2 className=" font-title text-2xl text-center items-cente font-bold">
          Fun and <span className=" text-pink-500">Original</span>
        </h2>
        <p className=" text-lg px-6 text-shadow justify-self-center ">
          Whether you're designing for yourself or creating the perfect gift,
          our platform lets you fully customize every detail.
          {/* From colors and
          graphics to personal messages, your creativity is the limit. Trusted
          by thousands and recognized as the leading brand in custom mug design,
          CreaMug delivers premium quality and style — one mug at a time */}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20">
        {Mugs.map((mug) => (
          <CardMug
            key={mug.id}
            name={mug.name}
            description={mug.description}
            image={mug.image}
          />
        ))}
      </div>
    </>
  );
};

export default Presentation;
