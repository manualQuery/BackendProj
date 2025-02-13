// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className=" text-gray-100">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    //     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //       <Link
    //         href="/"
    //         className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         href="/about"
    //         className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         About
    //       </Link>
    //       <Link
    //         href="/services"
    //         className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Services
    //       </Link>
    //       <Link
    //         href="/contact"
    //         className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
    //       >
    //         Contact
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    // <nav className="flex items-center justify-between mb-20">
    //   <Image src="/images/logo.svg" alt="Logo" width={50} height={40} />

    //   <div className="flex justify-between h-16">
    //     {/* Logo Section */}

    //     {/* Navigation Links */}
    //     <div className="hidden md:flex space-x-4 ml-auto">
    //       <Link
    //         href="/"
    //         className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         href="/about"
    //         className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //       >
    //         About
    //       </Link>
    //       <Link
    //         href="/services"
    //         className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //       >
    //         Services
    //       </Link>
    //       <Link
    //         href="/contact"
    //         className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
    //       >
    //         Contact
    //       </Link>
    //     </div>
    //     <button
    //       className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700
    //   text-md rounded-md hover:bg-blue-300 hover:text-white transition ease-linear duration-500"
    //     >
    //       Get my CV
    //     </button>
    //     {/* Mobile Menu Button */}
    //     <div className="-mr-2 flex md:hidden">
    //       <button
    //         onClick={toggleMenu}
    //         className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         {isOpen ? (
    //           <svg
    //             className="block h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             className="block h-6 w-6"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16m-7 6h7"
    //             />
    //           </svg>
    //         )}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className={`${isOpen ? "block" : "hidden"} md:hidden`}></div>
    // </nav>
    <nav className="flex items-center justify-between mb-20 h-16">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src="/images/logo.svg" alt="Logo" width={50} height={40} />
      </div>

      {/* Navigation Links and Button Section */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className=" hover:bg-blue-300 hover:text-white transition ease-linear duration-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className=" hover:bg-blue-300 hover:text-white transition ease-linear duration-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className=" hover:bg-blue-300 hover:text-white transition ease-linear duration-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className=" hover:bg-blue-300 hover:text-white transition ease-linear duration-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Button */}
        <button
          className="hidden md:block px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 
          text-md rounded-md hover:bg-blue-300 hover:text-white transition ease-linear duration-500"
        >
          Get my CV
        </button>

        {/* Mobile Menu Button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}></div>
    </nav>
  );
};

export default Navbar;
