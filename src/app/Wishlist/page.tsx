"use client"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Wishlist = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "puma jacket brand",
      description: "High-quality product",
      price: 99.99,
      image: "/images/2.jpg",
    },
    {
      id: 2,
      name: "Nike jacket brand",
      description: "Another amazing product",
      price: 149.99,
      image: "/images/jacket-6.jpg",
    },
    {
      id: 3,
      name: "Zara jacket brand",
      description: "Stylish and durable",
      price: 199.99,
      image: "/images/jacket-2.jpg",
    },
  ]);

  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Simulate a loading action
  const simulateLoading = (callback: () => void, message: string) => {
    NProgress.start();
    setTimeout(() => {
      callback();
      NProgress.done();
      toast.success(message);
    }, 1000);
  };

  // Add to wishlist
  const addToWishlist = (product: Product) => {
    simulateLoading(() => {
      if (!wishlist.find((item) => item.id === product.id)) {
        setWishlist([...wishlist, product]);
      }
    }, `${product.name} added to wishlist`);
  };

  // Remove from wishlist
  const removeFromWishlist = (id: number) => {
    simulateLoading(() => {
      setWishlist(wishlist.filter((item) => item.id !== id));
    }, "Removed from wishlist");
  };

  // Add to cart
  const addToCart = (product: Product) => {
    simulateLoading(() => {
      if (!cart.find((item) => item.id === product.id)) {
        setCart([...cart, product]);
      }
    }, `${product.name} added to cart`);
  };

  // Remove from cart
  const removeFromCart = (id: number) => {
    simulateLoading(() => {
      setCart(cart.filter((item) => item.id !== id));
    }, "Removed from cart");
  };

  // Edit product
  const editProduct = (id: number) => {
    const newName = prompt("Enter new product name:");
    const newDescription = prompt("Enter new product description:");
    const newPrice = parseFloat(prompt("Enter new product price:") || "0");

    simulateLoading(() => {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id
            ? {
                ...product,
                name: newName || product.name,
                description: newDescription || product.description,
                price: newPrice || product.price,
              }
            : product
        )
      );
    }, "Product details updated");
  };

  return (
    <div className="container mx-auto p-6 space-y-10">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Products Section */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-bold mt-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-4">
                <button
                  onClick={() => addToWishlist(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Wishlist
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => editProduct(product.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wishlist Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Wishlist</h2>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition">
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button  className="mt-2 ml-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"><Link href="/Cart">Buy</Link></button>
             
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Your wishlist is empty.</p>
        )}
      </section>

      {/* Cart Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Cart</h2>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition">
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button  className="mt-2 ml-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"><Link href="/Cart">Buy</Link></button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
