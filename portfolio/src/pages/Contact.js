import React from "react";

export default function Contact() {
  return (
    <section className="terminal">
      <div className="prompt">$ contact</div>

      <div className="line">Email: shriharshdpattar@gmail.com</div>
      <div className="line">Phone: +91-6362550765</div>
      <div className="line">LinkedIn: https://linkedin.com/in/shriharsh-pattar</div>

      <h3 className="section">$ message</h3>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Sent!");
        }}
      >
        <input placeholder="Your name" required />
        <input placeholder="Your email" type="email" required />
        <textarea placeholder="Message" required />
        <button type="submit">send</button>
      </form>
    </section>
  );
}
