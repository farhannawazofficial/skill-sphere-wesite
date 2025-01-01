import React from "react";
import heroBg from "../assets/images/background.png"; 

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
        Advance your engineering skills with our courses
      </h1>
      <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
        Build skills with our courses and mentor from world-class companies.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-[#5bbacc] text-black rounded-lg shadow-md hover:bg-[#03adcd]">
          Get Started
        </button>
        <button className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
