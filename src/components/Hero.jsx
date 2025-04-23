import React from "react";
import BgrImage from "../assets/bg-slate.png";
import mugNeutral from "../assets/mugNeutral.jpg";
const bgImage = {
  backgroundImage: `url(${BgrImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  width: "100vw",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className=" min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section  */}
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[850px]">
            {/* text content section */}

            <div className="text-pink-300 p-4 h-full flex flex-col justify-center space-y-28">
              <h1 className=" font-thin text-7xl leading-tight ml-14">
                CreaMug{" "}
              </h1>
              <div className=" absolute">
                <div className=" w-32 h-32 bg-pink-300/15 rounded-full animate-ping"></div>
              </div>
              <div className=" relative ">
                <div className=" relative z-10 space-y-4">
                  <h2 className=" text-2xl font-bold leading-tight ml-14">
                    Your Mug, Your Design
                  </h2>
                  <h3 className=" text-sm  leading-loose ml-14 ">
                    At CreaMug, we believe that your mug should be as unique as
                    you are. Whether you're designing for yourself or creating
                    the perfect gift, our platform lets you fully customize
                    every detail. From colors and graphics to personal messages,
                    your creativity is the limit. Trusted by thousands and
                    recognized as the leading brand in custom mug design,
                    CreaMug delivers premium quality and style — one mug at a
                    time.
                  </h3>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section */}
            <div className="relative  flex justify-center items-center">
              <img
                src={mugNeutral}
                alt="mug"
                className="relative z-40 h-[300px] md:h-[500px] img-shadow"
              />
            </div>

            {/* Third div section  */}
            {/* right text section */}
            <div className="text-pink-400 p-4 lg:mt-30 lg:ml-5  flex flex-col justify-center items-end space-y-6 text-right max-w-xs">
              <h2 className="text-2xl font-bold leading-tight">
                Stand Out With Every Sip
              </h2>
              <p className="text-sm  leading-relaxed">
                Whether it’s for your home, your office, or a gift to someone
                special, CreaMug helps you make every mug a masterpiece. Choose
                your style, add your flair, and let your mug do the talking.
              </p>
            </div>

            {/* <div className="absolute top-2/4 -right-16 border-secondary rounded-full h-[180px] w-[180px] z-10 border-[20px]"></div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
