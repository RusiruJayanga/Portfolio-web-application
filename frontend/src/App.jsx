import React from "react";
import "./App.css";
//scroll to top
import ScrollToTop from "../src/config/ScrollToTop";
//GSAP animation
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 1.5,
  smoothTouch: 0.1,
  effects: true,
});

//main components
import NavigationBar from "../src/components/navigation/NavigationBar";
import Hero from "../src/components/hero/Hero";
import About from "../src/components/about/About";

const App = () => {
  return (
    <div className="antialiased cursor-default" >
      <ScrollToTop />
      <NavigationBar />
        <div id="wrapper">
          <div id="content">
            <Hero />
            <About />
          </div>
        </div>
    </div>
  );
};

export default App;
