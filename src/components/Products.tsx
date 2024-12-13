'use client'
import { FaHeart, FaCartPlus, FaPlus, FaMinus,FaEye } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Breed Dry Dog Food',
    price: 100,
    description: 'Nutritious dry food for your beloved pet.',
    rating: 4.5,
    reviews: 93,
    image: '/images/clothes-2.jpg', // Replace with actual image paths
    tag: 'Brand',
  },
  {
    id: 2,
    name: 'CANON DSLR Camera',
    price: 320,
    description: 'Capture moments with stunning clarity.',
    rating: 4.8,
    reviews: 150,
    image: '/images/jacket-2.jpg',
    tag: 'NEW',
  },
  {
    id: 3,
    name: 'ASUS Flip Gaming Laptop',
    price: 700,
    description: 'High performance for gaming and work.',
    rating: 4.7,
    reviews: 125,
    image: '/images/jacket-5.jpg',
    tag: 'Stylish',
  },
  {
    id: 4,
    name: 'Curology Product Set',
    price: 500,
    description: 'Skincare solutions tailored for you.',
    rating: 4.6,
    reviews: 145,
    image: '/images/shoe-1_1.jpg',
    tag: 'Unique',
  },
  {
    id: 5,
    name: 'Breed Dry Dog Food',
    price: 100,
    description: 'Nutritious dry food for your beloved pet.',
    rating: 4.5,
    reviews: 93,
    image: '/images/shoe-3.jpg', // Replace with actual image paths
    tag: 'Brand',
  },
  {
    id: 6,
    name: 'CANON DSLR Camera',
    price: 320,
    description: 'Capture moments with stunning clarity.',
    rating: 4.8,
    reviews: 150,
    image: '/images/sports-1.jpg',
    tag: 'NEW',
  },
  {
    id: 7,
    name: 'ASUS Flip Gaming Laptop',
    price: 700,
    description: 'High performance for gaming and work.',
    rating: 4.7,
    reviews: 125,
    image: '/images/sports-2.jpg',
    tag: 'Stylish',
  },
  {
    id: 8,
    name: 'Curology Product Set',
    price: 500,
    description: 'Skincare solutions tailored for you.',
    rating: 4.6,
    reviews: 145,
    image: '/images/watch-3.jpg',
    tag: 'Unique',
  },
];

export default function Products() {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQuantityChange = (index: number, type: 'increase' | 'decrease') => {
    setQuantities((prev) =>
      prev.map((qty, idx) =>
        idx === index ? (type === 'increase' ? qty + 1 : Math.max(qty - 1, 1)) : qty
      )
    );
  };

  return (
    <main className="container mx-auto px-6 py-12">
       <div className="flex gap-3">
        <span className="bg-red-600 w-3 h-7"></span>
        <h3 className="text-xl font-bold mb-2 text-red-700">Today&apos;s</h3>
      </div>

      <div className="flex space-x-2 text-center mb-4">
        <h2 className="text-2xl font-bold md:ml-2 md:mr-14 mb-2">Explore Our Products</h2>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
           <div className="relative group">
  <Image
    src={product.image}
    alt={product.name}
    width={400}
    height={300}
    className="w-full h-56 object-cover"
  />
  {product.tag && (
    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded">
      {product.tag}
    </span>
  )}
  <button
    title="Add to Wishlist"
    className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
  >
    <FaHeart className="text-red-500" />
  </button>
  <button
    title="Add to card"
    className="absolute top-12 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
  >
    <FaEye className="text-purple-600" />
  </button>
</div>

            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-xl">${product.price}</span>
                <span className="text-sm text-gray-500">
                  {product.rating} ⭐ ({product.reviews} reviews)
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(index, 'decrease')}
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                  >
                    <FaMinus />
                  </button>
                  <span className="font-bold text-lg">{quantities[index]}</span>
                  <button
                    onClick={() => handleQuantityChange(index, 'increase')}
                    className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 bg-red-600">
                  <FaCartPlus />
                  <Link href="/Cart"> Add to Cart </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold bg-red-600">
        <Link href="/Wishlist"> View All Products </Link>
        </button>
      </div>
    </main>
  );
}
