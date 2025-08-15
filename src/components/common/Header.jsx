import React, { useState } from "react";
import LogoRight from "../../assets/logo-right.png"; // BSMFC Logo
import LogoLeft from "../../assets/logoleft.jpg"; // Bihar Govt Logo
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#" },
    {
      name: "About",
      arrow: true,
      subMenu: [
        { name: "Mission", link: "#" },
        { name: "Vision", link: "#" },
      ],
    },
    {
      name: "Schemes",
      arrow: true,
      subMenu: [
        { name: "Scheme 1", link: "#" },
        { name: "Scheme 2", link: "#" },
      ],
    },
    {
      name: "RTI",
      arrow: true,
      subMenu: [
        { name: "RTI 1", link: "#" },
        { name: "RTI 2", link: "#" },
      ],
    },
    {
      name: "BSMFC Database",
      arrow: true,
      subMenu: [
        { name: "Database 1", link: "#" },
        { name: "Database 2", link: "#" },
      ],
    },
    {
      name: "Contact",
      arrow: true,
      subMenu: [
        { name: "Contact 1", link: "#" },
        { name: "Contact 2", link: "#" },
      ],
    },
    { name: "FAQs", link: "#" },
    {
      name: "Download",
      arrow: true,
      subMenu: [
        { name: "Forms", link: "#" },
        { name: "Documents", link: "#" },
      ],
    },
    { name: "Gallery", link: "#" },
    { name: "Career", badge: "NEW", link: "#" },
    { name: "Tenders", link: "#" },
  ];

  return (
    <header className="w-full">
      {/* Top Contact Info */}
      <div className="flex flex-col items-center gap-2 px-4 py-2 text-sm bg-blue-800 sm:items-start sm:flex-row sm:gap-16 sm:px-48 text-cyan-300">
        <span className="text-[#39B3E4] font-semibold">
          Call : 0612-2204975
        </span>
        <span className="px-0 sm:px-5 font-semibold text-[#39B3E4]">
          Email : minocorpatna@gmail.com
        </span>
      </div>

      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-between px-4 py-3 bg-white sm:flex-row sm:px-48">
        {/* Left side: Main Logo + Title */}
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-4">
          <img src={LogoRight} alt="BSMFC Logo" className="w-24 h-24" />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold text-blue-800">
              Bihar State Minorities Financial
              <br /> Corporation Ltd.
            </h1>
            <p className="text-sm font-semibold">
              (Minority Welfare Department, Govt. of Bihar)
            </p>
            <p className="text-xs font-semibold text-blue-700">
              Abdul Qayyum Memorial Bhawan, 34, Harding Road, Patna - 800001.
            </p>
          </div>
        </div>

        {/* Right side: Button + Govt Logo */}
        <div className="relative flex flex-col items-center mt-2 space-y-2 sm:flex-row sm:items-start sm:mt-0 sm:space-y-0 sm:space-x-4">
          <img
            src={LogoLeft}
            alt="Bihar Govt Logo"
            className="w-20 h-24 sm:mr-72"
          />
          <button className="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 sm:-translate-y-1 sm:-translate-x-28 sm:mr-72">
            Apply for Skill Training
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex justify-center w-full bg-blue-800 sm:hidden">
        <button
          className="flex items-center justify-center w-full p-3 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`text-white bg-blue-800 transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        <ul className="flex flex-col items-center justify-center w-full px-4 py-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          {menuItems.map((item, index) => (
            <li key={index} className="relative text-center group">
              <a
                href={item.link}
                className="flex items-center justify-center px-4 py-2 font-semibold transition-all border-b-2 border-transparent hover:border-blue-500 hover:text-green-300"
              >
                {item.name}
                {item.arrow && <ChevronDown size={14} className="ml-1" />}
                {item.badge && (
                  <span className="px-1 ml-1 text-xs text-white bg-red-600 rounded">
                    {item.badge}
                  </span>
                )}
              </a>

              {/* Submenu */}
              {item.subMenu && (
                <ul className="absolute left-0 z-50 hidden w-48 py-2 mt-1 bg-blue-800 rounded shadow-lg group-hover:block">
                  {item.subMenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center justify-between px-4 py-2 font-semibold hover:bg-blue-700"
                    >
                      <a href={sub.link}>{sub.name}</a>
                      <ChevronRight size={12} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
