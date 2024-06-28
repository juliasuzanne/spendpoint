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
      <div className="spendpoint-icon">
        <img
          className={`${startAnim ? "spend-map-anim" : "spend-map"}`}
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719612263/maplogo-18_y9niom.png"
        ></img>
        <img
          className={`${startAnim ? "spend-map-shadow-anim" : "spend-map-shadow"}`}
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719613559/SpendPoint-shadow-tall_zvvo6t.png"
        ></img>
      </div>
      <h2 className="heading" id="punchline-main">
        Delivering ads to the right person, at the right time, at the right place dramatically increases
        <br></br>{" "}
        <span className="dramatically">
          {" "}
          clicks, <br></br>store visits <br></br>and sales.
        </span>
      </h2>
      {/* <div className={`${startAnim ? "punchline-person-anim" : "punchline-person"}`}></div>
      <div className={`${startAnim ? "punchline-time-anim" : "punchline-time"}`}></div>
      <div className="punchline-image-container">
        <div className={`${startAnim ? "punchline-image-anim" : "punchline-image"}`}></div> */}
    </div>
  );
}
