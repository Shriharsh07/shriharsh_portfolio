import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Skills } from "../pages/Home";

export default function CommandLine({ onThemeChange }) {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();

  const RESUME_PATH = "/mnt/data/Shriharsh Pattar (CV).pdf";

  const push = (line) => setHistory((h) => [...h, line]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = value.trim();
    if (!cmd) return;

    push(`$ ${cmd}`);

    const parts = cmd.split(" ");
    const base = parts[0].toLowerCase();

    if (base === "help") {
      push(
        "Available commands: help, skills, projects, about, theme [terminal|crt|light], clear, social, download, matrix"
      );
    } else if (base === "skills") {
      Skills.forEach((s) => push(s));
    } else if (base === "projects") {
      push("Opening projects page...");
      navigate("/projects");
    } else if (base === "about") {
      push("A passionate engineer building serverless & cloud apps.");
    } else if (base === "theme") {
      const t = parts[1] || "terminal";
      document.documentElement.setAttribute("data-theme", t);
      push(`Theme set to ${t}`);
    } else if (base === "clear") {
      setHistory([]);
    } else if (base === "social") {
      push("LinkedIn: https://linkedin.com/in/shriharsh-pattar");
      push("GitHub: https://github.com/yourprofile");
    } else if (base === "download") {
      push("Preparing resume...");
      // open the resume path in new tab
      window.open(RESUME_PATH, "_blank");
    } else if (base === "matrix") {
      push("Launching matrix rain... (press ESC to stop)");
      // simple full-screen matrix effect toggle
      document.body.classList.toggle("matrix");
    } else {
      push(`Command not found: ${cmd}`);
    }

    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="command-box">
      {history.map((h, i) => (
        <div key={i} className="terminal-line">
          {h}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="cmd-form">
        <span className="cmd-prefix">$</span>
        <input
          ref={inputRef}
          className="cmd-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          placeholder="type a command... (help)"
        />
      </form>
    </div>
  );
}
