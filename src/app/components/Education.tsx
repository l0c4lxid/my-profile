import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  MapPinIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  return (
    <section
      id="education"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-slate-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 overflow-hidden">
        <motion.h2
          className="section-title flex items-center justify-center group"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AcademicCapIcon className="h-8 w-8 mr-2 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
          Education
        </motion.h2>

        {/* Timeline container */}
        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Center line - only visible on md and larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-500 rounded-full"></div>

          {/* Education Items */}
          <div className="space-y-12 md:space-y-0">
            {/* S1 Education - Right side on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row md:items-center mb-12">
              {/* Empty left side for first item on desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Timeline dot - only visible on md and larger screens */}
              <div className="hidden md:flex md:items-center md:justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <motion.div
                  className={`w-6 h-6 rounded-full ${
                    darkMode ? "bg-indigo-400" : "bg-indigo-600"
                  } z-10 border-4 ${
                    darkMode ? "border-gray-800" : "border-slate-50"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.2,
                  }}
                ></motion.div>
              </div>

              {/* Right content on desktop, full width on mobile */}
              <motion.div
                className="w-full md:w-1/2 md:pl-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className={`${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-4 ${
                        darkMode ? "bg-indigo-900" : "bg-indigo-100"
                      } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                    >
                      <BuildingLibraryIcon
                        className={`h-8 w-8 ${
                          darkMode ? "text-indigo-400" : "text-indigo-600"
                        } transition-all duration-300`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? "text-indigo-400" : "text-indigo-600"
                        } transition-all duration-300 hover:translate-x-1`}
                      >
                        Bachelor of Information Systems
                      </h3>
                      <div className="flex items-center mb-2 group">
                        <MapPinIcon
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            darkMode ? "text-indigo-400" : "text-indigo-500"
                          } transition-transform duration-300 group-hover:scale-110`}
                        />
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          } transition-all duration-300 group-hover:text-indigo-500 text-sm sm:text-base`}
                        >
                          Universitas Bina Sarana Informatika - Kampus Kramat 98
                        </p>
                      </div>
                      <div className="flex items-center mb-3 group">
                        <CalendarIcon
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            darkMode ? "text-indigo-400" : "text-indigo-500"
                          } transition-transform duration-300 group-hover:scale-110`}
                        />
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          } transition-all duration-300 group-hover:text-indigo-500`}
                        >
                          2024 - Present
                        </p>
                      </div>
                      <p
                        className={`${
                          darkMode ? "text-gray-300" : "text-slate-600"
                        } transition-all duration-300 hover:text-opacity-80`}
                      >
                        Currently pursuing a Bachelor&apos;s degree in
                        Information Systems, focusing on advanced software
                        development, data analysis, and IT project management.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* D3 Education - Left side on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row md:items-center mb-12">
              {/* Left content on desktop, full width on mobile */}
              <motion.div
                className="w-full md:w-1/2 md:pr-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className={`${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-4 ${
                        darkMode ? "bg-blue-900" : "bg-blue-100"
                      } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                    >
                      <BookOpenIcon
                        className={`h-8 w-8 ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        } transition-all duration-300`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        } transition-all duration-300 hover:translate-x-1`}
                      >
                        Diploma in Information Systems
                      </h3>
                      <div className="flex items-center mb-2 group">
                        <MapPinIcon
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            darkMode ? "text-blue-400" : "text-blue-500"
                          } transition-transform duration-300 group-hover:scale-110`}
                        />
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          } transition-all duration-300 group-hover:text-blue-500 text-sm sm:text-base`}
                        >
                          Universitas Bina Sarana Informatika - Yogyakarta
                        </p>
                      </div>
                      <div className="flex items-center mb-3 group">
                        <CalendarIcon
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            darkMode ? "text-blue-400" : "text-blue-500"
                          } transition-transform duration-300 group-hover:scale-110`}
                        />
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          } transition-all duration-300 group-hover:text-blue-500`}
                        >
                          2021 - 2024
                        </p>
                      </div>
                      <p
                        className={`${
                          darkMode ? "text-gray-300" : "text-slate-600"
                        } transition-all duration-300 hover:text-opacity-80`}
                      >
                        Completed a Diploma in Information Systems with a focus
                        on practical applications of technology in business
                        environments.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline dot - only visible on md and larger screens */}
              <div className="hidden md:flex md:items-center md:justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <motion.div
                  className={`w-6 h-6 rounded-full ${
                    darkMode ? "bg-blue-400" : "bg-blue-600"
                  } z-10 border-4 ${
                    darkMode ? "border-gray-800" : "border-slate-50"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.2,
                  }}
                ></motion.div>
              </div>

              {/* Empty right side for desktop */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* High School Education - Right side on desktop, full width on mobile */}
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Empty left side for desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Timeline dot - only visible on md and larger screens */}
              <div className="hidden md:flex md:items-center md:justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                <motion.div
                  className={`w-6 h-6 rounded-full ${
                    darkMode ? "bg-indigo-400" : "bg-indigo-600"
                  } z-10 border-4 ${
                    darkMode ? "border-gray-800" : "border-slate-50"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.2,
                  }}
                ></motion.div>
              </div>

              {/* Right content on desktop, full width on mobile */}
              <motion.div
                className="w-full md:w-1/2 md:pl-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className={`${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-4 ${
                        darkMode ? "bg-indigo-900" : "bg-indigo-100"
                      } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                    >
                      <UserGroupIcon
                        className={`h-8 w-8 ${
                          darkMode ? "text-indigo-400" : "text-indigo-600"
                        } transition-all duration-300`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? "text-indigo-400" : "text-indigo-600"
                        } transition-all duration-300 hover:translate-x-1`}
                      >
                        Senior Highschool (MIPA)
                      </h3>
                      <div className="flex items-center mb-2 group">
                        <MapPinIcon
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            darkMode ? "text-indigo-400" : "text-indigo-500"
                          } transition-transform duration-300 group-hover:scale-110`}
                        />
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          } transition-all duration-300 group-hover:text-indigo-500`}
                        >
                          SMA N 1 Pleret
                        </p>
                      </div>
                      <div className="flex items-center mb-3 group">
                        <CalendarIcon
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${
                            darkMode ? "text-indigo-400" : "text-indigo-500"
                          } transition-transform duration-300 group-hover:scale-110`}
                        />
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-slate-600"
                          } transition-all duration-300 group-hover:text-indigo-500`}
                        >
                          2018 - 2021
                        </p>
                      </div>
                      <p
                        className={`${
                          darkMode ? "text-gray-300" : "text-slate-600"
                        } transition-all duration-300 hover:text-opacity-80`}
                      >
                        Graduated with a focus on Mathematics and Natural
                        Sciences (MIPA). Developed a strong foundation in
                        analytical thinking and problem-solving skills.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
