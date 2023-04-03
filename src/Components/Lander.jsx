import React from "react";
import "../CSS/Lander.css";

export default function Lander() {
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
      <img src="/globe.svg" alt="globe" className="LanderGlobe" />
      <div className="LanderFade" />
    </div>
  );
}
