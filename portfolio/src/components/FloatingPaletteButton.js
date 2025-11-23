import React from "react";

export default function FloatingPaletteButton() {
  const openPalette = () => {
    const ev = new Event("open-palette");
    window.dispatchEvent(ev);
  };

  return (
    <button
      className="floating-palette-btn"
      title="Open commands (Ctrl/Cmd + K)"
      onClick={openPalette}
      aria-label="Open command palette"
    >
      ⌘
    </button>
  );
}