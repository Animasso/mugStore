import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logoMug.png";

const NavBarMobile = ({ setIsOpen, setModalOpen }) => {
  const NavbarMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Products", link: "#products" },
    { id: 3, title: "Testimonials", link: "#testimonials" },
    { id: 4, title: "Contact", link: "#contact" },
  ];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 12 }}
      exit={{ y: -100, opacity: 0 }}
      className="md:hidden absolute top-28 left-0 w-full bg-gray-500/70 backdrop-blur-sm  text-white shadow-lg"
    >
      <ul className="flex flex-col font-bold  items-center space-y-4 py-4">
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className=" uppercase font-title hover:text-black transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavBarMobile;
