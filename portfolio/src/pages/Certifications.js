import React from "react";

const certs = [
  {
    id: "go-basic",
    title: "HackerRank — Go (Basic)",
    img: "../cert/go-basic.jpeg",
    link: "https://www.hackerrank.com/certificates/7cfcd8ca45d9",
  },
];

export default function Certifications() {
  return (
    <section className="terminal page-content">
      <div className="prompt">$ certifications</div>

      <div className="cert-full-list">
        {certs.map((c) => (
          <article key={c.id} className="cert-container">
            <h2 className="cert-title">{c.title}</h2>

            <img
              src={c.img}
              alt={c.title}
              className="cert-image"
              loading="lazy"
            />

            <div className="cert-actions">
              <button
                className="small-btn"
                onClick={() =>
                  window.open(c.img, "_blank", "noopener,noreferrer")
                }
              >
                View Full Image
              </button>

              <button
                className="small-btn"
                onClick={() =>
                  window.open(c.link, "_blank", "noopener,noreferrer")
                }
              >
                Verify Certificate
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
