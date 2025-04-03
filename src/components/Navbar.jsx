import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <nav className="bg-zinc-400 text-black p-6">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-2xl font-bold flex justify-between gap-2 items-center">
          <a href="/">My Shop</a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-400">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="/cart" className="flex items-center hover:text-gray-400">
            <FaShoppingCart />
          </a>
          <a href="/account" className="mr-1 flex items-center">
            <FaUser />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
