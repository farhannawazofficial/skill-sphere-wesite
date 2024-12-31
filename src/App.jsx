import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Mentors from "./components/Mentors";
// import Testimonials from "./components/Testimonials";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <><Hero /> <Courses /> <Mentors />  </> } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentors" element={<Mentors />} />
        {/* <Route path="/mentors" element={ <Testimonials />} /> */}
      </Routes>
    </>
  );
};

export default App;
