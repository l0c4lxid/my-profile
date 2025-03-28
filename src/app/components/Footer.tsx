import { HeartIcon } from "@heroicons/react/24/solid";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full ${
        darkMode ? "bg-gray-800" : "bg-gray-900"
      } text-white py-4`} // Mengurangi padding vertikal
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-1">
            {" "}
            {/* Mengurangi margin */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
              Syaid Andhika
            </span>
          </p>
          <p className="text-gray-400 mb-2">Information Systems Student</p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 rounded mb-2"></div>{" "}
          {/* Mengurangi margin */}
          <p className="text-sm text-gray-400">
            © {currentYear} Syaid Andhika. All rights reserved.
          </p>
          <p className="mt-1 text-sm text-gray-400 flex items-center justify-center">
            Made with
            <HeartIcon className="h-5 w-5 text-red-500 mx-1 animate-pulse" />
            using Next.js and Tailwind CSS
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-400">
          {" "}
          {/* Mengurangi margin atas */}
          <a
            href="#home"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </a>
          <span>•</span>
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <span>•</span>
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <span>•</span>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Wave Design */}
      <div className="mt-4 relative h-12 overflow-hidden">
        {" "}
        {/* Mengurangi margin atas */}
        <svg
          className="absolute bottom-0 w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={darkMode ? "#1F2937" : "#111827"}
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
