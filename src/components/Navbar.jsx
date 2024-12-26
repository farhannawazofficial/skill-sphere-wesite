const Navbar = () => {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-purple-600 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full">
              Si
            </div>
            <span className="text-xl font-bold">Skill Institute</span>
          </div>
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-purple-600">Home</a>
            <a href="#" className="hover:text-purple-600">Courses</a>
            <a href="#" className="hover:text-purple-600">Mentors</a>
            <a href="#" className="hover:text-purple-600">Testimonial</a>
            <a href="#" className="hover:text-purple-600">Join</a>
            <a href="#" className="hover:text-purple-600">Contact Us</a>
          </nav>
          <div className="space-x-4">
            <a href="#" className="px-4 py-2 bg-purple-600 text-white rounded-md">Sign In</a>
            <a href="#" className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md">Register</a>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  