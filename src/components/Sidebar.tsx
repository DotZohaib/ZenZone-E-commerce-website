'use client';
import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaCaretDown } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [categories] = useState([
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const slides = [
    {
      id: 1,
      Brand: "Trending item",
      image: "/images/banner-1.jpg",
      title: "Women's latest fashion sale",
      tag: "starting at $ 20.00",
    },
    {
      id: 2,
      Brand: "Trending accessories",
      image: "/images/banner-2.jpg",
      title: "Modern sunglasses",
      tag: "starting at $ 15.00",
    },
    {
      id: 3,
      Brand: "Sale Offer",
      image: "/images/banner-3.jpg",
      title: "New fashion summer sale",
      tag: "starting at $ 29.00",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col md:flex-row h-[70vh] bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white border-r shadow-lg p-4 md:p-6 relative">
        {/* Toggle for Mobile View */}
        <div
          className="md:hidden flex justify-center text-3xl -mt-2 -mb-4 items-center cursor-pointer  px-4 py-0 rounded-md"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          {/* <span className="text-sm font-medium">Categories</span> */}
          <FaCaretDown
            className={`transition-transform  duration-300 ${isCategoryOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>

        {/* Categories List */}
        <ul
          className={`mt-4 md:mt-0 space-y-4 transition-all duration-500 overflow-hidden ${
            isCategoryOpen ? "max-h-screen" : "max-h-0"
          } md:max-h-screen`}
        >
          {categories.map((category, index) => (
           <li
              key={index}
              className="flex justify-between items-center text-gray-700 font-medium text-sm md:text-base hover:text-purple-600 transition cursor-pointer group"
            >
            <Link href="/Wishlist">   {category}</Link>
              <FaChevronRight className="text-gray-400 ml-4 group-hover:text-purple-600 transition" />
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-full md:w-3/4 flex items-center justify-center bg-white relative">
  <div className="w-full z-20 h-[60vh] md:h-[70vh] relative overflow-hidden">
    {/* Slides */}
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
          index === currentSlide ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
      >
        {/* Full Image Display with Right-Side Focus */}
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-[90%] md:object-center" // Adjust object position for mobile
        />

        {/* Text Overlay */}
        <div className="absolute inset-x-0 bottom-4 md:bottom-1/4 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-16 bg-gradient-to-r  to-transparent">
  <h2 className="text-pink-600 font-bold text-sm md:text-lg uppercase tracking-widest mb-2 animate-fadeIn">
    {slide.Brand}
  </h2>
  <h1 className="text-white font-extrabold text-3xl md:text-5xl leading-tight mb-4 drop-shadow-md">
    <span className="block">{slide.title.split(" ").slice(0, 2).join(" ")}</span>
    <span className="block">{slide.title.split(" ").slice(2).join(" ")}</span>
  </h1>
  <h2 className="text-gray-200 font-semibold text-xl md:text-2xl mb-6 animate-fadeIn">
    <strong className="text-yellow-400 text-2xl md:text-3xl">
      ${slide.tag.split(" ")[3]}
    </strong>
  </h2>
  <button className="px-4 py-2 text-xs md:text-base bg-pink-500 text-white rounded-full shadow-md transition transform hover:bg-pink-700 hover:scale-105 hover:shadow-lg animate-bounce">
  <Link href="/Wishlist"> Shop Now →</Link>
  </button>
</div>


      </div>
    ))}

    {/* Slider Controls */}
    <button
      onClick={handlePrevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
      aria-label="Previous Slide"
    >
      <FaChevronLeft />
    </button>
    <button
      onClick={handleNextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
      aria-label="Next Slide"
    >
      <FaChevronRight />
    </button>

    {/* Slide Indicators */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer transition ${
            currentSlide === index ? "bg-purple-600" : "bg-gray-400"
          }`}
          onClick={() => setCurrentSlide(index)}
        ></div>
      ))}
    </div>
  </div>
</main>



    </div>
  );
};

export default Sidebar;