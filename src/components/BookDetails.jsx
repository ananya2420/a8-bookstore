import React from "react";
import Marquee from "react-fast-marquee";

const BookDetails = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 text-black py-4 px-2 container mx-auto">
         <button className='btn bg-green-500 txt-white'>New Arrival</button>
      <Marquee speed={40} pauseOnHover gradient={false}>
        
        <span className="mx-10 text-sm md:text-base text-gray-700">
          📖 Title: The Great Adventure
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          ✍️ Author: John Doe
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          ⭐ Rating: 4.8 / 5
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          📚 Category: Fiction, Adventure
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          💰 Price: $19.99
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          🚚 Free delivery available on this book
        </span>

        <span className="mx-10 text-sm md:text-base text-gray-700">
          🔥 Limited stock available — order soon!
        </span>

      </Marquee>
    </div>
  );
};

export default BookDetails;