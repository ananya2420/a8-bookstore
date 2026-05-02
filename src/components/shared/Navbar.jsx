"use client";

import React from "react";
import logo from "../../assets/logo.png";
import Google from "../../assets/google.png";
import Image from "next/image";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} width={120} height={60} alt="Logo" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-green-600 cursor-pointer">
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <NavLink href={"/books"}>All Books</NavLink>
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
            Login
          </button>

          {/* Google Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition">
            <Image src={Google} alt="google" width={20} height={20} />
            <span>Continue with Google</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;