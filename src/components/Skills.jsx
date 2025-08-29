import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaJsSquare
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

export default function Skills() {
  const icons = [
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
    { icon: <FaReact color="#61DAFB" />, label: "React" },
    { icon: <FaNodeJs color="#339933" />, label: "Node" },
    { icon: <FaDatabase color="#4DB33D" />, label: "MongoDB" },
    { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript" },
    { icon: <SiTailwindcss color="#06B6D4" />, label: "Tailwind CSS" },
    { icon: <SiMysql color="#4479A1" />, label: "MySQL" },
    { icon: <FaJava color="#007396" />, label: "Java" }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="skills" className="py-20  text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Skills
        </motion.h2>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {icons.map((it, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="w-28 h-28 rounded-xl bg-[#0b0b10] flex flex-col items-center justify-center text-4xl cursor-pointer shadow-lg shadow-blue-500/20 border border-blue-500/30"
              style={{ minWidth: "120px" }}
            >
              <div>{it.icon}</div>
              <div className="text-xs text-gray-300 mt-2">{it.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
