import React from "react";
import Avatar from "../../assets/image/avatar.png"

function Home() {
  const listLink = [
    {
      id: 1,
      name: "linkedin",
      url: "https://www.linkedin.com/in/vi%E1%BB%87t-ho%C3%A0ng-ng%C3%B4-b0a333231/",
      icon: "fa-linkedin",
    },
    {
      id: 2,
      name: "github",
      url: "https://github.com/VietHoang319",
      icon: "fa-github",
    },
    {
      id: 3,
      name: "hackerrank",
      url: "https://www.hackerrank.com/profile/arishoang319",
      icon: "fa-hackerrank",
    },
  ];

  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-social">
            {listLink.map((link) => (
              <a
                href={link.url}
                target="_blank"
                className="home-social-icon"
                rel="noreferrer"
                key={link.id}
              >
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </div>
          <div className="home-img">
            <svg
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="home-blob"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home-blob-img"
                  href={Avatar}
                  x="22"
                  y="-5"
                />
              </g>
            </svg>
          </div>
          <div className="home-data">
            <h1 className="home-title">Ngô Việt Hoàng</h1>
            <h3 className="home-subtittle">Fresher Full Stack Developer</h3>
            <p className="home-description">home description</p>
            <a href="#contact" className="button button-flex">
              Liên hệ tôi <i className="uil uil-message button-icon"></i>
            </a>
          </div>
        </div>
        <div className="home-scroll">
          <a href="#about" className="home-scroll-button button-flex">
            <i className="uil uil-mouse-alt home-scroll-mouse"></i>
            <span className="home-scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home-scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
