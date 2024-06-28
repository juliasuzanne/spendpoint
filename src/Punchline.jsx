import { useState, useRef, useEffect } from "react";
import "./css/Punchline.css";
import { ObserverComponent } from "./ObserverComponent";

export function Punchline() {
  const [startAnim, setStartAnim] = useState(false);

  const startAnimating = () => {
    console.log("startAnimatingCustomer");
    setStartAnim(true);
  };

  return (
    <div className="punchline">
      <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>{" "}
      <h2 className="heading" id="punchline-main">
        Delivering ads to the right person,
        <br></br>at the right time,
        <br></br> at the right place <br></br>
        <span className="dramatically"> dramatically increases clicks, store visits and sales.</span>
      </h2>
      <div className={`${startAnim ? "punchline-person-anim" : "punchline-person"}`}></div>
      <div className={`${startAnim ? "punchline-time-anim" : "punchline-time"}`}></div>
      <div className="punchline-image-container">
        <div className={`${startAnim ? "punchline-image-anim" : "punchline-image"}`}></div>
      </div>
    </div>
  );
}
