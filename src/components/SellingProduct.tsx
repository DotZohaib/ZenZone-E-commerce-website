"use client";

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

const SellingProduct = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "CapS flowers and/or beads.",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "/images/4.jpg",
    },
    {
      id: 2,
      name: "Belts Redefined.",
      price: 960,
      originalPrice: 1160,
      discount: 25,
      rating: 4.7,
      reviews: 76,
      image: "/images/belt.jpg",
    },
    {
      id: 3,
      name: "QUILTED FUR COLLAR JACKET DARK OLIVE",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.6,
      reviews: 99,
      image: "/images/clothes-1.jpg",
    },
    {
      id: 4,
      name: "QUILTED FUR COLLAR Skirt DARK OLIVE",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.8,
      reviews: 99,
      image: "/images/clothes-3.jpg",
    },
    {
      id: 5,
      name: "QUILTED FUR COLLAR jewellery ",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.8,
      reviews: 99,
      image: "/images/jewellery-3.jpg",
    },
    {
      id: 6,
      name: "QUILTED FUR COLLAR party-wear",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "/images/party-wear-1.jpg",
    },
    {
      id: 7,
      name: "PARKA JACKET FULL SLEEVE NAVY",
      price: 960,
      originalPrice: 1160,
      discount: 25,
      rating: 4.7,
      reviews: 76,
      image: "/images/shirt-2.jpg",
    },
    {
      id: 8,
      name: "PARKA JACKET FULL SLEEVE NAVY",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.6,
      reviews: 99,
      image: "/images/shorts-1.jpg",
    },
    {
      id: 9,
      name: "PARKA sports Shoes FULL SLEEVE NAVY",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.8,
      reviews: 99,
      image: "/images/sports-2.jpg",
    },
    {
      id: 10,
      name: "PARKA watch FULL SLEEVE NAVY",
      price: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4.8,
      reviews: 99,
      image: "/images/watch-1.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-0 md:mt-20">
      <div className="flex gap-3">
        <span className="bg-red-600 w-3 h-7"></span>
        <h3 className="text-xl font-bold mb-2 text-red-700">Today&apos;s</h3>
      </div>

      <div className="flex space-x-2 text-center mb-4">
        <h2 className="text-2xl font-bold md:ml-2 md:mr-14 mb-2">Best Selling Product</h2>
      </div>

      {/* Responsive Grid for Products */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        ref={scrollRef}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow group"
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
                <button className="text-xs px-3 py-2 bg-blue-500 rounded"><Link href="/Cart">Add to Cart</Link></button>
                <button className="text-xs px-3 py-2 bg-yellow-500 rounded"><Link href="/Wishlist">Add to Wishlist</Link></button>
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

export default SellingProduct;
