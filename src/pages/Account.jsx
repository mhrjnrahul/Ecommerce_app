import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Account = () => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <>
      <Navbar />

      <div className="w-full h-auto py-10 overflow-hidden flex justify-center items-center bg-[#F5F5F5] font-mono">
        <div className="flex flex-col gap-4 h-full w-[700px] items-center justify-center">
          <h2 className="">{hasAccount ? "LOGIN" : "CREATE ACCOUNT"}</h2>
          <form className="w-full md:border h-auto px-5 py-6 rounded-md">
            <div className="flex flex-col gap-3">
              {hasAccount ? (
                <>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border border-gray-300 p-2 rounded-md"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="border border-gray-300 p-2 rounded-md"
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="border border-gray-300 p-2 rounded-md"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border border-gray-300 p-2 rounded-md"
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="border border-gray-300 p-2 rounded-md"
                  />
                </>
              )}
            </div>

            <Button
              variant="outline"
              className="mt-5 w-25 rounded text-white bg-black mx-auto"
            >
              {hasAccount ? "Login" : "Signup"}
            </Button>
            <p className="text-center mt-3">
              {hasAccount ? (
                <>
                  Don't have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setHasAccount(false)}
                  >
                    Signup
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setHasAccount(true)}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
