import React from "react";
import "animate.css";

const testimonials = [
  {
    name: "Imran Chowdhury",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    quote:
      "I wasn’t expecting much, but the variety completely surprised me. Found books I had been searching for years.",
  },
  {
    name: "Sadia Karim",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    quote:
      "Everything feels thoughtfully designed. Browsing is enjoyable, not overwhelming like other sites.",
  },
  {
    name: "Rakib Ahmed",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "Delivery was quick and the packaging was neat. It’s rare to find this level of care in online stores.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white animate__animated animate__fadeIn">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center animate__animated animate__fadeInDown">
          <h2 className="text-3xl font-bold">Readers’ Experiences</h2>
          <p className="text-gray-500 mt-2">
            Real thoughts from people who explored Book City
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative group border border-gray-200 rounded-xl p-6 hover:shadow-xl transition animate__animated animate__fadeInUp"
            >
              {/* Quote icon */}
              <span className="text-5xl text-gray-200 absolute top-4 left-4">
                “
              </span>

              {/* Content */}
              <p className="text-gray-700 mb-6 relative z-10">
                {item.quote}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h4 className="font-medium">{item.name}</h4>
              </div>

              {/* Hover effect bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;