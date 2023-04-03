import React from "react";
import "../CSS/Nav.css";

export default function Nav({ active, elems }) {
  return (
    <div className="NavCont">
      {Object.keys(elems).map((key, idx) => {
        const href = `#${elems[key]}`;
        return (
          <a
            href={href}
            className={`NavItem ${idx === active ? "NavActive" : ""}`}
            key={idx}
          >
            {key}
          </a>
        );
      })}
    </div>
  );
}
