import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <span className="section-subtitle">Get in touch</span>

      <div className="contact-container container grid">
        <div>
          <div className="contact-information">
            <i className="uil uil-phone contact-icon"></i>

            <div>
              <h3 className="contact-title">Call Me</h3>
              <span className="contact-subtitle">093 399 0829</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
