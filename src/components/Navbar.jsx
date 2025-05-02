import React from "react";
import logo from "../assets/logoMug.png";
import { useState } from "react";
import NavBarMobile from "./NavBarMobile";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = ({ setModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed top-0 left-0 w-full bg-gray-500/70 backdrop-blur-sm text-white p-4  z-50 shadow-md">
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <div className=" flex items-center justify-center space-x-6 ">
          <motion.img
            initial={{ x: -100, rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ type: "spring", delay: 1 }}
            src={logo}
            alt="logo"
            className=" rounded-full object-cover w-20 h-20"
          />
          <h1 className=" font-title text-3xl font-bold text-pink-400 ">
            {" "}
            CreaMug{" "}
          </h1>
        </div>

        <ul className="flex font-title space-x-4">
          <li>
            <a href="#home" className="hover:text-pink-500">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-pink-500">
              Products
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-pink-500">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Menu burger (mobile) */}
      <div className=" md:hidden flex justify-between">
        <div className=" flex items-center justify-center space-x-6 ">
          <motion.img
            initial={{ x: -100, rotate: 0 }}
            animate={{ x: 0, rotate: 360 }}
            transition={{ type: "spring", delay: 1 }}
            src={logo}
            alt="logo"
            className=" rounded-full object-cover w-20 h-20"
          />
          <h1 className=" font-title text-3xl font-bold text-pink-400 ">
            {" "}
            CreaMug{" "}
          </h1>
        </div>

        <button className=" text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className=" text-pink-500" />
          ) : (
            <FaBars className="text-pink-500" />
          )}
        </button>
        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <NavBarMobile setModalOpen={setModalOpen} setIsOpen={setIsOpen} />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
