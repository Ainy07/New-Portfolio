import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const DEFAULT_ACCENT = "#6366f1";

function shadeColor(hex, percent) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  r = Math.min(255, Math.max(0, Math.round(r + (percent / 100) * 255)));
  g = Math.min(255, Math.max(0, Math.round(g + (percent / 100) * 255)));
  b = Math.min(255, Math.max(0, Math.round(b + (percent / 100) * 255)));

  return (
    "#" +
    [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export function ThemeProvider({ children }) {
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("portfolio-accent-color") || DEFAULT_ACCENT;
  });

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-primary", accentColor);
    root.style.setProperty("--accent-light", shadeColor(accentColor, 20));
    root.style.setProperty("--accent-dark", shadeColor(accentColor, -20));
    root.style.setProperty("--accent-rgb", hexToRgb(accentColor));
    localStorage.setItem("portfolio-accent-color", accentColor);
  }, [accentColor]);

  return (
    <ThemeContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}