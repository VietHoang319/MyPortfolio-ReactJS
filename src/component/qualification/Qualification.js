import React from "react";

function Qualification() {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section-title">Kinh nghiệm làm việc</h2>
      <span className="section-subtitle">Hành trình của tôi</span>

      <div className="qualification-container container">
        <div className="qualification-section">
          <div
            className="qualification-content qualification-active"
            data-content
            id="education"
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Computer Enginer</h3>
                <span className="qualification-subtitle">Thuyloi University</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2014 -2017
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Computer Enginer</h3>
                <span className="qualification-subtitle">Thuyloi University</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2014 -2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
