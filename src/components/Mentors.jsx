import React from "react";

const mentors = [
  {
    name: "Shoo Thar Mein",
    role: "Senior UX Designer",
    img: "https://media.istockphoto.com/id/1452895487/photo/portrait-of-a-charming-business-woman-in-the-office.jpg?s=612x612&w=0&k=20&c=fZAe285E2Tq-9dtvSygGZe90NTRK8LN4cGqTrAmKmEo=", // Replace with the correct image path
  },
  {
    name: "Cristian Doru Barin",
    role: "Photoshop Instructor",
    img: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=", // Replace with the correct image path
  },
  {
    name: "Tanzeel Ur Rehman",
    role: "SEO Expert",
    img: "https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg", // Replace with the correct image path
  },
  {
    name: "Andrew Williams",
    role: "UI/UX Designer",
    img: "https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png", // Replace with the correct image path
  },
  {
    name: "Brad Schiff",
    role: "Web Development / Web Design",
    img: "https://media.istockphoto.com/id/1360063450/photo/headshot-profile-picture-young-businessman-sit-in-kitchen-webcam-view.jpg?s=612x612&w=0&k=20&c=6DoR9bff-RQ5N31LV_tQPsj_hT1HPxGAIn07mLkLxgc=", // Replace with the correct image path
  },
  {
    name: "Daniel Walter Scott",
    role: "Adobe Certified Instructor",
    img: "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=", // Replace with the correct image path
  },
];

const Mentors = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Meet with our Mentors
          </h2>
          <div className="text-right">
            <button className="bg-[#5bbacc] text-black px-6 py-2 rounded hover:bg-[#03adcd]">
              Explore 10+ our Mentor
            </button>
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image Section */}
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-56 object-cover"
              />
              {/* Text Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                <p className="text-gray-500">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
