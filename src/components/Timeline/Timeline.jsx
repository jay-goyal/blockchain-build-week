import React, { useEffect, useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import "./Timeline.css";

const Timeline = () => {
  const [bulb, setBulb] = useState(0);
  const [style1, setStyle1] = useState("card");
  const [style2, setStyle2] = useState("card");
  const [style3, setStyle3] = useState("card");
  const MAX_VALUE = 3;

  const leftClick = () => {
    if (bulb > 0) {
      setBulb(bulb - 1);
      console.log(bulb);
    } else {
      setBulb(MAX_VALUE - 1);
    }
  };

  const rightClick = () => {
    if (bulb < MAX_VALUE - 1) {
      setBulb(bulb + 1);
      console.log(bulb);
    } else {
      setBulb(0);
    }
  };

  useEffect(() => {
    console.log("Use effect called");
    if (bulb == 0) {
      document.getElementById("ball1").style.backgroundColor = "#79F9BA";
      document.getElementById("ball2").style.backgroundColor = "White";
      document.getElementById("ball3").style.backgroundColor = "White";
      setStyle1("new-card");
      setStyle2("card");
      setStyle3("card");
    } else if (bulb == 1) {
      document.getElementById("ball2").style.backgroundColor = "#79F9BA";
      document.getElementById("ball1").style.backgroundColor = "White";
      document.getElementById("ball3").style.backgroundColor = "White";
      setStyle2("new-card");
      setStyle1("card");
      setStyle3("card");
    } else {
      document.getElementById("ball3").style.backgroundColor = "#79F9BA";
      document.getElementById("ball2").style.backgroundColor = "White";
      document.getElementById("ball1").style.backgroundColor = "White";
      setStyle3("new-card");
      setStyle1("card");
      setStyle2("card");
    }
  }, [bulb]);

  return (
    <div className="timeline">
      <div className="headline">
        <h1>Timeline</h1>
      </div>
      <div className="big-box">
        <div className="main-line">
          <div className="ball2-outer"></div>
          <div className="curved-line"></div>
          <div className="verti-line"></div>
          <div className="ball1" id="ball1"></div>
          <div className="ball1-outline"></div>
          <div className="ball2" id="ball2"></div>
          <div className="ball2-outline"></div>
          <div className="ball3" id="ball3"></div>
          <div className="ball3-outline"></div>
        </div>
        <div className="curtain">
          {/* <div className="line-ball">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="cirlce"></div>
          </div> */}
          <div className="cards">
            <div
              className={style1}
              onMouseOver={() => {
                setBulb(0);
              }}
            >
              <div className="date">4th April</div>
              <div className="title">Lorem ipsum</div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quibusdam commodi molestias aliquam explicabo quidem
                dignissimos beatae, cumque ipsum? Magnam est perspiciatis
                perferendis debitis ratione aperiam sint iure recusandae ut?
              </div>
            </div>
            <div
              className={style2}
              onMouseOver={() => {
                setBulb(1);
              }}
            >
              <div className="date">4th April</div>
              <div className="title">Lorem ipsum</div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quibusdam commodi molestias aliquam explicabo quidem
                dignissimos beatae, cumque ipsum? Magnam est perspiciatis
                perferendis debitis ratione aperiam sint iure recusandae ut?
              </div>
              <div className="title">Lorem ipsum</div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quibusdam commodi molestias aliquam explicabo quidem
                dignissimos beatae, cumque ipsum? Magnam est perspiciatis
                perferendis debitis ratione aperiam sint iure recusandae ut?
              </div>
            </div>
            <div
              className={style3}
              onMouseOver={() => {
                setBulb(2);
              }}
            >
              <div className="date">4th April</div>
              <div className="title">Lorem ipsum</div>
              <div className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quibusdam commodi molestias aliquam explicabo quidem
                dignissimos beatae, cumque ipsum? Magnam est perspiciatis
                perferendis debitis ratione aperiam sint iure recusandae ut?
              </div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <div className="leftArrow">
            <div className="arrow-icon">
              <KeyboardArrowLeft
                style={{ color: "white", fontSize: "36" }}
                onClick={leftClick}
              />
            </div>
          </div>
          <div className="rightArrow">
            <div className="arrow-icon">
              <KeyboardArrowRight
                style={{ color: "white", fontSize: "36" }}
                onClick={rightClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
