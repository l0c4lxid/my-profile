import Image from "next/image";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center relative overflow-hidden py-12 sm:py-16 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10 -mt-20 sm:mt-4 pb-24 sm:pb-28">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column - Text content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">
              Hello,
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              I&apos;m <span className="text-gradient">Syaid Andhika</span>
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6">
              Information Systems Student
            </h2>
            <p className="text-base lg:text-lg mb-6 sm:mb-8 max-w-lg">
              Passionate about creating innovative digital solutions and
              exploring the intersection of technology and business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right column - Profile image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Syaid Andhika"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creative animated scroll indicator */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-8 sm:w-10">
        <a
          href="#about"
          className="group flex flex-col items-center"
          aria-label="Scroll to About section"
        >
          {/* Text with gradient */}
          <span
            className={`text-xs sm:text-sm font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500`}
          >
            Explore
          </span>

          {/* Animated chevron arrows */}
          <div className="relative h-10 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 absolute top-0 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              } opacity-80 animate-bounce-slow`}
              style={{ animationDelay: "0ms" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 absolute top-3 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              } opacity-60 animate-bounce-slow`}
              style={{ animationDelay: "150ms" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 absolute top-6 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              } opacity-40 animate-bounce-slow`}
              style={{ animationDelay: "300ms" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* Vertical line to enhance the scroll indicator */}
      <div
        className={`absolute h-16 w-px bottom-32 sm:bottom-36 left-1/2 transform -translate-x-1/2 ${
          darkMode
            ? "bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"
            : "bg-gradient-to-b from-indigo-600/0 via-indigo-600/50 to-indigo-600/0"
        }`}
      ></div>
    </section>
  );
}
