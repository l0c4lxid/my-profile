import { motion } from "framer-motion";
import { ClipboardIcon } from "@heroicons/react/24/outline"; // ClipboardIcon for the section title
import Image from "next/image"; // Import next/image for optimized images

interface ProjectsProps {
  darkMode: boolean;
}

// Define the project data as an array of objects
const projectsData = [
  {
    id: 1,
    title: "Solar System Game",
    description:
      "An interactive web game about the solar system featuring learning modules and quizzes, built using PHP.",
    tech: "PHP",
    techColor: "bg-purple-100 text-purple-800", // Tailor colors to tech
    imageSrc: "/project/solar-system.JPG",
    alt: "Solar System Game Project Screenshot",
    projectLink: "https://ss.andhikawebsite.my.id/", // Placeholder URL, ganti dengan URL sebenarnya jika ada
    githubLink: "https://github.com/l0c4lxid", // Placeholder URL, ganti dengan URL sebenarnya jika ada
    gradientFrom: "from-indigo-500", // Keep or change gradient background
    gradientTo: "to-purple-600",
  },
  {
    id: 2,
    title: "Koperasi Sido Manunggal Profile",
    description:
      "Official company profile website for Koperasi Sido Manunggal, developed using Next.js.",
    tech: "Next.js",
    techColor: "bg-blue-100 text-blue-800",
    imageSrc: "/project/koperasi-view.JPG",
    alt: "Koperasi Sido Manunggal Website Screenshot",
    projectLink: "https://www.koperasikredit-sidomanunggal.my.id/", // Placeholder URL
    githubLink: "https://github.com/l0c4lxid/koperasi-profile-sidomanunggal", // Placeholder URL
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-600",
  },
  {
    id: 3,
    title: "Schedule Scraper API",
    description:
      "An API built with Node.js to scrape and provide access to academic schedules.",
    tech: "Node.js",
    techColor: "bg-green-100 text-green-800",
    imageSrc: "/project/scarp-jadwal.JPG",
    alt: "Schedule Scraper API Project",
    projectLink: "https://andhikawebsite.my.id/", // Placeholder URL
    githubLink: "https://github.com/l0c4lxid", // Placeholder URL
    gradientFrom: "from-green-500", // Keep or change gradient background
    gradientTo: "to-teal-600",
  },
];

export default function Projects({ darkMode }: ProjectsProps) {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Add a delay between children animations
      },
    },
  };

  // Animation variants for each card
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
        {/* Section Title */}
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

        {/* Project Cards Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // Adjust margin based on when you want the animation to trigger
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Map over the projectsData array to render each card */}
          {projectsData.map((project) => (
            <motion.div
              key={project.id} // Unique key for list rendering
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
              {/* Project Image Section */}
              <div
                className={`relative h-48 ${project.gradientFrom} ${project.gradientTo} mb-4 rounded-lg overflow-hidden group flex items-center justify-center`}
              >
                {/* Overlay for "View Project" text */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50">
                    View Project
                  </span>
                </div>
                {/* Use next/image component */}
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Ensure image covers the area
                  className="transition-transform duration-300 group-hover:scale-105" // Optional: Add a subtle zoom effect on hover
                />
                {/* Remove any icons that were here previously */}
              </div>

              {/* Project Content Section */}
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span>{project.title}</span>
                <span
                  className={`ml-2 px-2 py-1 text-xs rounded-full ${project.techColor}`}
                >
                  {project.tech}
                </span>
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                {project.description}
              </p>

              {/* Project Links Section */}
              <div className="flex justify-between items-center">
                {/* View Project Link */}
                <a
                  href={project.projectLink}
                  className={`flex items-center ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  } hover:underline`}
                  target="_blank" // Open link in new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                >
                  <span>View Project</span>
                  {/* External link icon */}
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
                {/* GitHub Link (optional, keep as placeholder if no GitHub link) */}
                <a
                  href={project.githubLink}
                  className={`flex items-center ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  } hover:underline`}
                  target="_blank" // Open link in new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  <span>GitHub</span>
                  {/* GitHub-like icon */}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
