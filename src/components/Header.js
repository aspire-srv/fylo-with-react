import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <div>
      <section className="navigation">
        <a href="/">
          <img src="images/logo.svg" className="navigation__logo" alt="logo" />
        </a>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <a
              className="navigation__list-item"
              href="/features"
              routerLinkActive="activebutton"
            >
              <li className="navigation__list-item">Features</li>
            </a>
            <a className="navigation__list-item" href="/team">
              <li className="navigation__list-item">Team</li>
            </a>
            <a className="navigation__list-item" href="/sign_in">
              <li className="navigation__list-item">Sign In</li>
            </a>
            <a className="navigation__list-item" href="/contact">
              <li className="navigation__list-item">Contact Us</li>
            </a>
          </ul>
        </nav>
      </section>
    </div>
  );
}
