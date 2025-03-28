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
} from "@heroicons/react/24/outline"; // Menggunakan ikon dari Heroicons

// Definisikan tipe untuk props
interface NavbarProps {
  darkMode: boolean;
}

// Definisikan struktur menu item
interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function Navbar({ darkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false); // State untuk mengelola visibilitas menu

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Array menu items dengan ikon
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

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } py-4 px-6 sticky top-0 z-50 shadow-sm`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="font-mono text-indigo-600">./l0c4lxid</span>
        </Link>

        <div className="hidden md:flex space-x-8">
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
