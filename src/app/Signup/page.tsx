"use client"
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import Image from 'next/image';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-screen items-center justify-center md:mt-7 md:mb-7 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
          <Image
            src="/images/newsletter.png"
            alt="Shopping Cart and Phone"
            className="w-full h-screen"
            width={300}
            height={300}
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Create an account</h2>
          <p className="text-sm text-gray-600 mb-4">Sign up to explore the best shopping experience.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                required
              />
            </div>
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
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div className="space-y-2">
            <button
              className="flex items-center justify-center w-full py-2 border rounded-lg shadow-sm text-gray-600 hover:bg-gray-50"
            >
              <FcGoogle className="text-2xl mr-2" /> Sign up with Google
            </button>
            <button
              className="flex items-center justify-center w-full py-2 border rounded-lg shadow-sm text-blue-600 hover:bg-blue-50"
            >
              <FaFacebookF className="text-xl mr-2" /> Sign up with Facebook
            </button>
            <button
              className="flex items-center justify-center w-full py-2 border rounded-lg shadow-sm text-blue-400 hover:bg-blue-50"
            >
              <AiOutlineTwitter className="text-xl mr-2" /> Sign up with Twitter
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}