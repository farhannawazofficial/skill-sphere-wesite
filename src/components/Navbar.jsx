import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Si</div>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
          <li><Link to="/mentors" className="hover:text-gray-300">Mentors</Link></li>
          <li><Link to="/testimonials" className="hover:text-gray-300">Testimonials</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-14 left-0 w-full bg-purple-900 flex flex-col items-center space-y-4 py-4 md:hidden">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/mentors" onClick={() => setIsMenuOpen(false)}>Mentors</Link></li>
            <li><Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        )}
        <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 bg-transparent border border-white rounded hover:bg-white hover:text-purple-900">
          Sign In
        </button>
        <button className="px-4 py-2 bg-white text-purple-900 rounded hover:bg-gray-200">
          Register
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
