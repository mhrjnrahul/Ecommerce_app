import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export const CarouselWithIndicatorsExample = () => {
  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      <CCarousel controls indicators>
        <CCarouselItem>
          <div className="relative w-full h-[500px]">
            <CImage
              className="w-full h-full object-cover"
              src="/Headphones.png"
              alt="slide 1"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
              <h2 className="text-4xl font-bold">Accessories Sale</h2>
              <p className="mt-2 text-lg">Up to 50% off on selected items</p>
              <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>

          <div className="py-6 text-center text-black">
            <h3 className="text-xl font-semibold text-gray-800">
              Explore the latest in audio tech
            </h3>
            <p className="text-gray-600 mt-2">
              Headphones, earbuds & more engineered for style and sound.
            </p>
          </div>
        </CCarouselItem>

        <CCarouselItem>
          <div className="relative w-full h-[500px]">
            <CImage
              className="w-full h-full object-cover"
              src="/Headphones1.png"
              alt="slide 1"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
              <h2 className="text-4xl font-bold">Accessories Sale</h2>
              <p className="mt-2 text-lg">Up to 50% off on selected items</p>
              <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>

          <div className="py-6 text-center text-black">
            <h3 className="text-xl font-semibold text-gray-800">
              Explore the latest in audio tech
            </h3>
            <p className="text-gray-600 mt-2">
              Headphones, earbuds & more engineered for style and sound.
            </p>
          </div>
        </CCarouselItem>

        <CCarouselItem>
          <div className="relative w-full h-[500px]">
            <CImage
              className="w-full h-full object-cover"
              src="/Headphones2.png"
              alt="slide 1"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
              <h2 className="text-4xl font-bold">Accessories Sale</h2>
              <p className="mt-2 text-lg">Up to 50% off on selected items</p>
              <button className="mt-4 px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>

          <div className="py-6 text-center text-black">
            <h3 className="text-xl font-semibold text-gray-800">
              Explore the latest in audio tech
            </h3>
            <p className="text-gray-600 mt-2">
              Headphones, earbuds & more engineered for style and sound.
            </p>
          </div>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};
