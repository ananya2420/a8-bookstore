import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const imageSrc = book?.image_url
    ? `/assets/${book.image_url}.png`
    : "/assets/fallback.png";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">

      {/* Image */}
      <div className="relative w-full h-52">
        <Image
          src={imageSrc}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {book.title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-1">
          by {book.author}
        </p>

        {/* Category Badge */}
        <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 text-green-600 rounded-full w-fit">
          {book.category}
        </span>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-2">
          {book.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between">

          <span className="text-xs text-gray-500">
            Stock: {book.available_quantity}
          </span>

          <Link href={`/books/${book.id}`}>
            <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              View Details
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BookCard;