import React, { useState } from "react";
import { SiReactivex } from "react-icons/si";
import { Link } from "react-router";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu((prev) => !prev);

  return (
    <nav className="sticky top-0 bg-blue-500 w-full flex items-center justify-between p-3 px-6 z-50 shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <SiReactivex className="text-3xl text-red-800 animate-spin-slow" />
        <span className="text-white font-semibold text-xl">React Docs</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-white text-lg font-medium">
        <Link to="/home" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/docs" className="hover:text-gray-200">
          Docs
        </Link>
        <Link to="/examples" className="hover:text-gray-200">
          Examples
        </Link>
      </ul>

      {/* Mobile Icons */}
      <div className="sm:hidden flex items-center">
        {showMenu ? (
          <IoMdClose
            className="text-white text-3xl cursor-pointer"
            onClick={handleShowMenu}
          />
        ) : (
          <RxHamburgerMenu
            className="text-white text-3xl cursor-pointer"
            onClick={handleShowMenu}
          />
        )}
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`absolute left-0 w-full bg-blue-500 flex flex-col px-6 gap-6 py-6 sm:hidden z-40 transition-all duration-500 ease-in-out
          ${showMenu ? "top-12 opacity-100 translate-y-0" : "top-0 opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <Link
          to="/home"
          className="text-white text-lg hover:text-gray-200"
          onClick={handleShowMenu}
        >
          Home
        </Link>
        <Link
          to="/docs"
          className="text-white text-lg hover:text-gray-200"
          onClick={handleShowMenu}
        >
          Docs
        </Link>
        <Link
          to="/examples"
          className="text-white text-lg hover:text-gray-200"
          onClick={handleShowMenu}
        >
          Examples
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
