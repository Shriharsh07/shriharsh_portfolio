import React from "react";
import useTyping from "../hooks/useTyping";
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

export default function Home() {
  const { index, subIndex, blinking } = useTyping(INFO_LINES);

  return (
    <section className="terminal page-content">
      <div className="prompt">$ welcome</div>

      <div className="output">
        {INFO_LINES.slice(0, index).map((line, i) => (
          <div className="line" key={i}>
            {line}
          </div>
        ))}

        {index < INFO_LINES.length && (
          <div className="line">
            {INFO_LINES[index].substring(0, subIndex)}
            <span className={blinking ? "cursor blink" : "cursor"}>|</span>
          </div>
        )}

        {index === INFO_LINES.length && (
          <div className="final-note">
            I build serverless systems, migrations & reporting engines.
          </div>
        )}
      </div>

      <div className="section about">
        <h3>$ about_me</h3>
        <p>
          I love backend engineering, serverless systems and cloud automation.
        </p>
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
