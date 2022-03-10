import React from "react";
import "../styles/banner.css";

export default function Banner({ imageSrc, content, title, banner }) {
  return (
    <div>
      <section className="banner" style={{ flexDirection: banner }}>
        <div className="banner-content">
          <div className="banner-left-box">
            <h1 className="banner-heading">{title}</h1>
            <p className="banner-text">{content}</p>
            {imageSrc === "images/illustration-1.svg" ? (
              <form className="form-box" action="">
                <input
                  className="banner-input"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button className="banner-button">Get started</button>
              </form>
            ) : (
              <>
                <a href="/" className="secondary__link">
                  <div class="secondary__link-wrapper">
                    <span class="secondary__link-text">See how Fylo works</span>
                    {/* <span class="secondary__link-image"></span> */}
                  </div>
                </a>
                <div className="secondary__testimonial">
                  <img
                    className="testimonial__quotes"
                    src="images/icon-quotes.svg"
                    alt="quotes"
                  />
                  <p className="testimonial__body">
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="testimonial__user">
                    <img
                      src="images/avatar-testimonial.jpg"
                      className="user__image"
                      alt="avatar"
                    />
                    <div>
                      <p className="user__name">Kyle Burton</p>
                      <p className="user__title">Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="banner-image">
          <img
            className="illustration-1-img"
            src={imageSrc}
            alt="illustration 1"
          />
        </div>
      </section>
    </div>
  );
}
