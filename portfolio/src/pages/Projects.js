import React, { useState } from "react";

const PROJECTS = [
  {
    id: "p1",
    title: "Real-Time WebSocket Notification System",
    desc: "Serverless WebSocket infra using Go + AWS API Gateway + DynamoDB.",
    details:
      "Managed connection lifecycle with TTL-based connection storage, auto-reconnect patterns and cost-optimized lambdas.",
    tech: ["Go", "API Gateway", "DynamoDB", "Lambda"],
  },
  {
    id: "p2",
    title: "Java 8 → Java 17 Migration",
    desc: "Refactored legacy codebase & upgraded runtime + build chain.",
    details:
      "Replaced deprecated libs, updated build scripts and fixed reflection usages.",
    tech: ["Java 17", "Maven"],
  },
  {
    id: "p3",
    title: "Secure Document Access via Email",
    desc: "Cognito login → presigned S3 URLs for secure document retrieval.",
    details:
      "Implemented role-based access with presigned URLs and short TTLs for links.",
    tech: ["Go", "Cognito", "S3"],
  },
  {
    id: "p4",
    title: "Automated PDF Statement Generator",
    desc: "Financial statement PDFs via gofpdf.",
    details:
      "Designed templates and wrote tooling to batch generate landlord statements.",
    tech: ["Go", "gofpdf"],
  },
];

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="terminal page-content">
      <div className="prompt">$ projects --list</div>

      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className={`project-card ${open === p.id ? "expanded" : ""}`}
            onClick={() => setOpen(open === p.id ? null : p.id)}
          >
            <h4>{p.title}</h4>
            <p className="desc">{p.desc}</p>
            <div className="tech">{p.tech.join(" • ")}</div>
            {open === p.id && (
              <div className="details">
                <p>{p.details}</p>
                <button
                  className="small-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(null);
                  }}
                >
                  close
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
