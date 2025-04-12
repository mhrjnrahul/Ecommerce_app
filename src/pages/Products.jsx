import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { SlideUpTransition } from "../components/PageTransition";

const Products = () => {
  return (
    <div>
          <FeaturedProducts title="All Products" showAll={true} />
        
      <Footer />
    </div>
  );
};

export default Products;
