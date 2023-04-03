import React from "react";
import "../CSS/Lander.css";
import { useState } from "react";
import Countdown from "./Countdown";

export default function Lander() {
  const [isCount, setIsCount] = useState(false);

  return (
    <div className="LanderCont">
      {/* <img src="/globe.png" alt="globe" className="LanderGlobe" /> */}
      <img src="/logo.svg" alt="BITS Blockchain Logo" className="LanderLogo" />
      <h1 className="LanderTitle">build week</h1>
        <a href="https://forms.gle/hmxdeMrsKdgSeQHY9" className="LanderBtn">
          START BUILDING
        </a>
      <img src="/ringLeft.png" alt="bg ring" className="LanderRing ringLeft" />
      <img
        src="/ringRight.png"
        alt="bg ring"
        className="LanderRing ringRight"
      />
      <div className="LanderFade" />
    </div>
  );
}
