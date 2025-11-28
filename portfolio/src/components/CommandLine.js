import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Skills } from "../pages/Home";

export default function CommandLine({ onThemeChange }) {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();

  const push = (line) => setHistory((h) => [...h, line]);

  const helpCommands = [
    "projects",
    "theme [terminal|crt|light]",
    "clear",
    "social",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = value.trim();
    if (!cmd) return;

    push(`$ ${cmd}`);

    const parts = cmd.split(" ");
    const base = parts[0].toLowerCase();

    switch (base) {
      case "help":
        helpCommands.forEach((c) => push(`- ${c}`));
        break;
      case "projects":
        push("Opening projects page...");
        navigate("/projects");
        break;
      case "theme":
        const t = parts[1] || "terminal";
        document.documentElement.setAttribute("data-theme", t);
        push(`Theme set to ${t}`);
        onThemeChange && onThemeChange(t);
        break;
      case "clear":
        setHistory([]);
        break;
      case "social":
        push("LinkedIn: https://linkedin.com/in/shriharsh-pattar");
        push("GitHub: https://github.com/Shriharsh07");
        break;
      case "certifications":
        push("Opening certifications page...");
        navigate("/certifications");
        break;

      default:
        push(`Command not found: ${cmd}`);
        break;
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
