import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

export default function App() {
  return (
    <div className="bg-[#07060a] text-white min-h-screen">
      <Navbar />
      <main className="pt-20  bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
