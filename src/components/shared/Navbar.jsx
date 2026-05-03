"use client";

import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo (links to Home) */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} width={120} height={60} alt="Logo" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-black">Book</span>{" "}
            <span className="text-green-600">Store</span>
          </h1>
        </Link>

        {/* Center: Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
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

        {/* Right: Auth Section */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session ? (
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-800">
                Hi, {session.user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
              <NavLink href={"/login"}>Login</NavLink>
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;