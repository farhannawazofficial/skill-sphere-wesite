import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Add this if autoplay requires specific styles
import { Pagination } from "swiper";

const testimonials = [
  {
    name: "Andrew Williams",
    role: "UX/UI Designer",
    review:
      "I have been a Junior Graphic Designer for more than 10 years. Some things are problems that I had and teach how to solve them. That's why this course is so great!",
    img: "path-to-andrew-image.jpg", // Replace with the correct image path
    stars: 5,
  },
  {
    name: "Cristian Doru Barin",
    role: "Photoshop Instructor",
    review:
      "I have been a Junior Graphic Designer for more than 10 years. Some things are problems that I had and teach how to solve them. That's why this course is so great!",
    img: "path-to-cristian-image.jpg", // Replace with the correct image path
    stars: 5,
  },
  {
    name: "Tanzeel Ur Rehman",
    role: "UX/UI Designer",
    review:
      "I have been a Junior Graphic Designer for more than 10 years. Some things are problems that I had and teach how to solve them. That's why this course is so great!",
    img: "path-to-tanzeel-image.jpg", // Replace with the correct image path
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What Our Happy Students Say</h2>
          <p className="text-gray-500">
            Build skills with our courses and mentor from world-class companies.
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
                <div className="flex justify-center my-2">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                </div>
                <p className="text-gray-600 mt-2">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Review Button */}
        <div className="text-right mt-6">
          <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded hover:bg-purple-700 hover:text-white">
            Give Your Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
