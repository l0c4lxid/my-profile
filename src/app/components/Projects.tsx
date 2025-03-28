import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="projects"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ClipboardIcon className="h-8 w-8 mr-2 text-indigo-600" />
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Project Card 1 */}
          <motion.div
            className={`card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50">
                  View Project
                </span>
              </div>
              <CodeBracketIcon className="h-16 w-16 text-white opacity-80" />
              {/* Uncomment to use actual image
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              */}
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span>Web Application</span>
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                React
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              A responsive web application built with React and Node.js that
              helps users manage their daily tasks and increase productivity.
            </p>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className={`flex items-center ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } hover:underline`}
              >
                <span>View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={`flex items-center ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } hover:underline`}
              >
                <span>GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className={`card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50">
                  View Project
                </span>
              </div>
              <GlobeAltIcon className="h-16 w-16 text-white opacity-80" />
              {/* Uncomment to use actual image
              <Image
                src="/project2.jpg"
                alt="Project 2"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              */}
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span>E-Commerce Platform</span>
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                Next.js
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              A modern e-commerce platform built with Next.js and Stripe,
              featuring product listings, cart functionality, and secure payment
              processing.
            </p>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className={`flex items-center ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } hover:underline`}
              >
                <span>View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={`flex items-center ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } hover:underline`}
              >
                <span>GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className={`card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="relative h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mb-4 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50">
                  View Project
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {/* Uncomment to use actual image
              <Image
                src="/project3.jpg"
                alt="Project 3"
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
              */}
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span>Mobile App</span>
              <span className="ml-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                React Native
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              A cross-platform mobile application built with React Native that
              allows users to track their fitness goals and nutrition intake.
            </p>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className={`flex items-center ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } hover:underline`}
              >
                <span>View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={`flex items-center ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } hover:underline`}
              >
                <span>GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
