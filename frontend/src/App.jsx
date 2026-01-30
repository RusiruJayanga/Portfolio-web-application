import React from "react";
import "./App.css";
//scroll to top
import ScrollToTop from "../src/config/ScrollToTop";
//main components
import NavigationBar from "../src/components/navigation/NavigationBar";
import Hero from "../src/components/hero/Hero";

const App = () => {
  return (
    <div className="antialiased cursor-default">
      <ScrollToTop />
      <NavigationBar />
      <Hero />
    </div>
  );
};

export default App;
