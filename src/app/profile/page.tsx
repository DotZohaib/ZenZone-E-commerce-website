"use client";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "Zohaib",
    lastName: "Ali",
    email: "zohaibali@gmail.com",
    address: "Kingston, 5235, United States",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSaveChanges = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span>Home / </span>
          <span className="font-semibold">My Account</span>
        </div>

        {/* Main Layout */}
        <div className="flex flex-wrap gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Manage My Account</h2>
            <ul className="space-y-4">
              <li className="text-red-500 font-medium flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-red-500" />
                My Profile
              </li>
              <li className="text-gray-500 flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-gray-400" />
                Address Book
              </li>
              <li className="text-gray-500 flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-gray-400" />
                My Payment Options
              </li>
            </ul>
            <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-4">My Orders</h2>
            <ul className="space-y-4">
              <li className="text-gray-500 flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-gray-400" />
                My Returns
              </li>
              <li className="text-gray-500 flex items-center gap-2 hover:text-red-500 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-gray-400" />
                My Cancellations
              </li>
            </ul>
            <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-4">My Wishlist</h2>
          </aside>

          {/* Profile Form */}
          <div className="flex-1 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Your Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  className="mt-1 py-2 px-5 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  className="mt-1 py-2 px-5 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="mt-1 py-2 px-5 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  className="mt-1 py-2 px-5 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">Password Changes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full py-2 px-5 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full py-2 px-5 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full py-2 px-5 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Save Message */}
        {showMessage && (
          <div
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            role="alert"
          >
            <FaCheckCircle className="w-6 h-6" />
            <span>Changes saved successfully!</span>
            <button onClick={() => setShowMessage(false)}>
              <FaTimesCircle className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
