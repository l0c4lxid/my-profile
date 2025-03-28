import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-2">
      {sections.map((section) => (
        <div
          key={section}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
            activeSection === section
              ? "bg-gradient-to-b from-purple-300 to-purple-500 scale-125 shadow-lg"
              : "bg-gradient-to-b from-blue-300 to-blue-700"
          }`}
          onClick={() => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
              sectionElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
