import React from "react";

export default function Resume() {
  return (
    <section className="terminal resume-page">
      <div className="prompt">$ cat resume.pdf</div>

      <iframe
        src="/resume.pdf"
        title="resume"
        style={{ width: "100%", height: "80vh" }}
      />

      <a className="download-link" href="/resume.pdf" download>
        download resume
      </a>
    </section>
  );
}
