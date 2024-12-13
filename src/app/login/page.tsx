"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-[70vh] items-center justify-center md:mt-7 md:mb-7 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
          <Image
            src="/images/newsletter.png"
            alt="Shopping Cart and Phone"
            className="w-full h-full "
            width={300}
            height={300}
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login To ZenZone</h2>
          <p className="text-sm text-gray-600 mb-4">Enter your details below.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email or Phone Number
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
              >
                Login
              </button>
              <Link href="/forgot-password" className="text-blue-500 hover:underline">
                Forget Password?
              </Link>
            </div>
          </form>
          <p className="text-sm text-gray-500 text-center mt-4">
            Don’t have an account?{' '}
            <Link href="/Signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}