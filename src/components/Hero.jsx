import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope,FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="text-neon">Shailesh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl mt-4 text-blue-500/60">
              <Typewriter
                words={[
                  "MERN Stack Developer.",
                  "Frontend Developer.",
                  "SoftWare Developer.",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>

            <p className="mt-6 text-zinc-200 max-w-lg ">
              I build performant, accessible web apps with beautiful UI and
              smooth animations.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
            
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-106"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:example@gmail.com"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 text-white hover:scale-106"
              >
                <FaEnvelope size={20} />
              </a>

              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-black hover:scale-106"
              >
                <SiLeetcode size={20} />
              </a>
                <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 hover:scale-106 "
            >
              <FaTwitter size={20} />
            </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-106"
              >
                <FaGithub size={20} />
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-blue-600/30 hover:bg-gray-600/30 transition  font-semibold transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-blue-600/30  hover:bg-gray-600/30 transition font-semibold"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={profile}
            alt="profile"
            className="w-72 h-72 rounded-full object-cover 
               border-[3px] border-blue-500/50 
               shadow-lg hover:shadow-[0_0_40px_rgba(69,130,246,0.7)] 
               transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
