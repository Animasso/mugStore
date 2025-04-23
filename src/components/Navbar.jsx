import React from "react";
import logo from "../assets/logoMug.png";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-500/70 backdrop-blur-sm text-white p-4 flex justify-between items-center z-50 shadow-md">
      <div className="flex items-center justify-center space-x-6 ">
        <img
          src={logo}
          alt="logo"
          className=" rounded-full object-cover w-20 h-20"
        />
        <h1 className=" font-title text-3xl font-bold text-pink-400 ">
          {" "}
          CreaMug{" "}
        </h1>
      </div>

      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
