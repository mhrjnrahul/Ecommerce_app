import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-400 text-black p-6 m-3 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
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
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isOpen && (
          <div className="md:hidden bg-gray-700 absolute top-14 left-0 w-full py-4">
            <a href="/" className="block py-2 px-4 hover:bg-gray-600">Home</a>
            <a
              href="/shop"
              className="block py-2 px-4 hover:bg-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              Shop
            </a>
            <a
              href="/about"
              className="block py-2 px-4 hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="block py-2 px-4 hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/cart"
              className="block py-2 px-4 hover:bg-gray-600 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart className="mr-2"/>
              Cart
            </a>
            <a
              href="/account"
              className="block py-2 px-4 hover:bg-gray-600 flex items-center">
                <FaUser className="mr-2"/>
              Account
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
