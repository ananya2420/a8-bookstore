import React from "react";
import Marquee from "react-fast-marquee";

const BookDetails = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 text-black py-4 px-2 container mx-auto">
         <button className='btn bg-green-500 txt-white'>New Arrival</button>
      <Marquee speed={40} pauseOnHover gradient={false}>
        
        <span className="mx-10 text-sm md:text-base text-gray-700">
          📚 New Arrivals: The Great Adventure
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          📖 New Arrivals: Science Explained
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          🚀 New Arrivals: Mystery Island
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          💡 Special Discount on Memberships — Join Now & Save!
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          🎉 Exclusive Offer: Get premium access at a reduced price!
        </span>

      </Marquee>
    </div>
  );
};

export default BookDetails;