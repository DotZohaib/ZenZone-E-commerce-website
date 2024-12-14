'use client';
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes, FaChartBar, FaBox, FaMoneyBillAlt, FaUser, FaTruck, FaTag, FaCog, FaEnvelope,FaTachometerAlt, FaUserCircle,FaChartLine, FaCreditCard, FaCogs, FaUserPlus } from "react-icons/fa";



import Link from "next/link";
import UserProfilePopover from "./UserProfilePopover";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="sticky top-0 z-40">
      <nav className="flex items-center justify-between px-3 md:px-6 py-2 md:py-4 bg-white border-b shadow-md relative">
        {/* Brand Name */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">ZenZone</h2>
     
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative md:flex md:flex-row md:translate-x-0 md:shadow-none md:h-auto md:w-auto items-center gap-4 md:gap-6 text-gray-700 z-50`}
        >
          <li className="mt-12 md:mt-0">
            <Link href="/" className="block text-sm md:text-base hover:text-purple-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="block text-sm md:text-base hover:text-purple-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="block text-sm md:text-base hover:text-purple-700">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/Signup" className="block text-sm md:text-base hover:text-purple-700">
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex  items-center bg-gray-100 rounded-md px-2 md:px-4 py-1 md:py-2 w-full max-w-sm">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none flex-grow text-xs md:text-lg text-gray-700"
            />
            <FaSearch className="text-gray-500 text-xs md:text-lg cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <FaHeart className="text-gray-700 hidden md:block text-xs md:text-lg cursor-pointer hover:text-purple-700 transition-transform transform hover:scale-110" />
            <FaShoppingCart className="text-gray-700 hidden md:block text-xs md:text-lg cursor-pointer hover:text-purple-700 transition-transform transform hover:scale-110" />
            <UserProfilePopover />
          </div>
          {/* Sidebar Toggle Button */}
          <button
            className="text-gray-800 md:hidden block text-lg pl-2 md:text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-3/4 md:w-1/4 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 `}
      >
        <div className="flex flex-col p-4">
          {/* Close Button */}
          <button
            className="self-end text-gray-800 text-lg focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          {/* User Profile */}
          <div className="flex items-center gap-4 my-4">
            <img
              src="/images/IMG_1292.jpg" // Replace with a dynamic image source
              alt="User Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-lg font-bold text-gray-800">ZOHAIB ALI</h4>
              <p className="text-sm text-gray-600">zohaibalid@gmail.com</p>
            </div>
          </div>
      <ul className="flex flex-col gap-4 text-gray-700">
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaTachometerAlt className="text-lg" />
    <Link href="/">
      <span>Dashboard</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaUserCircle className="text-lg" />
    <Link href="/About">
      <span>About</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaBox className="text-lg" />
    <Link href="/ProductDetail">
      <span>Products</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaChartLine className="text-lg" />
    <Link href="/">
      <span>Sales</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaCreditCard className="text-lg" />
    <Link href="/">
      <span>Billing</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaHeart className="text-lg" />
    <Link href="/Wishlist">
      <span>Wishlist</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaShoppingCart className="text-lg" />
    <Link href="/Cart">
      <span>Cart</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaTruck className="text-lg" />
    <Link href="/">
      <span>Orders</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaTag className="text-lg" />
    <Link href="/">
      <span>Offers</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaCogs className="text-lg" />
    <Link href="/">
      <span>Settings</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaEnvelope className="text-lg" />
    <Link href="/Contact">
      <span>Contact Support</span>
    </Link>
  </li>
  <li className="flex items-center gap-2 hover:text-purple-700 cursor-pointer">
    <FaUserPlus className="text-lg" />
    <Link href="/Signup">
      <span>Sign up</span>
    </Link>
  </li>
</ul>



        </div>
      </aside>
    </div>
  );
};

export default Navbar;
