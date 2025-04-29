import React from "react";
import { useState } from "react";
import MapImage from "../assets/world-map.png";

const MapContact = () => {
  const [send, setSend] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSumit = (e) => {
    e.preventDefault();
    setSend(false);
  };
  return (
    <div
      id="contact"
      className=" mt-44 bg-white flex  justify-center items-center"
    >
      <div className=" w-1/3 bg-gray-900 p-4 lg:p-10 ">
        {send ? (
          <form>
            <div className="flex flex-col items-center justify-center h-screen">
              <h2 className="text-2xl font-bold mb-4 text-pink-500 font-title">
                Contact Us
              </h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="border bg-white border-gray-300 p-2 mb-6 w-72 shadow-2xl  "
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your LastName"
                className="border bg-white w-72 shadow-2xl  border-gray-300 p-2 mb-6 "
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="border bg-white w-72 shadow-2xl  border-gray-300 p-2 mb-6 "
              />
              <textarea
                placeholder="Any question?"
                className="border bg-white border-gray-300 p-2 mb-4  h-32 w-72 shadow-2xl "
              ></textarea>
              <button
                onClick={handleSumit}
                className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Thank you for your {name}{" "}
              <span className=" text-pink-600">{lastName} </span>message!
            </h2>
            <p>
              We will get back to you soon at{" "}
              <span className=" text-pink-600">{email} </span>.
            </p>
          </div>
        )}
      </div>
      <div className=" w-2/3 relative flex justify-center items-center">
        <img
          src={MapImage}
          alt="mug"
          className="relative z-40 h-[300px] md:h-[400px] img-shadow"
        />
      </div>
    </div>
  );
};

export default MapContact;
