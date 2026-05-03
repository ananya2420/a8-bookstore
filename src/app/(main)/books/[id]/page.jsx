"use client";

import React from "react";
import books from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const BookDetailsPage = ({ params }) => {
  const router = useRouter();

  const { id } = React.use(params);
  const book = books.find((b) => b.id == id);

  // REAL AUTH USER (FIXED)
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // PRIVATE ROUTE PROTECTION
  React.useEffect(() => {
    if (!user) {
      toast.error("Please login to access this page!");
      router.push("/login");
    }
  }, [user, router]);

  const handleBorrow = () => {
    if (!user) {
      toast.error("Please login to borrow books!");
      router.push("/login");
      return;
    }

    toast.success(`"${book.title}" successfully borrowed! 📚`);
  };

  if (!book) {
    return (
      <div className="flex flex-col items-center mt-20">
        <p className="text-red-500 text-xl font-semibold">Book not found</p>
        <Link href="/" className="mt-4 text-blue-500 underline">
          Return Home
        </Link>
      </div>
    );
  }

  const imageSrc = book.image_url
    ? `/assets/${book.image_url}.png`
    : "/assets/fallback.png";

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Book Image */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={imageSrc}
          alt={book.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Book Details */}
      <div className="mt-6 space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">
          {book.title}
        </h1>

        <div className="flex flex-col gap-1">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">Author:</span>{" "}
            {book.author}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">Category:</span>{" "}
            {book.category}
          </p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Stock:</span>{" "}
            {book.available_quantity} copies left
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed pt-2 border-t border-gray-100">
          {book.description}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col gap-4">

          <button
            onClick={handleBorrow}
            className="w-full md:w-max px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 active:scale-95 transition-all shadow-md"
          >
            Borrow This Book
          </button>

          <Link href="/">
            <span className="text-gray-500 hover:text-green-600 transition flex items-center gap-1 cursor-pointer">
              ← Back to Collection
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;