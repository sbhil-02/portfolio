import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link.toLowerCase());
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border border-blue-400/30 ${scrolled
        ? "bg-gray-900 backdrop-blur-md py-2 "
        : "bg-gray-900 py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto px-1 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-6.5 h-6 rounded-md bg-gradient-to-br from-blue-500 to-teal-400 shadow-lg flex items-center justify-center">
            <span className="font-bold text-gray-900">S</span>
          </div>
          <div className="font-bold text-lg tracking-wide text-white"> | Shailesh</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <ScrollLink
              key={l}
              to={l.toLowerCase()} // Match section ID
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`relative group cursor-pointer text-gray-300 hover:text-white text-sm font-[Playfair Display] tracking-wider transition-colors ${activeLink === l.toLowerCase() ? "text-white" : ""
                }`}
              onClick={() => handleLinkClick(l)}
            >
              {l}
              {/* Blue underline hover animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              {activeLink === l.toLowerCase() && (
                <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-500 w-full"></span>
              )}
            </ScrollLink>
          ))}

         
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-300 hover:text-white"
          >
            <span className="text-2xl text-white">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-br from-gray-900 to-black backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <ScrollLink
                key={l}
                to={l.toLowerCase()} // Match section ID
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleLinkClick(l)}
                className={`relative group py-3 cursor-pointer text-gray-300 hover:text-white uppercase border-b border-gray-800 ${activeLink === l.toLowerCase() ? "text-white" : ""
                  }`}
              >
                {l}
                <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                {activeLink === l.toLowerCase() && (
                  <span className="absolute left-0 bottom-2 h-[2px] bg-blue-500 w-full"></span>
                )}
              </ScrollLink>
            ))}

            {/* Social Icons in Mobile Menu */}
            <div className="flex gap-4 pt-4 relative z-50">
              <a
                href="https://www.linkedin.com/in/shailesh-bhil-272359259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110 cursor-pointer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/sbhil-02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110 cursor-pointer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://leetcode.com/u/shayo_02/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-transform transform hover:scale-110 cursor-pointer"
              >
                <SiLeetcode size={20} />
              </a>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}
