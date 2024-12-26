// src/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <div className="flex items-center  h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Skill Sphere</span>
          </div>
          <div className="hidden md:flex flex justify-between space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-500">Courses</a>
            <a href="#mentors" className="text-gray-700 hover:text-blue-500">Mentors</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonials</a>
            <a href="#join" className="text-gray-700 hover:text-blue-500">Join</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact Us</a>
            <a href="#signin" className="text-gray-700 hover:text-blue-500">Sign In</a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#courses" className="block text-gray-700 hover:text-blue-500">Courses</a>
          <a href="#mentors" className="block text-gray-700 hover:text-blue-500">Mentors</a>
          <a href="#testimonials" className="block text-gray-700 hover:text-blue-500">Testimonials</a>
          <a href="#join" className="block text-gray-700 hover:text-blue-500">Join</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact Us</a>
          <a href="#signin" className="block text-gray-700 hover:text-blue-500">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
