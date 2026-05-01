"use client";

import { useState } from "react";
import books from "@/data/books.json";
import BookCard from "@/components/BooksCard";

const AllBooksPage = () => {
  const [selectedBook, setSelectedBook] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Book filter options (ONLY what you asked)
  const bookFilters = [
    "All",
    "Mystery Island",
    "Coding Mastery",
    "History of Civilizations",
  ];

  // Filter logic
  const filteredBooks = books.filter((book) => {
    const matchBook =
      selectedBook === "All" || book.title === selectedBook;

    const matchSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase());

    return matchBook && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">

      {/* Sidebar */}
      <aside className="w-64 hidden md:block">
        <h2 className="text-lg font-bold mb-4">Books</h2>

        <div className="space-y-2">
          {bookFilters.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedBook(item)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition ${
                selectedBook === item
                  ? "bg-green-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No books found.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default AllBooksPage;