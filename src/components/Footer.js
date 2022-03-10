import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <section className="footer">
          <div className="fylo-footer">
            <div className="footer-logo">
              <img
                className="logo-footer"
                src="images/logo.svg"
                alt="footer logo"
              />
            </div>
            <div className="footer-row">
              <li className="footer-list">
                <img
                  className="social-img"
                  src="images/icon-phone.svg"
                  alt="telephone icon"
                />
                <span className="social-text">Phone: +1-543-123-4567</span>
              </li>
              <li className="footer-list">
                <img
                  className="social-img"
                  src="images/icon-email.svg"
                  alt="telephone icon"
                />
                <span className="social-text">example@fylo.com</span>
              </li>
            </div>
          </div>
          <div className="about-list">
            <ul>
              <li className="footer-list">
                <span className="social-text">About us</span>{" "}
              </li>
              <li className="footer-list">
                <span className="social-text">Job</span>{" "}
              </li>
              <li className="footer-list">
                <span className="social-text">Press</span>{" "}
              </li>
              <li className="footer-list">
                <span className="social-text">blog</span>{" "}
              </li>
            </ul>
          </div>
          <div className="contact-list">
            <ul>
              <li className="footer-list">
                <span className="social-text">Contact us </span>
              </li>
              <li className="footer-list">
                <span className="social-text"> Terms</span>
              </li>
              <li className="footer-list">
                <span className="social-text">Privacy </span>
              </li>
            </ul>
          </div>
          <div className="social-icon">
            <ul className="icons">
              <li className="footer-list icons-footer">
                <i className="social-text fab fa-facebook-f"></i>
              </li>
              <li className="footer-list icons-footer">
                <i className="social-text fab fa-twitter"></i>
              </li>
              <li className="footer-list icons-footer">
                <i className="social-text fab fa-instagram"></i>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
