import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logoMug.png";
const Footer = () => {
  return (
    <footer className=" mt-10 bg-gray-900 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container "
      >
        {/* logo */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold uppercase">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 rounded-full ml-2"
            />
            <p className="text-pink-500 font-title">CreaMug</p>
          </div>
          {/* social */}
          <div className="text-pink-500 text-3xl flex items-center ml-4 md:mr-4 gap-4 mt-6">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

        {/* copyright */}
        <div className="text-xs mt-6 self-center text-pink-500 text-center mr-3">
          &copy; 2025 CreaMug. Tous droits réservés.AsidProd
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
