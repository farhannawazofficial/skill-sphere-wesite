import React from "react";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-50 text-center py-10 px-4 sm:py-16">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">
        Advance your engineering skills with our courses
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8">
        Build skills with our courses and mentor from world-class companies.
      </p>
      {/* Icons */}
      <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
        <img src="/path-to-java.png" alt="Java" className="h-12 w-12 sm:h-16 sm:w-16" />
        <img src="/path-to-python.png" alt="Python" className="h-12 w-12 sm:h-16 sm:w-16" />
        <img src="/path-to-android.png" alt="Android" className="h-12 w-12 sm:h-16 sm:w-16" />
        <img src="/path-to-vscode.png" alt="VS Code" className="h-12 w-12 sm:h-16 sm:w-16" />
      </div>
      {/* Ratings */}
      <div className="flex justify-center items-center space-x-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <span className="text-lg sm:text-xl font-semibold">4.6</span>
        <span className="text-gray-600 text-sm sm:text-base">
          Rated by 25k on Google
        </span>
      </div>
    </section>
  );
};

export default Hero;
