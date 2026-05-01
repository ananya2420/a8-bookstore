"use client"; // Required for onClick and Toastify

import React from "react"; // Import React to use React.use()
import books from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const BookDetailsPage = ({ params }) => {
  // In Client Components, we use React.use() to unwrap the params promise
  const { id } = React.use(params);
  
  const book = books.find((b) => b.id == id);

  const handleBorrow = () => {
    toast.success("Book Successfully borrowed! 📚");
  };

  if (!book) {
    return <div className="text-center mt-20 text-red-500">Book not found</div>;
  }

  const imageSrc = book.image_url ? `/assets/${book.image_url}.png` : "/assets/fallback.png";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative w-full h-96 rounded-xl overflow-hidden">
        <Image src={imageSrc} alt={book.title} fill className="object-cover" />
      </div>

      <div className="mt-6 space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
        <p className="text-gray-600"><span className="font-semibold">Author:</span> {book.author}</p>
        <p className="text-gray-600"><span className="font-semibold">Category:</span> {book.category}</p>
        <p className="text-gray-700">{book.description}</p>
        
        {/* Added the onClick handler here */}
        <button 
          onClick={handleBorrow}
          className="mt-5 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Borrow Book
        </button>

        <div className="mt-4">
          <Link href="/"><span className="text-green-600 hover:underline">← Back</span></Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;