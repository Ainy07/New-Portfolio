import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { accentColor, setAccentColor } = useTheme();
  const colorInputRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👤" },
    { name: "Skills", href: "#skills", icon: "📊" },
    { name: "Experience", href: "#experience", icon: "💼" },
    { name: "Projects", href: "#projects", icon: "🖼️" },
    { name: "Education", href: "#education", icon: "🎓" },
    { name: "Contact", href: "#contact", icon: "✉️" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-11 h-11 rounded-full glass-card flex items-center justify-center text-xl text-gray-800 dark:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-black flex flex-col items-center py-10 px-6 z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Profile photo */}
        <div className="relative mb-5">
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-50 scale-110"
            style={{ backgroundColor: "var(--accent-primary)" }}
          ></div>
                <img
        src="/profile.jpeg"
        alt="Ainy Gupta"
        className="relative w-32 h-32 rounded-full object-cover border-4 border-gray-800"
        />
        </div>

        <h1 className="text-xl font-bold text-white mb-1 text-center">Ainy Gupta</h1>
        <p className="text-sm text-gray-400 mb-6 text-center">Backend Engineer</p>

        {/* Social links */}
        <div className="flex gap-3 mb-8">
          <a
            href="https://www.linkedin.com/in/ainy-gupta-882917242/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="https://github.com/ainy07"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-gray-300 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            gh
          </a>
        </div>

        {/* Nav menu */}
        <nav className="w-full flex-1">
          <ul className="space-y-1 w-full">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }`}
                    style={isActive ? { backgroundColor: "var(--accent-primary)" } : {}}
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Accent color picker */}
        <div className="w-full pt-6 border-t border-white/10 flex items-center justify-center gap-3">
          <span className="text-xs text-gray-500">Accent color</span>
          <button
            onClick={() => colorInputRef.current?.click()}
            className="relative w-9 h-9 rounded-full border-2 border-white/30 overflow-hidden"
            style={{ backgroundColor: accentColor }}
            aria-label="Pick accent color"
          >
            <input
              ref={colorInputRef}
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Accent color picker"
            />
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;