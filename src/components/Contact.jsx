import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-start">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[500px] border-[.1px] border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-lg flex flex-col justify-between"
        >
          {/* Contact Form */}
          <div>
            <h2 className="text-5xl font-bold mb-6 text-center">Contact.</h2>
            <form className="space-y-6 mt-3">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="What's your good name?"
                  className="w-full p-3 rounded bg-transparent border-[.2px] border-blue-400/30 placeholder-gray-500 focus:outline-none "
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="What's your web address?"
                  className="w-full p-3 rounded bg-transparent border border-blue-400/30 placeholder-gray-500 focus:outline-none "
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Your Message</label>
                <textarea
                  placeholder="What you want to say?"
                  rows="5"
                  className="w-full p-3 rounded bg-transparent border border-blue-400/30 placeholder-gray-500 resize-none focus:outline-none  "
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600/30 hover:bg-blue-800/30 rounded font-semibold transition hover:scale-110"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
