import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Attendance Taker", desc: "Secure attendance with QR & admin panel", tech: ["React", "Node", "MongoDB"] },
    { title: "Hostel Grievance", desc: "Complaint tracking system", tech: ["MERN", "Socket.io"] },
    { title: "Sweet Shop", desc: "Inventory & sales dashboard", tech: ["React", "Express"] },
    { title: "Hospital Management System", desc: "To manage and handle Hospital", tech: ["Core Java", "JSP", "Servlet"] }
  ];

  return (
    <section id="projects" className="py-7 ">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
              className="bg-gradient-to-b from-[#0b0b10] to-[#05040a] border border-blue-500/30 rounded-2xl p-8 text-center cursor-pointer 
                         hover:border-blue-400/40 hover:shadow-[0_0_15px_rgba(150,85,247,0.6)] 
                         transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{p.title}</h3>
              <p className="text-gray-300 mb-6">{p.desc}</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-blue-300/10 text-zinc-300 rounded-full border border-blue-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
