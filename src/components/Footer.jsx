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
        className="container flex justify-between items-center"
      >
        {/* logo */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full ml-2" />
          <p className=" font-title">CreaMug</p>
        </div>
        {/* social */}
        <div className=" text-3xl flex items-center gap-4 mt-6 text-white">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
        {/* copyright */}
        <div className="text-xs text-center mr-3">
          &copy; 2025 CreaMug. Tous droits réservés.AsidProd
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
