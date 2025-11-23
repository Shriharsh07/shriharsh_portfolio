import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import CommandPalette from './components/CommandPalette';
import AudioEngine from './components/AudioEngine';


export default function App() {
  const [theme, setTheme] = useState("terminal"); // 'terminal' | 'crt' | 'light'
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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

  const toggleTheme = (t) => setTheme(t);

  return (
    <div className={`app-root ${theme === "crt" ? "crt" : ""}`}>
      <nav className="top-nav">
        <div className="brand">$ shriharsh@portfolio:~$</div>
        <div className="nav-links">
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/resume">resume</Link>
          <Link to="/contact">contact</Link>
        </div>
      </nav>
      
      <AudioEngine />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={(cmd) => {
          // palette will call commands; handled inside
          setPaletteOpen(false);
        }}
      />

      <main className="main-shell page-fade">
        <Routes>
          <Route path="/" element={<Home onThemeChange={toggleTheme} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        Type <span className="cmd">help</span> or press <em>Ctrl/Cmd + K</em>{" "}
        for quick commands.
      </footer>
    </div>
  );
}
