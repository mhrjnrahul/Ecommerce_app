import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-zinc-400 text-black p-6">
        <div className="container mx-auto flex justify-between items-center">
            
            <div className="text-2xl font-bold flex justify-between gap-2 items-center"> 
                <div>
                    Logo
                </div>
                <a href="/">
                    My Shop
                </a>
            </div>

            <div className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/shop" className="hover:text-gray-400">Shop</a>
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
                <a href="/cart" className="flex items-center hover:text-gray-400"><FaShoppingCart /></a>
                <a href="/account" className="mr-1 flex items-center"><FaUser /></a>
            </div>


        </div>
    </nav>
  );
};

export default Navbar;
