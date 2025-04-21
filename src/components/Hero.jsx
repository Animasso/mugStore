import React from "react";
import BgrImage from "../assets/bg-slate.png";
import mugNeutral from "../assets/mugNeutral.jpg";
const bgImage = {
  backgroundImage: `url(${BgrImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className=" min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section  */}
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className=" text-pink-300 mt-[100px] md:mt-0 p-4 space-y-28">
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
                  <h3 className=" text-sm opacity-55 leading-loose ml-14 ">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur reprehenderit facere, deserunt unde incidunt autem
                    asperiores deleniti eum esse natus alias assumenda quibusdam
                    magni perferendis doloremque ratione doloribus porro
                    tenetur!
                  </h3>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section */}
            <div className=" relative ">
              <img
                src={mugNeutral}
                alt="mug"
                className=" relative z-40 h-[300px] md:h-[500px] img-shadow"
              />
            </div>
            {/* Third div section  */}
            <div className=""></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
