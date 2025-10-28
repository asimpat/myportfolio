import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { contact } from "./data";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-900 shadow-xl z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
        {/* Logo/Name */}
        <h1 className="text-2xl font-raleway font-bold text-white">
          Asim<span className="text-orange-500">Patrick</span>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-300 font-medium font-raleway">
          <li>
            <a
              href="#home"
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-orange-500 transition duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-orange-500 transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-orange-500 transition duration-200"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-500 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] p-2 rounded-lg border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-gray-300 text-lg group-hover:text-orange-500 transition-colors" />
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] p-2 rounded-lg border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
            aria-label="Twitter"
          >
            <FaTwitter className="text-gray-300 text-lg group-hover:text-orange-500 transition-colors" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a0a0a] p-2 rounded-lg border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <FaGithub className="text-gray-300 text-lg group-hover:text-orange-500 transition-colors" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col space-y-4 p-6 text-gray-300 font-medium font-raleway">
            <li>
              <a
                href="#home"
                onClick={toggleMobileMenu}
                className="block hover:text-orange-500 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={toggleMobileMenu}
                className="block hover:text-orange-500 transition duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMobileMenu}
                className="block hover:text-orange-500 transition duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={toggleMobileMenu}
                className="block hover:text-orange-500 transition duration-200"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMobileMenu}
                className="block hover:text-orange-500 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-4 pb-6 px-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] p-3 rounded-lg border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-300 text-xl hover:text-orange-500 transition-colors" />
            </a>
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] p-3 rounded-lg border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-gray-300 text-xl hover:text-orange-500 transition-colors" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] p-3 rounded-lg border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-gray-300 text-xl hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
