import React from "react";
import "../styles/early.css";

export default function Early() {
  return (
    <div>
      <section className="tertiary">
        <div className="tertiary-content">
          <h2 className="tertiary-heading">Get early access today</h2>
          <p className="tertiary-text">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. if you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="form-box-1">
          <input
            className="tertiary-input"
            type="email"
            placeholder="email.example.com"
          />
          <button className="tertiary-button">Get Started For Free</button>
        </div>
      </section>
    </div>
  );
}
