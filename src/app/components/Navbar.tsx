"use client"; // Menandai file ini sebagai komponen klien

import {
  Bars3Icon,
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  FolderIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline"; // Menggunakan ikon dari Heroicons

// Definisikan tipe untuk props
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Definisikan struktur menu item
interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  // Array menu items dengan ikon dan anchor links untuk single page
  const menuItems: MenuItem[] = [
    { name: "Home", href: "#home", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "About", href: "#about", icon: <UserIcon className="h-5 w-5" /> },
    {
      name: "Skills",
      href: "#skills",
      icon: <CodeBracketIcon className="h-5 w-5" />,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <FolderIcon className="h-5 w-5" />,
    },
    {
      name: "Education",
      href: "#education",
      icon: <AcademicCapIcon className="h-5 w-5" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <EnvelopeIcon className="h-5 w-5" />,
    },
  ];

  // Function to handle smooth scrolling for anchor links
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu if it's open (using DOM instead of state)
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }

    // Toggle burger icon
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");
    if (burgerIcon && closeIcon) {
      burgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  };

  // Toggle mobile menu without useState
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");

    if (mobileMenu && burgerIcon && closeIcon) {
      mobileMenu.classList.toggle("hidden");
      burgerIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    }
  };

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } py-4 px-6 sticky top-0 z-50 shadow-sm`}
    >
      <div className="container mx-auto flex items-center justify-between md:justify-start">
        {/* Ikon Burger untuk Menu Mobile */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden focus:outline-none ${
            darkMode ? "text-white" : "text-slate-800"
          }`}
        >
          <Bars3Icon id="burger-icon" className="h-6 w-6" />
          <XMarkIcon id="close-icon" className="h-6 w-6 hidden" />
        </button>

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold mx-auto md:mx-0 md:mr-8">
          <span className="font-mono text-indigo-600">./l0c4lxid</span>
        </a>

        {/* Menu Desktop - Centered */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="font-medium relative transition duration-300 ease-in-out hover:text-indigo-600 flex items-center"
            >
              <span className="mr-1">{item.icon}</span>
              {item.name}
              <span className="absolute block h-1 bg-indigo-600 transition-all duration-300 transform scale-x-0 hover:scale-x-100 bottom-0 left-0 right-0"></span>
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle - Desktop & Mobile */}
        <button
          onClick={toggleDarkMode}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition duration-300 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-500" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-800" />
          )}
        </button>
      </div>

      {/* Dropdown Menu untuk Mobile - Hidden by default */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } py-4 px-6 absolute left-0 right-0 shadow-md hidden`}
      >
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="font-medium flex items-center hover:text-indigo-600 transition py-2"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
