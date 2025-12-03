import React, { useState } from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { FiMenu, FiX, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Detect if #projects is active
  const isProjectsActive = location.hash === "#projects";

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
    exit: {
      x: "100%",
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <>
      {/* Navbar Wrapper */}
      <div className="w-full sticky top-0 z-50 px-4 flex justify-center h-20 bg-transparent">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl bg-zinc-800 rounded-full mt-4 px-5 py-3 text-white flex items-center justify-between"
        >
          {/* Brand */}
          <motion.div
            className="flex gap-px px-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {"Vishal".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3 },
                  },
                }}
                className="text-xl font-bold"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-1/2 justify-center space-x-7 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>

            <HashLink
              smooth
              to="/#projects"
              className={
                isProjectsActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              Projects
            </HashLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              Resume
            </NavLink>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a
              href="mailto:vishall.patil0111@gmail.com"
              target="_blank"
              className="px-3 py-2 bg-yellow-300 text-black rounded-full font-semibold flex items-center gap-1 text-sm"
            >
              Contact me
              <span className="text-xl transition-transform -rotate-30 hover:rotate-15">
                <FaRegSmileBeam />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden fixed right-8 gap-1 items-center text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>
        </motion.div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-72 h-full bg-zinc-900 text-white p-6 z-50 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Menu</h1>
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-5 text-lg font-semibold">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }
              >
                Home
              </NavLink>

              <HashLink
                smooth
                to="/#projects"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-300"
              >
                Projects
              </HashLink>

              <NavLink
                to="/resume"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }
              >
                Resume
              </NavLink>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-xl mt-6 border-t border-zinc-700 pt-6">
              <a
                href="https://github.com/Vishalpatil0111"
                className="hover:text-yellow-300"
              >
                <FiGithub />
              </a>
              <a
                href="https://x.com/ivishalpatil01"
                className="hover:text-yellow-300"
              >
                <FiX />
              </a>
              <a
                href="https://www.linkedin.com/in/vishalpatil0111/"
                className="hover:text-yellow-300"
              >
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
