import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andrew Williams",
      role: "UI/UX Designer",
      feedback:
        "I have been a Junior Graphic Designer for more than 10 years. This course is so great!",
      image: "https://marketplace.canva.com/EAF21qlw744/1/0/1600w/canva-blue-modern-facebook-profile-picture-mtu4sNVuKIU.jpg", // Replace with actual image URLs
    },
    {
      name: "Andrew Williams",
      role: "UI/UX Designer",
      feedback:
        "I have been a Junior Graphic Designer for more than 10 years. This course is so great!",
      image: "https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg", // Replace with actual image URLs
    },
    {
      name: "Andrew Williams",
      role: "UI/UX Designer",
      feedback:
        "I have been a Junior Graphic Designer for more than 10 years. This course is so great!",
      image: "https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg", // Replace with actual image URLs
    },
    {
      name: "Cristian Doru Barin",
      role: "Photoshop Instructor",
      feedback:
        "Some things are problems that I had and teach how to solve them. Excellent mentor!",
      image: "https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg", // Replace with actual image URLs
    },
    {
      name: "Tanzeel Ur Rehman",
      role: "SEO Expert",
      feedback:
        "This course helped me grow as an SEO expert. Amazing platform!",
      image: "https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg", // Replace with actual image URLs
    },
    {
      name: "Brad Schiff",
      role: "Web Developer",
      feedback:
        "This platform is the perfect place to start your career. Great mentors and courses!",
      image: "https://cdn.prod.website-files.com/639ff8596ae419fae300b099/641017314cc67fbb88c517a7_good-linkedin-profile-photo-right-expression-1000x1000.jpeg", // Replace with actual image URLs
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalDots = 2; // Number of dots
  const itemsPerDot = Math.ceil(testimonials.length / totalDots);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalDots - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalDots]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Happy Students Say
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Build skills with our courses and mentors from world-class companies.
        </p>

        {/* Testimonials Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array(totalDots)
              .fill(0)
              .map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className="flex flex-none w-full space-x-4 justify-center"
                >
                  {testimonials
                    .slice(
                      dotIndex * itemsPerDot,
                      (dotIndex + 1) * itemsPerDot
                    )
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className="flex-none w-1/3 md:w-1/4 text-center bg-white rounded-lg shadow-md p-6 mx-4"
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-600 italic mb-4">
                          "{testimonial.feedback}"
                        </p>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {Array(totalDots)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full mx-1 transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-purple-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
