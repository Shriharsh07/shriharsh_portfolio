import React, { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 2500; // 2.5 seconds
    const interval = 50; // update every 50ms
    let elapsed = 0;

    const id = setInterval(() => {
      elapsed += interval;

       const percent = Math.min(
        Math.round((elapsed / totalDuration) * 100),
        100
      );

      setProgress(percent);

      if (percent >= 100) {
        clearInterval(id);
      }
    }, interval);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="loader-root">
      <div className="loader-box">
        <div className="loader-line">$ booting portfolio...</div>
        <div className="loader-line">loading {progress}%</div>
        <div className="loader-bar">
          <div className="loader-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
