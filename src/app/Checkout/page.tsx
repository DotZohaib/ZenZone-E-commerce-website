"use client";
import React, { useState, useRef } from "react";

const Checkout: React.FC = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [total, setTotal] = useState(1150);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const couponRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCouponApply = () => {
    if (coupon.toLowerCase() === "discount50") {
      setTotal((prev) => prev - 50);
      setCouponApplied(true);
      couponRef.current?.setAttribute("disabled", "true");
      setPopupMessage("Coupon applied successfully!");
      setTimeout(() => setPopupMessage(null), 3000);
    } else {
      setPopupMessage("Invalid coupon code.");
      setTimeout(() => setPopupMessage(null), 3000);
    }
  };

  const handlePlaceOrder = () => {
    const requiredFields = ["firstName", "streetAddress", "city", "phone", "email"];
    const missingFields = requiredFields.filter((field) => {
      const value = billingDetails[field as keyof typeof billingDetails];
      return typeof value === "string" && value.trim() === "";
    });
    if (missingFields.length > 0) {
      setPopupMessage(`Please fill in: ${missingFields.join(", ")}`);
      setTimeout(() => setPopupMessage(null), 3000);
      return;
    }

    if (!paymentMethod) {
      setPopupMessage("Please select a payment method.");
      setTimeout(() => setPopupMessage(null), 3000);
      return;
    }

    setPopupMessage("Order placed successfully!");
    setTimeout(() => setPopupMessage(null), 3000);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span>Back</span>
        </button>

        <h1 className="text-2xl font-bold flex items-center space-x-2 cursor-pointer hover:text-red-500 transition">
          <span className="text-gray-800">Shop</span>
          <span className="text-red-500">Zone</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Billing Details Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
          <form className="space-y-4">
            {[
              { name: "firstName", placeholder: "First Name" },
              { name: "companyName", placeholder: "Company Name" },
              { name: "streetAddress", placeholder: "Street Address" },
              { name: "apartment", placeholder: "Apartment, floor, etc. (Optional)" },
              { name: "city", placeholder: "Town/City" },
              { name: "phone", placeholder: "Phone Number" },
              { name: "email", placeholder: "Email Address", type: "email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={String(billingDetails[field.name as keyof typeof billingDetails] || "")}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-red-500 transition"
              />
            ))}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="saveInfo"
                checked={billingDetails.saveInfo}
                onChange={handleInputChange}
                className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
              />
              <span className="text-sm">Save this information for faster checkout next time</span>
            </label>
          </form>
        </div>

        {/* Order Summary Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          <div className="border border-gray-300 rounded p-6 space-y-4">
            {/* Product Details */}
            <div className="flex items-center justify-between">
              <img src="/images/jacket-6.jpg" alt="JACKET Gray" className="w-16 h-16 rounded-md border" />
              <span className="flex-1 ml-4">JACKET Gray</span>
              <span className="text-gray-600">$500</span>
            </div>
            <div className="flex items-center justify-between">
              <img src="/images/shirt-2.jpg" alt="JACKET White" className="w-16 h-16 rounded-md border" />
              <span className="flex-1 ml-4">JACKET White</span>
              <span className="text-gray-600">$650</span>
            </div>

            {/* Summary */}
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>$1150</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>

            {/* Payment Method */}
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Payment Method</h3>
              <label className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="flex items-center space-x-2">
                  <img src="/images/paypal.png" alt="PayPal" className="w-6 h-6" />
                  <span>PayPal</span>
                </span>
              </label>

              <label className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="easypaisa"
                  checked={paymentMethod === "easypaisa"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="flex items-center space-x-2">
                  <img src="/images/easy.png" alt="EasyPaisa" className="w-6 h-6" />
                  <span>EasyPaisa</span>
                </span>
              </label>

              <label className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name="payment"
                  value="zazzcash"
                  checked={paymentMethod === "zazzcash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="flex items-center space-x-2">
                  <img src="/images/jazz.png" alt="JazzCash" className="w-6 h-6" />
                  <span>JazzCash</span>
                </span>
              </label>
            </div>

            {/* Coupon Code */}
            <div className="mt-4">
              <div className="flex relative">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  ref={couponRef}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-red-500 transition"
                />
                <button
                  onClick={handleCouponApply}
                  className={`bg-red-500 text-white px-4 py-2 rounded-r transition ${
                    couponApplied ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={couponApplied}
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <div className="text-green-500 mt-2">Coupon Applied! Discount: $50</div>
              )}
            </div>

            {/* Place Order Button */}
            <div className="mt-6">
              <button
                onClick={handlePlaceOrder}
                className="bg-red-500 text-white w-full px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Place Order
              </button>
            </div>

            {/* Popup Message */}
            {popupMessage && (
              <div className="mt-4 p-3 bg-gray-800 text-white text-sm rounded">
                {popupMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
