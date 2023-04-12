import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed flex w-full h-[60px] justify-between items-center px-4 z-10 bg-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-slate-200 text-slate-200">
      <div>
        <span className="bold text-2xl">Purrfect Pals</span>
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <Link
          to="/"
          className=" px-4 hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8 hover:text-slate-100 hover:text-xl"
        >
          Home
        </Link>
        <Link
          to="/login"
          className=" px-4 hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8 hover:text-slate-100 hover:text-xl"
        >
          Discussion
        </Link>
        <Link
          to="/register"
          className=" px-4 hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8 hover:text-slate-100 hover:text-xl"
        >
          Shelter
        </Link>
        <Link
          to="/socket"
          className=" px-4 hover:cursor-pointer border-r-2 hover:scale-120 hover:border-r-8 hover:text-slate-100 hover:text-xl"
        >
          About Me
        </Link>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-80 border-b border-slate-200 text-slate-200"
        }
      >
        <Link className="py-6 text-2xl" to="/">
          Home
        </Link>
        <Link className="py-6 text-2xl" to="/login">
          Discussion
        </Link>
        <Link className="py-6 text-2xl" to="/register">
          Shelter
        </Link>
        <Link className="py-6 text-2xl" to="/socket">
          About Me
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
