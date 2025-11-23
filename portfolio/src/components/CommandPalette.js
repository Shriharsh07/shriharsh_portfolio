import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const COMMANDS = [
  { key: "home", label: "Go Home", action: () => ({ route: "/" }) },
  {
    key: "projects",
    label: "Open Projects",
    action: () => ({ route: "/projects" }),
  },
  { key: "resume", label: "View Resume", action: () => ({ route: "/resume" }) },
  { key: "contact", label: "Contact", action: () => ({ route: "/contact" }) },
  {
    key: "theme-terminal",
    label: "Theme: Terminal",
    action: () => ({ theme: "terminal" }),
  },
  { key: "theme-crt", label: "Theme: CRT", action: () => ({ theme: "crt" }) },
  {
    key: "theme-light",
    label: "Theme: Light",
    action: () => ({ theme: "light" }),
  },
];

export default function CommandPalette({ open, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleRun = (cmd) => {
    const res = cmd.action();
    if (res.route) navigate(res.route);
    if (res.theme) {
      document.documentElement.setAttribute("data-theme", res.theme);
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <ul>
          {COMMANDS.map((cmd) => (
            <li key={cmd.key} onClick={() => handleRun(cmd)}>
              {cmd.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
