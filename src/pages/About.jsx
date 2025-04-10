import React from "react";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { SlideUpTransition } from "../components/PageTransition";

const About = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <SlideUpTransition>
            <div className="font-mono grid grid-cols-1 max-w-4xl justify-center items-center mx-auto px-6 lg:px-30">
              <div className="w-full sm:py-6 md:py-10">
                <h1 className="text-left mb-5">ABOUT</h1>
                <p className="text-sm">
                  Shop Style is a factory brand, produced by the world's best
                  maker of fleece fabric and apparel, Roopa Knitting Mills.
                </p>
                <img
                  src="/Headphones.png"
                  alt="about"
                  className="object-cover w-full h-auto min-h-64 sm:h-full sm:mb-12 md:mb-16 lg:mb-15"
                />
              </div>
            </div>
          </SlideUpTransition>
        </div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default About;
