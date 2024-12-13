"use client"
import { useState } from 'react';
import Image from 'next/image';

const ProductDetail = () => {
  // States
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('Black');
  const [quantity, setQuantity] = useState<number>(1);

  // Size options
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'Gray', class: 'bg-gray-300' },
  ];

  // Handlers
  const handleSizeChange = (size: string) => setSelectedSize(size);
  const handleColorChange = (color: string) => setSelectedColor(color);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container mx-auto p-4">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left Section: Images */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/slider.jpeg"
            alt="Main Product"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {['/images/slider.jpeg', '/images/slider.jpeg', '/images/slider.jpeg', '/images/slider.jpeg'].map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Thumbnail ${idx}`}
                width={100}
                height={100}
                className="rounded-md border cursor-pointer hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold">Havic HV G-92 Gamepad</h1>
          <p className="text-gray-500 mt-2">
            PlayStation & Controller | Top-quality build with pro precision and custom design for an ultimate gaming experience.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="material-icons">
                      star
                    </span>
                  ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">(200 reviews)</span>
            </div>
          </div>
          <p className="text-2xl font-semibold text-red-500 mt-4">$192.00</p>

          {/* Color Selector */}
          <div className="my-4 flex items-center gap-4">
            <span className="text-gray-700 font-medium">Colors:</span>
            {colors.map((color) => (
              <button
                key={color.name}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color.name ? 'border-blue-500' : 'border-transparent'
                } ${color.class}`}
                onClick={() => handleColorChange(color.name)}
              />
            ))}
          </div>

          {/* Size Selector */}
          <div className="my-4">
            <span className="font-semibold">Size:</span>
            <div className="flex gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="my-4 flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
            <button className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Related Items</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {['/images/slider.jpeg', '/images/slider.jpeg', '/images/slider.jpeg', '/images/slider.jpeg'].map((item, index) => (
        <div
            key={index} // Use index as key for unique identification
            className="p-4 border rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-transform hover:scale-105"
        >
            <Image
                src={item}
                alt={`Related item ${item}`}
                width={200}
                height={200}
                className="rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">Related Product {index + 1}</h3>
            <p className="text-gray-500 text-sm">$50.00</p>
        </div>
    ))}
</div>
      </div>
    </div>
  );
};

export default ProductDetail;
