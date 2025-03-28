import Image from "next/image";
import {
  UserIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  MapPinIcon,
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center justify-center group">
          <UserIcon className="h-8 w-8 mr-2 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
          {/* Left column - Image with animation */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-700 hover:scale-105">
            <div className="relative">
              {/* Animated decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-lg z-0 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg z-0 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main image container with hover effect */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl group">
                <div className="relative w-full h-64 sm:h-80 bg-gradient-to-r from-indigo-100 to-blue-100 overflow-hidden">
                  {/* Template image for About section */}
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="About Syaid Andhika - Coding Workspace"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <p className="text-white text-center font-medium">
                      Passionate about coding and creating innovative solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Text content with icons */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-indigo-600 flex items-center">
              <LightBulbIcon className="h-6 w-6 mr-2 animate-pulse" />
              Who am I?
            </h3>

            <div className="space-y-4">
              <p className="text-base lg:text-lg flex items-start">
                <span className="mr-2 text-indigo-500 mt-1">
                  <RocketLaunchIcon className="h-5 w-5" />
                </span>
                <span className="font-semibold mx-1">
                  Hello! I&apos;m Syaid Andhika, a passionate Information
                  Systems student with a keen interest in bridging technology
                  and business solutions.
                </span>
              </p>

              <p className="text-base lg:text-lg flex items-start">
                <span className="mr-2 text-indigo-500 mt-1">
                  <CodeBracketIcon className="h-5 w-5" />
                </span>
                I specialize in developing web applications and analyzing
                information systems that help businesses operate more
                efficiently. My academic background has equipped me with strong
                analytical skills and technical knowledge.
              </p>

              <p className="text-base lg:text-lg flex items-start mb-6">
                <span className="mr-2 text-indigo-500 mt-1">
                  <LightBulbIcon className="h-5 w-5" />
                </span>
                When I&apos;m not coding or studying, you can find me exploring
                new technologies or engaging in outdoor activities.
              </p>
            </div>

            {/* Personal info grid with icons */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-base lg:text-lg p-4 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-50"
              } transition-all duration-300 hover:shadow-md`}
            >
              <div className="space-y-3">
                <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                  <UserIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  <span className="font-semibold"></span>
                  <span className="ml-1">Syaid Andhika</span>
                </p>
                <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                  <AcademicCapIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  <span className="font-semibold"></span>
                  <span className="ml-1">Information Systems</span>
                </p>
              </div>
              <div className="space-y-3">
                <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                  <EnvelopeIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  <span className="font-semibold"></span>{" "}
                  <a
                    href="mailto:syaidxandhika@gmail.com"
                    className="ml-1 hover:text-indigo-500 transition-colors"
                  >
                    syaidxandhika@gmail.com
                  </a>
                </p>
                <p className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                  <MapPinIcon className="h-5 w-5 mr-2 text-indigo-500" />
                  <span className="font-semibold"></span>{" "}
                  <span className="ml-1">Yogyakarta, Indonesia</span>
                </p>
              </div>
            </div>

            {/* Download CV button with animation */}
            <a
              href="/resume.pdf"
              className="btn-primary mt-8 inline-flex items-center group transition-all duration-300 hover:scale-105"
              download
            >
              My Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-y-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
