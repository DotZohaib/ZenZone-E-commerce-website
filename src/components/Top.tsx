'use client';
import { useState } from "react";

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-black sticky top-0 z-10">
        <div className="flex items-center text-center px-4 py-2">
          {/* Sale Announcement */}
          <div className="text-center flex-grow">
            <p className="text-white text-[7px] md:text-xs">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
              <a href="#" className="underline pl-2 text-yellow-400 hover:text-yellow-500">
                Shop Now
              </a>
            </p>
          </div>

          {/* Language Selector */}
          <div className="relative md:mt-0 z-50 ">
            <button
              onClick={toggleDropdown}
              className="text-white px-1 md:px-4 md:py-2 py-1 text-[7px] md:text-xs  rounded-md focus:outline-none"
            >
              {selectedLanguage} <span className="ml-1">▼</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Top;
