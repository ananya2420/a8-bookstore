import React from "react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Book City helped me discover amazing novels I never knew existed. Super smooth experience.",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The UI is beautiful and easy to use. Ordering books has never been this simple.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Fast delivery and great collection. Book City is now my go-to bookstore.",
    rating: 5,
  },
];

const FeaturedCard = () => {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Readers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
            </div>

            <p className="text-gray-600 mb-4">{item.text}</p>

            <div className="text-green-500">
              {"★".repeat(item.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;