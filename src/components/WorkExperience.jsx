import React from "react";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Sparks To Ideas",
      date: "July 2025 – July 2025",
      details: [
        "Completed a 15-day internship focused on full-stack development.",
        "Worked on real-time projects, RESTful APIs, database integration, and UI design."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "1 Stop",
      date: "June 2023 – July 2023",
      details: [
        "Developed a supervised ML pipeline for hate speech detection on social media content."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg- text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Work Experience.
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-16 border-l-4 border-blue-500/30">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 ml-6"
            >
              {/* Circle marker */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/80">
                <span className="w-4 h-4 bg-[#0b0b10] rounded-full"></span>
              </span>

              {/* Card */}
              <div className="bg-transparent border border-blue-400/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer 
                         hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(150,85,247,0.6)]">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-900 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.date}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
