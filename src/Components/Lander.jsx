import React from "react";
import "../CSS/Lander.css";

export default function Lander() {
  return <div className="LanderCont">
        {/* <img src="/globe.png" alt="globe" className="LanderGlobe" /> */}
        <img src="/logo.svg" alt="BITS Blockchain Logo" className="LanderLogo" />
        <h1 className="LanderTitle">build week</h1>
        <a href="#" className="LanderBtn">
           START BUILDING 
        </a>
        <img src="/ringLeft.png" alt="bg ring" className="LanderRing ringLeft" />
        <img src="/ringRight.png" alt="bg ring" className="LanderRing ringRight" />
        <div className="LanderFade" />
    </div>
}
