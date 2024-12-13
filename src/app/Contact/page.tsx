// pages/contact.tsx
import { FC } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Contact: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 sm:px-16">
      {/* Breadcrumb */}
      <div className="text-gray-600 mb-8 text-sm">
        <a href="/" className="hover:underline text-gray-800">Home</a> / <span>Contact</span>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Call To Us</h2>
          <div className="flex items-center mb-4">
            <FiPhoneCall className="text-red-500 text-3xl mr-4" />
            <p className="text-gray-600">
              We are available 24/7, 7 days a week. <br />
              Phone: <span className="font-semibold">+88011112222</span>
            </p>
          </div>
          <hr className="my-6 border-gray-200" />
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Write To Us</h2>
          <div className="flex items-start">
            <FiMail className="text-blue-500 text-3xl mr-4" />
            <div>
              <p className="text-gray-600 mb-2">
                Fill out our form, and we will contact you within 24 hours.
              </p>
              <p className="text-gray-600">
                Email 1: <a href="mailto:customer@exclusive.com" className="text-blue-500 hover:underline">customer@exclusive.com</a>
              </p>
              <p className="text-gray-600">
                Email 2: <a href="mailto:support@exclusive.com" className="text-blue-500 hover:underline">support@exclusive.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                required
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
