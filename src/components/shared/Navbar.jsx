"use client";

import React from "react";
import logo from "../../assets/logo.png";
import Google from "../../assets/google.png";
import Image from "next/image";

import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  
  const { data: session, isPending } = authClient.useSession();

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, "data");
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} width={120} height={60} alt="Logo" />

          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-black">Book</span>{" "}
            <span className="text-green-600">Store</span>
          </h1>
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

        {/* Auth Section */}
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
            <>
              {/* Login Button */}
              <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
                <NavLink href={"/login"}>Login</NavLink>
              </button>

              {/* Google Button */}
              <button
                onClick={handleGoogleSignin}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-gray-900 transition"
              >
                <Image src={Google} alt="google" width={20} height={20} />
                <span>Continue with Google</span>
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;