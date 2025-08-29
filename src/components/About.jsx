
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text Section */}
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold text-neon mb-6"
            >
              About
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-8"
            >
              I'm a software engineer specializing in the MERN stack. I love building interactive, responsive, and user-friendly interfaces that solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg mb-8"
            >
              With over 1 years of experience, I've worked to make complex web applications. My approach combines technical excellence with creative problem-solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Java'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 rounded-full text-gray-200 text-sm font-medium border border-blue-600/30 "
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Roles Card Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 transform hover:scale-[1.02] transition-transform duration-300">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Shayo!
                </h1>
                <div className="w-20 h-1 bg-indigo-300 mx-auto rounded-full mb-4"></div>
                <p className="text-indigo-100 text-lg font-light">
                  work together to bring your ideas to life!
                </p>
              </div>

              {/* Roles List */}
              <div className="py-8 px-6">
                <div className="space-y-4">
                  {['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer'].map((role, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 transition-all hover:bg-gray-600 hover:shadow-lg hover:border-indigo-400"
                    >
                      <div className="w-3 h-3 bg-neon rounded-full mr-4"></div>
                      <span className="text-gray-100 font-medium">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gray-800 py-4 text-center border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Let's create something amazing!!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}