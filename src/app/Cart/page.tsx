"use client"
import React, { useState } from "react";
import Link from "next/link";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "JACKET Gray",
      price: 500,
      quantity: 1,
      image: "/images/jacket-6.jpg",
    },
    {
      id: 2,
      name: "JACKET White",
      price: 650,
      quantity: 2,
      image: "/images/shirt-2.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleUpdateCart = () => {
    console.log("Cart updated", cartItems);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Cart</h2>
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse border border-gray-200 mb-4 sm:mb-6">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 sm:p-4 border-b border-gray-200">Product</th>
          <th className="p-2 sm:p-4 border-b border-gray-200">Price</th>
          <th className="p-2 sm:p-4 border-b border-gray-200">Quantity</th>
          <th className="p-2 sm:p-4 border-b border-gray-200">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="border-b border-gray-200">
            <td className="p-2 sm:p-4 flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-4 object-contain rounded"
              />
              <span className="text-sm sm:text-base">{item.name}</span>
            </td>
            <td className="p-2 sm:p-4 text-sm sm:text-base">${item.price}</td>
            <td className="p-2 sm:p-4">
              <select
                className="border border-gray-300 rounded p-1 sm:p-2 text-sm sm:text-base"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
              >
                {[1, 2, 3, 4, 5].map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </td>
            <td className="p-2 sm:p-4 text-sm sm:text-base">
              ${item.price * item.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
    <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 text-sm sm:text-base">
      Return to Shop
    </button>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
      onClick={handleUpdateCart}
    >
      Update Cart
    </button>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Coupon Code</h3>
      <div className="flex">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 border border-gray-300 rounded-l px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base"
        />
        <button className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-r hover:bg-red-600 text-sm sm:text-base">
          Apply Coupon
        </button>
      </div>
    </div>
    <div className="col-span-2">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Cart Total</h3>
      <div className="border border-gray-300 rounded p-4">
        <div className="flex justify-between mb-2 text-sm sm:text-base">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm sm:text-base">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold text-base sm:text-lg">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>
        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded hover:bg-red-600 text-sm sm:text-base">
        <Link href='/Checkout'>Proceed to Checkout</Link>
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Cart;
