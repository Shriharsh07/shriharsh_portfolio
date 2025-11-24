import { useNavigate } from "react-router-dom";
import CommandLine from "../components/CommandLine";

const INFO_LINES = [
  "whoami: Shriharsh Pattar",
  "role: Software Engineer",
  "location: India",
  "current_tech: Go, AWS Lambda, Amazon DynamoDB, MySQL",
  "contact: shriharshdpattar@gmail.com",
];

export const Skills = [
  "Golang",
  "AWS Lambda",
  "Amazon DynamoDB",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
];

const headline = `Enthusiastic Software Engineer with a strong foundation in programming 
                  and a mindset for continuous growth. I enjoy building practical solutions, 
                  learning new technologies, and pushing myself beyond comfort zones. `;

const FEATURED = [
  {
    id: "p1",
    title: "Real-Time WebSocket Notification System",
    summary:
      "Serverless WebSocket messaging with scalable connection management for instant notifications.",
    tech: ["Go", "API Gateway", "DynamoDB", "Lambda"],
  },
  {
    id: "p3",
    title: "Secure Document Access via Email",
    summary:
      "Cognito-secured presigned S3 URLs for safe document delivery and access workflows.",
    tech: ["Go", "Cognito", "S3", "Lambda"],
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="terminal page-content">
      {/* HERO — replaced typing animation per your choice (B) */}
      <div className="hero">
        <h1 className="hero-title">Hi, I’m Shriharsh.</h1>
        <p className="hero-sub">Backend Engineer — Go | AWS | Java</p>
        <p className="hero-desc">{headline}</p>
        <div className="hero-cta">
          <button className="small-btn" onClick={() => navigate("/projects")}>
            View Projects
          </button>
          <button className="small-btn" onClick={() => navigate("/resume")}>
            View Resume
          </button>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="section featured-projects">
        <h3>$ featured_projects</h3>
        <div className="featured-grid">
          {FEATURED.map((p) => (
            <div key={p.id} className="featured-card">
              <div className="featured-icon">⚙️</div>
              <div className="featured-body">
                <h4 className="featured-title">{p.title}</h4>
                <p className="featured-summary">{p.summary}</p>

                <div className="featured-meta">
                  <div className="tech-inline">{p.tech.join(" • ")}</div>
                  <div className="featured-actions">
                    <button
                      className="small-btn"
                      onClick={() => navigate("/projects", { state: { highlight: p.id } })}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section skills">
        <h3>$ skills</h3>
        <div className="chips">
          {Skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="section terminal-area">
        <h3>$ terminal</h3>
        <CommandLine />
      </div>
    </section>
  );
}
