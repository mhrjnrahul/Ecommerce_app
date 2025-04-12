import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { SlideUpTransition } from "../components/PageTransition";

const Products = () => {
  return (
    <div>
      <AnimatePresence mode="wait">
        <SlideUpTransition key="featured-products">
          <FeaturedProducts title="All Products" showAll={true} />
        </SlideUpTransition>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Products;
