import React, { useState } from "react";
import { User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center justify-between h-20 mb-5">
          <div className="flex items-center">
            <button 
              className="sm:hidden hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="text-xl font-bold text-gray-800 ml-2 sm:ml-0">ShopStyle</div>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </Link>
            <Cart />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 px-4">
          <div className="space-y-3">
            <Link to="/"
              className="block px-4 py-3 rounded-lg text-base font-medium"
            >
              Home
            </Link>
            <Link to="/products"
              className="block px-4 py-3 rounded-lg text-base font-medium"
            >
              Products
            </Link>
            <Link to="/about"
              className="block px-4 py-3 rounded-lg text-base font-medium"
            >
              About
            </Link>
            <Link to="/contact"
              className="block px-4 py-3 rounded-lg text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;