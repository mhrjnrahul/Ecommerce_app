import React from "react";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { SlideUpTransition } from "../components/PageTransition";

const Contact = () => {
  return (
    <div>
      <AnimatePresence mode="wait">
        <SlideUpTransition>
        <div className="font-mono bg-[#F2F2F2] grid grid-cols-1 md:grid-cols-2 w-full h-auto md:px-45 px-6 py-20 md:py-40 gap-10">
        <div className="flex flex-col gap-10 max-w-[400px] md:mx-0">
          <h1 className="">CONTACT US</h1>
          <div>
            <p className="text-sm">
              Thank you for your interest in contacting Shop Style. Please leave
              us a message in the fields to the right and our team will get back
              to you within 1-3 business days
            </p>
            <p className="text-sm">
              Some questions you have may be able to be answered with our FAQs
              or Size Guide.
            </p>
          </div>
        </div>

        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Phone number" className="block text-gray-700">
                Phone number
              </label>
              <input
                id="number"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="Reason for contact" className="block text-gray-700">
                Reason for contact?
              </label>
              <input
                id="reason"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Description
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>



            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
          </SlideUpTransition>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Contact;
