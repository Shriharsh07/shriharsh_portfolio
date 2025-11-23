import { useState, useEffect } from "react";

export default function useTyping(lines, speed = 40, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blinking, setBlinking] = useState(true);

  // typing logic
  useEffect(() => {
    if (index === lines.length) return;

    if (subIndex === lines[index].length) {
      const timeout = setTimeout(() => {
        setIndex((i) => i + 1);
        setSubIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const event = new Event("typing-sound");
      document.dispatchEvent(event);
      setSubIndex((i) => i + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, subIndex, lines, speed, pause]);

  // cursor blink
  useEffect(() => {
    const blink = setInterval(() => setBlinking((b) => !b), 500);
    return () => clearInterval(blink);
  }, []);

  return { index, subIndex, blinking };
}
