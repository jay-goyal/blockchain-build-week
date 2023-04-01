import React from "react";
import "./index.css";
import Timeline from "./components/Timeline/Timeline";
import Lander from "./Components/Lander";
import AboutUs from "./components/About us/AboutUs";

function App() {
  return (
    <div className="App">
      <Lander />
      <AboutUs />
      <Timeline />
    </div>
  );
}

export default App;
