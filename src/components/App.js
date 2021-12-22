import React from "react";
import "./App.css";
import "../index";
import Navi from "./Navi";
import Hero from "./Hero";
import Experience from "./Experience";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navi />
      <Hero />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
