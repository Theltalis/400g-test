import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/VIP_logo_128.png";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const linkClass = () =>
    "transition text-black hover:bg-vzred hover:text-white rounded-md px-3 py-2";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className={"h-16 border-b border-gray-200 drop-shadow-md pr-2"}>
      <div className="h-16 flex items-center">
        <div className="flex p-4">
          <button
            id="menu-toggle"
            className="transition hover:outline outline-2 outline-red-300 rounded"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {isMenuOpen && <Hamburger closeMenu={closeMenu} />}
        </div>
        {/* <!-- Logo --> */}
        <NavLink className="flex items-center" to="/" onClick={closeMenu}>
          <img src={logo} alt="VIP" className="h-12 w-12" />
          <span className="hidden md:block text-vzred text-3xl font-bold ml-2"></span>
        </NavLink>
        <div className="ml-auto flex">
          <div className="space-x-2">
            <NavLink className={linkClass} onClick={closeMenu}>
              Profile
            </NavLink>
            <NavLink className={linkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink className={linkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
