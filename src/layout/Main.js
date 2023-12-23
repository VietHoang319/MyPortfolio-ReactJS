import React from "react";
import Home from "../component/Home";
import About from "../component/About";
import Skill from "../component/Skill";
import Qualification from "../component/Qualification";
import Contact from "../component/Contact";

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
