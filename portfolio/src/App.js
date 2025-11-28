import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import CommandPalette from "./components/CommandPalette";
import AudioEngine from "./components/AudioEngine";
import Loader from "./components/Loader";
import FloatingPaletteButton from "./components/FloatingPaletteButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("terminal");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Close palette on Escape — palette component already handles escape, but keep for global toggles
  useEffect(() => {
    const handler = (e) => {
      const mod = navigator.platform.toLowerCase().includes("mac")
        ? e.metaKey
        : e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((p) => !p);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // listen for floating button's custom event to open palette
  useEffect(() => {
    const onOpen = () => setPaletteOpen(true);
    window.addEventListener("open-palette", onOpen);
    return () => window.removeEventListener("open-palette", onOpen);
  }, []);

  // Loader: hide when window loads or after fallback timeout
  useEffect(() => {
    const onLoad = () => setIsLoading(false);
    window.addEventListener("load", onLoad);
    // fallback after 1.5s in case load already happened earlier or load event missed
    const fallback = setTimeout(() => setIsLoading(false), 1500);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    // Minimum 2.5 seconds loader
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = (t) => setTheme(t);

  if (loading) return <Loader />;

  return (
    <>
      <div
        className={`app-root ${theme === "crt" ? "crt" : ""}`}
        style={{ display: isLoading ? "none" : "block" }}
      >
        <AudioEngine />
        <nav className="top-nav">
          <div className="brand">$ shriharsh@portfolio:~$</div>

          <div className="nav-links desktop-only">
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/resume">resume</Link>
            <Link to="/certifications">certifications</Link>
            <Link to="/contact">contact</Link>
          </div>

          <div className="nav-social desktop-only">
            <a
              href="https://github.com/Shriharsh07"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="nav-icon"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shriharsh-pattar"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="nav-icon"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:shriharshdpattar@gmail.com"
              aria-label="Email"
              className="nav-icon"
            >
              <FiMail size={20} />
            </a>
          </div>

          <div
            className="mobile-trigger"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "▾" : "▸"}
          </div>
        </nav>

        {mobileOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              home
            </Link>
            <Link to="/projects" onClick={() => setMobileOpen(false)}>
              projects
            </Link>
            <Link to="/resume" onClick={() => setMobileOpen(false)}>
              resume
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              contact
            </Link>

            <div className="mobile-social">
              <a href="https://github.com/Shriharsh07" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/shriharsh-pattar"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:shriharshdpattar@gmail.com">
                <FiMail />
              </a>
            </div>
          </div>
        )}

        <CommandPalette
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          onNavigate={(cmd) => {
            setPaletteOpen(false);
          }}
        />

        <main className="main-shell page-fade">
          <Routes>
            <Route path="/" element={<Home onThemeChange={toggleTheme} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>

        <footer className="terminal-footer">
          <div className="footer-inner">
            <div className="footer-left">
              $ built_with: <strong>React.js</strong>
            </div>

            <div className="footer-center">
              © {new Date().getFullYear()} Shriharsh Pattar
            </div>
          </div>
        </footer>

        <FloatingPaletteButton />
      </div>
    </>
  );
}
