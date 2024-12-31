import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} className="h-12 w-auto" alt="logo" />
        

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
            <li><Link to="/mentors" className="hover:text-gray-300">Mentors</Link></li>
            <li><Link to="/testimonials" className="hover:text-gray-300">Testimonials</Link></li>
            <li><Link to="/ContactForm" className="hover:text-gray-300">Contact</Link></li>
          </ul>

          {/* Sign In and Register Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/SignPage"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-purple-900 transition"
            >
              Sign In
            </Link>
            <Link
              to="/SignPage"
              className="px-4 py-2 bg-white text-purple-900 rounded hover:bg-gray-200 transition"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-left space-y-4">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/mentors" onClick={() => setIsMenuOpen(false)}>Mentors</Link></li>
            <li><Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div className="flex flex-col items-left mt-4 space-y-4">
            <Link
              to="/signin"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-purple-900 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-white text-purple-900 rounded hover:bg-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
