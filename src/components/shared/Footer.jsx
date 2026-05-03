import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Book City</h2>
          <p className="text-sm leading-relaxed">
            A digital reading hub where users can browse, borrow, and enjoy a wide range of books across multiple genres.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/books" className="hover:text-white">Books</Link></li>
            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Connect With Us
          </h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact Us
          </h3>

          {/* Email input */}
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-black outline-none"
            />
            <button className="bg-green-500 px-4 rounded-r-md text-white hover:bg-green-600">
              Send
            </button>
          </div>

          {/* Phone */}
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt /> +8801 XXXX XXX
          </p>

          {/* Location */}
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-green-300">
        © 2026 Book City. All rights reserved. Crafted with Next.js & DaisyUI.
      </div>
    </footer>
  );
};

export default Footer;