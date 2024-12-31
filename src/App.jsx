import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Mentors from "./components/Mentors";
import Testimonials from "./components/Testimonials";
import NewsletterAndFooter from "./components/NewsletterAndFooter";
import ContactForm from "./components/ContactForm";
import SignPage from "./components/SignPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <><Hero /> <Courses /> <Mentors /> <Testimonials />  </> } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/testimonials" element={ <Testimonials />} />
        <Route path="/ContactForm" element={ <ContactForm />} />
        <Route path="/SignPage" element={ <SignPage />} />
      </Routes>
      <NewsletterAndFooter />
    </>
  );
};

export default App;
