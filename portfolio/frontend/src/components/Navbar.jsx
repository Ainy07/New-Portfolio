import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { darkMode, setDarkMode, accent, setAccent, accentColors } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold accent-gradient-text">Ainy Gupta</h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="w-8 h-8 rounded-full border-2 border-white/50 shadow-md transition-transform hover:scale-110"
              style={{ backgroundColor: "var(--accent-primary)" }}
              aria-label="Choose accent color"
            ></button>
            {showColorPicker && (
              <div className="absolute right-0 mt-2 p-3 glass-card rounded-xl flex gap-2 z-50">
                {Object.entries(accentColors).map(([key, color]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setAccent(key);
                      setShowColorPicker(false);
                    }}
                    className={`w-7 h-7 rounded-full transition-transform hover:scale-110 ${
                      accent === key ? "ring-2 ring-offset-2 ring-gray-400" : ""
                    }`}
                    style={{ backgroundColor: color.primary }}
                    aria-label={color.name}
                  ></button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-lg transition-transform hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-5 font-medium text-gray-700 dark:text-gray-200 glass mt-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;