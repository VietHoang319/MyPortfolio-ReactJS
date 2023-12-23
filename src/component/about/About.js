import React from "react";
import MyCV from "../../assets/file/CV_Ngo_Viet_Hoang_Java_Developer.pdf";
import AboutImage from "../../assets/image/about.jpg";
import moment from "moment";
import "./About.scss";

function About() {
  const diff = moment().diff(moment("2022-09-12"), "milliseconds");
  const duration = moment.duration(diff);
  const yearExperience = duration.years().toString().padStart(2, "0");

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img
          src={AboutImage}
          alt="about image"
          className="about-img"
          aria-hidden
        />

        <div className="about-data">
          <p className="about-description">About description</p>

          <div className="about-info">
            <div>
              <div className="about-info-title">{yearExperience}+</div>
              <div className="about-info-name">
                Năm <br />
                kinh nghiệm
              </div>
            </div>

            <div>
              <div className="about-info-title">01+</div>
              <div className="about-info-name">
                Dự án <br />
                hoàn thành
              </div>
            </div>

            <div>
              <div className="about-info-title">01</div>
              <div className="about-info-name">
                Công ty <br />
                đã làm việc
              </div>
            </div>
          </div>

          <div className="about-buttons">
            <a
              download="CV_Ngo Viet Hoang_Java Developer.pdf"
              href={MyCV}
              className="button button-flex button-download-cv"
            >
              Download CV <i className="uil uil-download-alt button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
