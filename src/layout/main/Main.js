import React from "react";
import Home from "../../component/home/Home";
import About from "../../component/about/About";
import Skill from "../../component/skill/Skill";
import Qualification from "../../component/qualification/Qualification";
import Contact from "../../component/contact/Contact";

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Skill />
      <Qualification />
      <Contact />
    </main>
  );
}

export default Main;
