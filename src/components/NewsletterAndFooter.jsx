import React from "react";

const NewsletterAndFooter = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Get the latest updates, news, and exclusive offers straight to your
            inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/2 px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
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
                support@example.com
              </li>
              <li className="mb-2">
                <span className="font-bold">Phone:</span> +123-456-7890
              </li>
              <li className="mb-2">
                <span className="font-bold">Address:</span> 123 Main Street,
                Karachi, Pakistan
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsletterAndFooter;
