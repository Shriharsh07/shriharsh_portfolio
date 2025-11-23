import React, { useEffect, useState } from "react";

export default function AudioEngine() {
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Preload audio
  const keypress = new Audio("/sounds/key-press.mp3");
  keypress.volume = 0.25;

  useEffect(() => {
    // Enable audio after first interaction
    const enableAudio = () => {
      setAudioEnabled(true);
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("keydown", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    window.addEventListener("keydown", enableAudio);
    window.addEventListener("touchstart", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("keydown", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  useEffect(() => {
    if (!audioEnabled) return;

    const handleKey = (e) => {
      if (e.key.length === 1) {
        keypress.currentTime = 0;
        keypress.play();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [audioEnabled]);

  return null;
}
