import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PROJECTS = [
  {
    id: "p1",
    title: "Real-Time WebSocket Notification System",
    summary:
      "A real-time serverless WebSocket messaging system enabling instant bidirectional communication with scalable connection management.",
    responsibilities: [
      "Led development of a real-time WebSocket notification system using Go and AWS Lambda.",
      "Implemented bidirectional communication for instant delivery and user-targeted notifications.",
      "Managed connection lifecycle with AWS API Gateway (connect/disconnect events).",
      "Stored WebSocket connection IDs in DynamoDB using TTL for scalable session tracking.",
      "Built HTTP API endpoints for creating notifications with validation and DynamoDB persistence.",
      "Designed serverless architecture using AWS SAM for cost-efficiency and reliability.",
      "Developed a client-side testing UI with HTML/CSS/JS to manage sessions and display logs.",
    ],
    tech: [
      "Go",
      "AWS Lambda",
      "API Gateway (WebSocket & HTTP)",
      "DynamoDB",
      "AWS SAM",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: "p2",
    title: "Java Application Migration to Java 17",
    summary:
      "Complete migration and modernization of a legacy Windows-based Java 8 application to Java 17.",
    responsibilities: [
      "Performed R&D and migrated a legacy Java 8 system to Java 17 with full dependency compatibility.",
      "Addressed deprecated APIs, Windows-specific integrations, and breaking changes.",
      "Utilized new Java 17 features (sealed classes, pattern matching, enhanced switch).",
      "Refactored code for performance, maintainability, and long-term security.",
      "Executed unit, integration, and Windows environment compatibility testing.",
      "Upgraded build configs (Maven/Gradle) and optimized JVM performance.",
      "Documented migration steps, solutions, and best practices.",
    ],
    tech: [
      "Java 17",
      "Java 8",
      "Maven",
      "Gradle",
      "Windows Runtime",
      "Unit Testing",
    ],
  },
  {
    id: "p3",
    title: "Secure Document Access via Email",
    summary:
      "A secure backend system enabling document access via AWS Cognito authentication and presigned S3 URLs.",
    responsibilities: [
      "Built backend APIs with AWS Cognito for role-based authentication.",
      "Generated dynamic presigned S3 URLs for secure document access.",
      "Developed APIs to process email login codes and deliver access in real time.",
      "Implemented role-based authorization and session handling.",
      "Collaborated with frontend to create seamless login and access experience.",
      "Ensured secure, streamlined document delivery workflows.",
    ],
    tech: ["Go", "AWS Cognito", "AWS S3", "REST APIs", "Postman"],
  },
];

export default function Projects() {
  const location = useLocation();
  const highlightId = location.state?.highlight;

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (highlightId) {
      setActive(highlightId);

      // Auto-scroll smoothly
      setTimeout(() => {
        const el = document.getElementById(highlightId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 200);
    }
  }, [highlightId]);

  return (
    <section className="terminal page-content">
      <div className="prompt">$ projects</div>

      <div className="project-full-list">
        {PROJECTS.map((p) => (
          <article
            id={p.id}
            key={p.id}
            className={`project-box ${active === p.id ? "highlight" : ""}`}
          >
            <h2 className="project-title">{p.title}</h2>

            <p className="project-summary">{p.summary}</p>

            <h3 className="project-subheading">Responsibilities</h3>
            <ul className="project-list">
              {p.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h3 className="project-subheading">Tech Stack</h3>
            <div className="tech-chips">
              {p.tech.map((t, i) => (
                <span key={i} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
