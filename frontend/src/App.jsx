import React from "react";
import "./App.css";
//scroll to top
import ScrollToTop from "../src/config/ScrollToTop";
//main components
import NavigationBar from "../src/components/navigation/NavigationBar";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <NavigationBar />
    </div>
  );
};

export default App;
