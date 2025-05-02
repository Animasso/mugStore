import React, { useState } from "react";
import MapImage from "../assets/world-map.png";
import { motion } from "framer-motion";
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
      className="container mt-44 bg-white flex flex-col md:flex-row justify-center items-center px-4"
    >
      {/* Formulaire */}
      <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-900 p-6 lg:p-10 rounded-lg shadow-lg mb-8 md:mb-0">
        {send ? (
          <form onSubmit={handleSumit}>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-6 text-pink-500 font-title">
                Contact Us
              </h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="border bg-white border-gray-300 p-2 mb-6 w-full max-w-xs shadow-2xl rounded"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your LastName"
                className="border bg-white border-gray-300 p-2 mb-6 w-full max-w-xs shadow-2xl rounded"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="border bg-white border-gray-300 p-2 mb-6 w-full max-w-xs shadow-2xl rounded"
              />
              <textarea
                placeholder="Any question?"
                className="border bg-white border-gray-300 p-2 mb-6 h-32 w-full max-w-xs shadow-2xl rounded resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Thank you for your message {name}{" "}
              <span className="text-pink-600">{lastName}</span> !
            </h2>
            <p>
              We will get back to you soon at{" "}
              <span className="text-pink-600 font-bold">{email}</span>.
            </p>
          </motion.div>
        )}
      </div>

      {/* Image */}
      <div className="w-full space-y-7 md:w-1/2 lg:w-2/3 flex flex-col  text-2xl justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 1, duration: 1 }}
          className=" font-title font-bold"
        >
          We can send your
          <span className="text-pink-500 font-bold tracking-wider">
            {" "}
            mug
          </span>{" "}
          anywhere in the world!{" "}
        </motion.h2>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", delay: 1.5 }}
          src={MapImage}
          alt="world map"
          className="h-[250px] md:h-[350px] lg:h-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default MapContact;
