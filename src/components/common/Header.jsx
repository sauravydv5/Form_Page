import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoRight from "../../assets/logo-right.png"; // BSMFC Logo
import LogoLeft from "../../assets/logoleft.jpg"; // Bihar Govt Logo
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", link: "/dashboard" },
    {
      name: "About",
      arrow: true,
      subMenu: [
        { name: "Mission", link: "#" },
        { name: "Vision", link: "#" },
      ],
    },
    {
      name: "Downloads",
      arrow: true,
      subMenu: [
        { name: "Forms", link: "#" },
        { name: "Documents", link: "#" },
      ],
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  const handleFrom = () => {
    navigate("/form");
  };

  const handleStatusClick = () => {
    navigate(`/status`);
  };

  return (
    <header className="w-full">
      {/* Top Contact Info */}
      <div className="flex flex-col items-center gap-1 px-4 py-1 text-sm bg-[#372948] md:flex-row md:items-center md:gap-16 md:px-48 text-cyan-300">
        <span className="text-[#39B3E4] font-semibold">
          Call : 0612-2204975
        </span>
        <span className="px-0 md:px-5 font-semibold text-[#39B3E4]">
          Email : minocorpatna@gmail.com
        </span>
      </div>

      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-between px-4 py-3 bg-white md:flex-row md:px-48">
        <div className="flex flex-col items-center space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-4">
          <img src={LogoRight} alt="BSMFC Logo" className="w-24 h-24" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-[#372948]">
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

        <div className="relative flex flex-col items-center mt-2 space-y-2 md:flex-row md:items-start md:mt-0 md:space-y-0 md:space-x-4">
          <img
            src={LogoLeft}
            alt="Bihar Govt Logo"
            className="w-20 h-24 md:mr-72"
          />
          <button
            onClick={handleFrom}
            className="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 md:-translate-y-1 md:-translate-x-28 md:mr-72"
          >
            Apply for Skill Training
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex justify-center w-full bg-[#372948] md:hidden">
        <button
          className="flex items-center justify-center w-full p-3 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`text-white bg-[#372948] ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <ul className="flex flex-col items-center justify-center w-full px-4 py-6 space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.link}
                className="flex items-center justify-center px-4 py-2 font-semibold transition-all border-b-2 border-transparent hover:border-cyan-300 hover:text-cyan-300"
              >
                {item.name}
                {item.arrow && <ChevronDown size={14} className="ml-1" />}
              </a>

              {/* Sub-menu */}
              {item.subMenu && (
                <ul className="absolute left-0 z-50 hidden w-48 py-2 mt-1 bg-[#372948] rounded shadow-lg top-full group-hover:block">
                  {item.subMenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center justify-between px-4 py-2 font-semibold hover:bg-[#2a2033]"
                    >
                      <a href={sub.link}>{sub.name}</a>
                      <ChevronRight size={12} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Your Status Button */}
          <li>
            <button
              onClick={handleStatusClick}
              className="px-4 py-2 font-semibold text-white transition-all bg-indigo-600 border-b-2 border-transparent rounded hover:border-indigo-500 hover:text-indigo-300 hover:bg-indigo-700"
            >
              Your Status
            </button>
          </li>

          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-2 font-semibold text-white transition-all translate-x-32 bg-red-600 border-b-2 border-transparent rounded hover:border-red-500 hover:text-red-300 hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
