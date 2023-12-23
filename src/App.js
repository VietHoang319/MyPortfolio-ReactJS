import { useEffect, useState } from "react";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import "./assets/style/App.scss";

function App() {
  const homeLink = "#";
  const [navLinkActive, setNavLinkActive] = useState("home");
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll("section[id]");

    setScrollHeader(scrollY >= 80);
    setShowScrollUp(scrollY >=560);

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setNavLinkActive(sectionId);
      }
    });
  };

  return (
    <div className="wrapper">
      <Header
        homeLink={homeLink}
        navLinkActive={navLinkActive}
        scrollHeader={scrollHeader}
      />
      <Main />
      <Footer />

      <a href={homeLink} className={`scroll-up ${showScrollUp ? "show-scroll" : ""}`}>
        <i className="uil uil-arrow-up scroll-up-icon"></i>
      </a>
    </div>
  );
}

export default App;
