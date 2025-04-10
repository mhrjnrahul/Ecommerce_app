import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <div className="p-2 hover:bg-gray-100 rounded-full relative">
        <ShoppingCart onClick={toggleCart} className="h-5 w-5 text-gray-600" />
        {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span> */}
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-140 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
                      ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-[50px] flex justify-end items-center px-3">
            <X size={30} onClick={toggleCart} />
          </div>
          <div className="h-140 flex flex-col justify-center gap-3 items-center w-full font-mono">
            <h2 className="leading-relaxed">YOUR CART IS EMPTY</h2>
            <Link to="/products">
              <Button
                variant="primary"
                className="rounded mt-2"
                onClick={toggleCart}
              >
                Continue Shopping
              </Button>
            </Link>
            <div className="flex flex-col justify-center items-center mt-3">
              <p className="text-xl">HAVE AN ACCOUNT?</p>
              <p className="text-sm"><Link to="/account"><span className="underline" onClick={toggleCart}>Login</span></Link> to check out faster.</p>
            </div>
          </div>
        </div>
      </div>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={toggleCart}
        />
      )}
    </div>
  );
};

export default Cart;
