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
    {
      name: "Career",
      badge: "NEW",
      link: "#",
    },
    { name: "Tenders", link: "#" },
  ];

  return (
    <header className="w-full">
      {/* Top Contact Info */}
      <div className="flex items-start gap-16 px-48 py-2 text-sm bg-blue-800 text-cyan-300">
        <span className="text-[#39B3E4] -translate-y-1 font-semibold">
          Call : 0612-2204975
        </span>
        <span className="px-5 font-semibold -translate-y-1 text-[#39B3E4]">
          Email : minocorpatna@gmail.com
        </span>
      </div>

      {/* Logo and Title */}
      <div className="flex items-center justify-between px-48 py-3 bg-white">
        {/* Left side: Main Logo + Title */}
        <div className="flex items-center space-x-4">
          <img src={LogoRight} alt="BSMFC Logo" className="w-24 h-24" />
          <div>
            <h1 className="flex items-center gap-1 text-3xl font-semibold text-blue-800">
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
        <div className="relative flex items-center space-x-4">
          <img
            src={LogoLeft}
            alt="Bihar Govt Logo"
            className="w-20 h-24 mr-64"
          />
          <button className="px-4 py-2 font-semibold text-white transition bg-green-500 rounded-md -translate-y-9 -translate-x-28 mr-72 hover:bg-green-600">
            Apply for Skill Training
          </button>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-0 p-2 text-blue-800 rounded md:hidden hover:bg-gray-100 top-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="text-white bg-blue-800">
        <ul
          className={`flex-col md:flex-row md:flex items-center justify-center px-4 py-6 md:py-6 space-y-4 md:space-y-0 md:space-x-0 transition-all duration-300 ${
            isMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className="relative px-3 cursor-pointer group">
                <div className="flex items-center gap-1 font-semibold hover:text-green-300">
                  {item.name}
                  {item.arrow && <ChevronDown size={14} />}
                  {item.badge && (
                    <span className="px-1 ml-1 text-xs text-white bg-red-600 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Sub-menu */}
                {item.subMenu && (
                  <ul className="absolute left-0 z-50 hidden w-48 py-2 mt-1 bg-blue-800 rounded shadow-lg top-full group-hover:block">
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

              {/* Vertical separator line */}
              {index !== menuItems.length - 1 && (
                <span className="hidden h-4 mx-1 border-l border-green-500 md:block"></span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
}
