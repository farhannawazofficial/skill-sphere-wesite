const Hero = () => {
    return (
      <main className="container mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Advance your engineering skills with our courses
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Build skills with our courses and mentors from world-class companies.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-x-4">
          <div className="flex space-x-2 items-center">
            <img src="/mentor1.jpg" alt="Mentor 1" className="w-10 h-10 rounded-full" />
            <img src="/mentor2.jpg" alt="Mentor 2" className="w-10 h-10 rounded-full" />
            <img src="/mentor3.jpg" alt="Mentor 3" className="w-10 h-10 rounded-full" />
          </div>
          <div className="text-gray-800 text-lg mt-4 md:mt-0">
            <span className="font-semibold">4.6 ★★★★☆</span> <span>Rated by 25k on Google</span>
          </div>
        </div>
      </main>
    );
  };
  
  export default Hero;
  