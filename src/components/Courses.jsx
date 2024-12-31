import React, { useState } from "react";

const coursesData = [
  {
    id: 1,
    title: "HTML, CSS, Javascript Development",
    category: "Web Development",
    price: "$40",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo",
    classes: 12,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Backend with Node.js and Express.js",
    category: "Web Development",
    price: "$21",
    image: "https://www.freecodecamp.org/news/content/images/2021/04/nodeexpress.png",
    classes: 12,
    rating: 4.5,
  },
  {
    id: 3,
    title: "Learn MongoDB with Mongoose",
    category: "Database",
    price: "$21",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*ty8m8Y3dzgD6P5Xc17gbYw.jpeg",
    classes: 12,
    rating: 4.5,
  },
  {
    id: 4,
    title: "Learn English Language",
    category: "English Language",
    price: "$99",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGodba7FQwpKA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697613429703?e=2147483647&v=beta&t=VkOVusZ8yqYrVg1-0hnWUBECUakFtwE8Ez3f963UUcM",
    classes: 12,
    rating: 4.5,
  },
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories =  ["All", "Web Development", "English Language"];

  const filteredCourses =
    selectedCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <section className="p-8">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-3xl font-bold">Popular Courses</h2>
        <button className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800">
          Explore Classes
        </button>
      </div>

      {/* Categories Filter */}
      <div className="flex space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-purple-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{course.category}</p>
              <p className="text-lg font-semibold text-purple-700">{course.price}</p>
              <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>{course.classes} Classes</span>
                <span>⭐ {course.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
