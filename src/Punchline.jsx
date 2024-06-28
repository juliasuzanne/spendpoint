import { useState, useRef, useEffect } from "react";
import "./css/Punchline.css";

export function Punchline() {
  return (
    <div className="punchline">
      <h2 className="heading" id="punchline-main">
        Delivering ads to the right person, at the right time, at the right place{" "}
        <span className="dramatically"> dramatically increases clicks, store visits and sales.</span>
      </h2>
    </div>
  );
}
