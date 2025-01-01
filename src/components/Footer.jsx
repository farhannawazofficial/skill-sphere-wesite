import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">About Us</h4>
            <p>
              We provide world-class educational services, helping students
              achieve their goals with ease and excellence.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2 hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#courses">Courses</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#mentors">Mentors</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2">
                <span className="font-bold">Email:</span>{" "}
                skillssphere777@gmail.com
              </li>
              <li className="mb-2">
                <span className="font-bold">Phone:</span> +92 308 2437671
                <br />
                <span className="font-bold">Phone:</span> 
                +92 303 4569807
              </li>
             
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100093864674118&mibextid=ZbWKwL"
                className="hover:text-white transition-colors duration-300"
                target='_blank'
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
                target='_blank'
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.instagram.com/skills_sphere"
                className="hover:text-white transition-colors duration-300"
                target='_blank'
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Created by Farhan Nawaz. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
