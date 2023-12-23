import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">footer title</h1>
            <span className="footer-subtitle">footer subtitle</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#services" className="footer-link">
                {" "}
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer-link">
                {" "}
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="footer-link">
                {" "}
                Contactme
              </a>
            </li>
          </ul>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer-social"
              rel="noreferrer"
            >
              <i className="uil uil-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer-social"
              rel="noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="footer-social"
              rel="noreferrer"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
