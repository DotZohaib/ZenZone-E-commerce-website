'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
}

const FlashSales = () => {
  const [timer, setTimer] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timer logic
    const timerInterval = setInterval(() => {
      setTimer((prev) => {
        const seconds = prev.seconds - 1;
        const minutes = seconds < 0 ? prev.minutes - 1 : prev.minutes;
        const hours = minutes < 0 ? prev.hours - 1 : prev.hours;
        const days = hours < 0 ? prev.days - 1 : prev.days;

        return {
          days: days >= 0 ? days : 0,
          hours: hours >= 0 ? hours : 0,
          minutes: minutes >= 0 ? (seconds < 0 ? 59 : prev.minutes) : prev.minutes,
          seconds: seconds >= 0 ? seconds : 59,
        };
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      const children = Array.from(scrollElement.children) as HTMLElement[];
      // Clone elements only if they aren't already cloned
      if (scrollElement.children.length === children.length) {
        children.forEach((child) => {
          const clone = child.cloneNode(true);
          scrollElement.appendChild(clone);
        });
      }
    }

    // Auto-scroll logic for infinite scrolling
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth / 2;
        scrollRef.current.scrollLeft += 1; // Adjust speed here

        if (scrollRef.current.scrollLeft >= maxScrollLeft) {
          scrollRef.current.scrollLeft = 0; // Reset to the start
        }
      }
    }, 20); // Adjust for smoothness and speed

    return () => clearInterval(scrollInterval);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "QUILTED FUR COLLAR JACKET DARK OLIVE",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "/images/2.jpg",
    },
    {
      id: 2,
      name: "CORDUROY COLLAR QUILTED JACKET FULL SLEEVE KHAKI",
      price: 960,
      originalPrice: 1160,
      discount: 25,
      rating: 4.7,
      reviews: 76,
      image: "/images/3.jpg",
    },
    {
      id: 3,
      name: "SUEDE UTILITY JACKET FULL SLEEVE LIGHT BROWN",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.6,
      reviews: 99,
      image: "/images/jacket-2.jpg",
    },
    {
      id: 4,
      name: "FAUX COLLAR F/S QUILTED JACKET BLACK",
      price: 375,
      originalPrice: 400, 
      discount: 25,
      rating: 4.8,
      reviews: 99,
      image: "/images/jacket-6.jpg",
    },
    {
      id: 5,
      name: "QUILTED FUR COLLAR JACKET DARK OLIVE",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "/images/2.jpg",
    },
    {
      id: 6,
      name: "CORDUROY COLLAR QUILTED JACKET FULL SLEEVE KHAKI",
      price: 960,
      originalPrice: 1160,
      discount: 25,
      rating: 4.7,
      reviews: 76,
      image: "/images/3.jpg",
    },
    {
      id: 7,
      name: "SUEDE UTILITY JACKET FULL SLEEVE LIGHT BROWN",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.6,
      reviews: 99,
      image: "/images/jacket-2.jpg",
    },
    {
      id: 8,
      name: "FAUX COLLAR F/S QUILTED JACKET BLACK",
      price: 375,
      originalPrice: 400, 
      discount: 25,
      rating: 4.8,
      reviews: 99,
      image: "/images/jacket-6.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-0 md:mt-20">
      <div className="flex gap-3">
        <span className="bg-red-600 w-3 h-7"></span>
        <h3 className="text-xl font-bold mb-2 text-red-700">Today&apos;s</h3>
      </div>

      <div className="flex space-x-2 text-center mb-4">
        <h2 className="text-2xl font-bold md:ml-2 md:mr-14 mb-2">Flash Sales</h2>
        <div>
          <span className="text-xl font-semibold">{timer.days}</span> Days
        </div>
        <div>
          <span className="text-xl font-semibold">{timer.hours}</span> Hours
        </div>
        <div>
          <span className="text-xl font-semibold">{timer.minutes}</span> Minutes
        </div>
        <div>
          <span className="text-xl font-semibold">{timer.seconds}</span> Seconds
        </div>
      </div>

      <div className="flex overflow-x-hidden gap-6" ref={scrollRef}>
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow group flex-shrink-0 w-60"
          >
            <span className="absolute z-10 top-2 left-2 bg-red-500 text-white text-xs p-1 rounded">
              -{product.discount}%
            </span>
            <div className="relative h-50 w-full mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full flex justify-between p-2  text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs px-3 py-2 bg-blue-500 rounded"><Link href='/Cart'>Add to Cart</Link></button>
                <button className="text-xs px-3 py-2 bg-yellow-500 rounded"><Link href='/Wishlist'>Add to Wishlist</Link></button>
              </div>
            </div>
            <h3 className="text-lg font-bold truncate">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-semibold">${product.price}</span>
              <span className="line-through text-gray-500">${product.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
