'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br  min-h-screen flex items-center justify-center px-4 md:px-8">
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 max-w-6xl w-full bg-white bg-opacity-90 rounded-lg shadow-xl p-8 md:p-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-600 h-6 w-2"></span>
            <h3 className="text-2xl font-bold text-red-700 uppercase tracking-wide">Today&apos;s</h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">New Stock Category</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-10">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/images/newsletter.png"
              alt="Speaker"
              className="w-full max-w-sm rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left">
            <p className="text-green-600 text-lg mb-2 font-semibold">Categories</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              Enhance Your Music Experience
            </h1>
            <p className="text-gray-700 text-base mt-4 mb-6">
              Discover the ultimate sound quality with our newly launched products. Don’t miss out on these amazing offers.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center md:justify-start gap-4 mb-6">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, idx) => (
                <div
                  key={unit}
                  className="bg-gray-900 text-white rounded-lg shadow p-4 w-20 text-center"
                >
                  <span className="block text-2xl font-bold">
                    {idx === 0
                      ? timeLeft.days
                      : idx === 1
                      ? timeLeft.hours
                      : idx === 2
                      ? timeLeft.minutes
                      : timeLeft.seconds}
                  </span>
                  <span className="text-gray-300 text-sm">{unit}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 text-white font-semibold text-lg py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/Cart">Buy Now!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
