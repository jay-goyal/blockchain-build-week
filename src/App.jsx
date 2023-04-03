import React from "react";
import "./index.css";
import Timeline from "./Components/Timeline";
import Lander from "./Components/Lander";
import Nav from "./Components/Nav";
import AboutUs from "./Components/AboutUs";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const opts = { threshold: 0.6 };
  const elems = { Home: "Lander", "About Us": "AboutUs", Timeline: "Timeline" };
  const [landerRef, landerInView, landerEntry] = useInView(opts);
  const [aboutRef, aboutInView, aboutEntry] = useInView(opts);
  const [timelineRef, timelineInView, timelineEntry] = useInView(opts);
  const [elemShow, setElemShow] = useState(0);
  useEffect(() => {
    let active = 0;
    if (landerEntry?.isIntersecting) {
      active = 0;
    }
    if (aboutEntry?.isIntersecting) {
      active = 1;
    }
    if (timelineEntry?.isIntersecting) {
      active = 2;
    }
    if (elemShow != active) {
      setElemShow(active);
    }
  }, [
    landerEntry?.isIntersecting,
    aboutEntry?.isIntersecting,
    timelineEntry?.isIntersecting,
  ]);
  return (
    <div className="App">
      <Nav active={elemShow} elems={elems} />
      <section id="Lander" ref={landerRef}>
        <Lander />
      </section>
      <section id="AboutUs" ref={aboutRef}>
        <AboutUs />
      </section>
      <section id="Timeline" ref={timelineRef}>
        <Timeline />
      </section>
    </div>
  );
}

export default App;
