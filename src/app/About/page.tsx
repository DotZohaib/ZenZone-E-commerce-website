// pages/our-story.tsx
import { FC } from "react";
import { FaShippingFast, FaHeadset, FaMoneyCheckAlt } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const About: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 sm:px-12 py-12 font-sans">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Our Story
        </h1>
        <p className="text-lg text-gray-600 leading-7 max-w-3xl mx-auto">
          From humble beginnings to a thriving business, we’ve been dedicated to
          delivering top-notch services and ensuring customer satisfaction at
          every step. Explore our story and see how we’ve grown!
        </p>
        <div className="mt-8">
          <img
            src="/images/Buy-And-Sell-PNG-Pic-removebg-preview.png"
            alt="Our Story"
            className="w-full sm:w-2/3 mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
        {[
          { label: "Happy Customers", count: "10.5k", icon: <MdGroups size={50} className="text-red-500" /> },
          { label: "Ongoing Projects", count: "23k", icon: <AiOutlineUsergroupAdd size={50} className="text-blue-500" /> },
          { label: "Sold Products", count: "45.5k", icon: <BiShoppingBag size={50} className="text-green-500" /> },
          { label: "Daily Visitors", count: "25k", icon: <FaShippingFast size={50} className="text-purple-500" /> },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4">{stat.icon}</div>
            <h2 className="text-4xl font-bold text-gray-800">{stat.count}</h2>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Zohaib Ali", role: "Founder & CEO", img: "/images/IMG_1292.jpg" },
            { name: "Iqra ", role: "Managing Director", img: "/images/20230621_110510.jpg" },
            { name: "Anonymous", role: "Sales Manager", img: "/images/FaceApp_1669128908951.jpg" },
          ].map((team, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center border transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={team.img}
                alt={team.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
              <p className="text-gray-600">{team.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <FaShippingFast size={50} className="text-red-500" />, label: "Free Fast Delivery" },
            { icon: <FaHeadset size={50} className="text-blue-500" />, label: "24/7 Customer Support" },
            { icon: <FaMoneyCheckAlt size={50} className="text-green-500" />, label: "Money Back Guarantee" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transform hover:rotate-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <p className="text-lg font-semibold text-gray-600">{feature.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">What Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              name: "Qaisar Nawab Sherazi",
              feedback: "Amazing service! Fast delivery and excellent support.",
              img: "/images/IMG_6341.jpg",
            },
            {
              name: "Ali Ahmed Mughal",
              feedback: "The team is super professional and friendly. Highly recommended!",
              img: "/images/IMG_8755 2_1.jpg",
            },
            {
              name: "Zohaib Dayo",
              feedback: "They truly care about their customers. I'm a loyal fan now.",
              img: "/images/IMG-20231208-WA0006_1.jpg",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center border transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
