import React from "react";
import BgrImage from "../assets/bg-slate.png";
import mugNeutral from "../assets/mugNeutral.jpg";
import { motion } from "framer-motion";
const bgImage = {
  backgroundImage: `url(${BgrImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100vw",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full mt-26">
        <div className="relative container">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[850px]">
            {/* Texte à gauche + bouton */}
            <div className="text-pink-300 p-4 h-full flex flex-col justify-between">
              <div className="space-y-10">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", delay: 1, duration: 1 }}
                  id="home"
                  className="mt-24 md:mt-36 lg:mt-0 font-thin text-5xl md:text-6xl lg:text-7xl leading-tight ml-8 md:ml-14"
                >
                  CreaMug
                </motion.h1>

                <div className="relative">
                  <div className="absolute w-32 h-32 bg-pink-300/15 rounded-full animate-ping"></div>
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl font-bold leading-tight ml-14">
                      Your Mug, Your Design
                    </h2>
                    <h3 className="text-sm leading-loose ml-14">
                      At CreaMug, we believe that your mug should be as unique
                      as you are. Whether you're designing for yourself or
                      creating the perfect gift, our platform lets you fully
                      customize every detail. From colors and graphics to
                      personal messages, your creativity is the limit. Trusted
                      by thousands and recognized as the leading brand in custom
                      mug design, CreaMug delivers premium quality and style —
                      one mug at a time.
                    </h3>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
                </div>
              </div>

              {/* CTA bouton */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", delay: 1.5 }}
                id="products"
                className="md:hidden mt-10 mx-auto px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
              >
                Start Customing
              </motion.button>
            </div>

            {/* Image centrale */}
            <div className="relative flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", delay: 2 }}
                src={mugNeutral}
                alt="mug"
                className="relative z-40 h-[300px] md:h-[400px] img-shadow"
              />
            </div>

            {/* Texte à droite */}
            <div className="text-pink-400 ml-14 p-4 lg:mt-30 lg:ml-5 flex flex-col justify-center items-end space-y-6 text-right max-w-xs">
              <h2 className="text-2xl font-bold leading-tight">
                Stand Out With Every Sip
              </h2>
              <p className="text-sm leading-relaxed">
                Whether it’s for your home, your office, or a gift to someone
                special, CreaMug helps you make every mug a masterpiece. Choose
                your style, add your flair, and let your mug do the talking.
              </p>
            </div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", delay: 1 }}
            id="products"
            className=" sticky mb-5 max-md:hidden  left-1/2 transform -translate-x-1/2 px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
          >
            Start Customing
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
