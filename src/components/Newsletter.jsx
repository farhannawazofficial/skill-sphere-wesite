import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Newsletter = () => {
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
              className="bg-[#5bbacc] hover:bg-[#03adcd] text-black px-6 py-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
