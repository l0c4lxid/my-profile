"use client"; // Menandai file ini sebagai komponen klien

import { useState } from "react"; // Tambahkan import useState
import Link from "next/link";
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
  toggleDarkMode: () => void; // Tambahkan fungsi untuk toggle dark mode
}

// Definisikan struktur menu item
interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false); // State untuk mengelola visibilitas menu

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Array menu items dengan ikon
  const menuItems: MenuItem[] = [
    { name: "Home", href: "home", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "About", href: "about", icon: <UserIcon className="h-5 w-5" /> },
    {
      name: "Skills",
      href: "skills",
      icon: <CodeBracketIcon className="h-5 w-5" />,
    },
    {
      name: "Projects",
      href: "projects",
      icon: <FolderIcon className="h-5 w-5" />,
    },
    {
      name: "Education",
      href: "education",
      icon: <AcademicCapIcon className="h-5 w-5" />,
    },
    {
      name: "Contact",
      href: "contact",
      icon: <EnvelopeIcon className="h-5 w-5" />,
    },
  ];

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } py-4 px-6 sticky top-0 z-50 shadow-sm`}
    >
      <div className="container mx-auto flex items-center justify-between md:justify-start">
        {/* Ikon Burger untuk Menu Mobile */}
        <button
          onClick={handleMenuToggle}
          className={`md:hidden focus:outline-none ${
            darkMode ? "text-white" : "text-slate-800"
          }`}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold mx-auto md:mx-0 md:mr-8">
          <span className="font-mono text-indigo-600">./l0c4lxid</span>
        </Link>

        {/* Menu Desktop - Centered */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium relative transition duration-300 ease-in-out hover:text-indigo-600 flex items-center"
            >
              <span className="mr-1">{item.icon}</span>
              {item.name}
              <span className="absolute block h-1 bg-indigo-600 transition-all duration-300 transform scale-x-0 hover:scale-x-100 bottom-0 left-0 right-0"></span>
            </Link>
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

      {/* Dropdown Menu untuk Mobile */}
      {menuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } py-4 px-6 absolute left-0 right-0 shadow-md`}
        >
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-medium flex items-center hover:text-indigo-600 transition py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
