import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "../CSS/Countdown.css";

const WEEK = new Date("April 3, 2023 23:59:59");
const MIN = 60;
const HRS = 60;
const DAYS = 24;
export default function Countdown() {
  // eslint-disable-next-line no-unused-vars
  const [now, setNow] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      let time = Math.floor((WEEK.getTime() - now.getTime()) / 1000);
      setDays(Math.floor(time / (DAYS * HRS * MIN)));
      time = time % (DAYS * HRS * MIN);
      setHours(Math.floor(time / (HRS * MIN)));
      time = time % (HRS * MIN);
      setMin(Math.floor(time / MIN));
      now.setTime(Date.now());
    }, 10000);
    let time = Math.floor((WEEK.getTime() - now.getTime()) / 1000);
    setDays(Math.floor(time / (DAYS * HRS * MIN)));
    time = time % (DAYS * HRS * MIN);
    setHours(Math.floor(time / (HRS * MIN)));
    time = time % (HRS * MIN);
    setMin(Math.floor(time / MIN));
    now.setTime(Date.now());
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <div className="Countdown">
      <div className="timePart">
        <div>{String(days).padStart(2, "0")}</div>
        <div>DAYS</div>
      </div>
      <div className="timeColon">:</div>
      <div className="timePart">
        <div>{String(hours).padStart(2, "0")}</div>
        <div>HOURS</div>
      </div>
      <div className="timeColon">:</div>
      <div className="timePart">
        <div>{String(min).padStart(2, "0")}</div>
        <div>MIN</div>
      </div>
    </div>
  );
}
