"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/u logo.jpg";

const LogIn = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] lg:h-[70vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/u logo.jpg')", // Update with correct path
        }}
      >
        {/* Overlay for slight blur effect */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center px-4 sm:px-8">
          <div className="text-[#0a0a0a]">
            {/* Logo or Icon */}
            <div className="ml-2">
              <span className="text-gold text-3xl md:text-4xl font-bold">
                <Image
                  src={logo}
                  alt="logo"
                  width={80}
                  height={80}
                  className="ml-10"
                />
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2">
              Sign In
            </h1>

            {/* Breadcrumbs */}
            <nav className="text-xs sm:text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home</Link>
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>Sign In</span>
            </nav>
          </div>
        </div>
      </section>

      <div className="bg-[#a3a3a0] sm:ml-[10%] md:ml-[20%] lg:ml-[30%]">
        <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] px-4">
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">

            {/* Log In Section */}
            <div className="bg-gradient-to-r from-blue-500 via-gray-400 to-pink-500 rounded-lg p-6 sm:p-8 md:w-[500px] ">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-950 text-center">Log In</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="login-username"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Username or email address
                  </label>
                  <input
                    type="text"
                    id="login-username"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="login-password"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <input type="checkbox" id="remember-me" className="mr-2" />
                  <label htmlFor="remember-me" className="text-gray-950">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
                >
                  Log In
                </button>
                <div className="text-center mt-4">
                  <Link href="#" className="text-sm hover:underline text-gray-950">
                    Lost Your Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
