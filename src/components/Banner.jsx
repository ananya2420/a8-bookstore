import React from "react";
import Image from "next/image";
import Library from "../assets/library.png";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover, Read & Explore <br />
            Your Favorite Books 📚
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            A modern online bookstore where you can explore thousands of books,
            find your next read, and manage your personal library easily.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Browse Books
            </button>

            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-blue-50 transition">
              Banner now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={Library}
            alt="Library Banner"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;