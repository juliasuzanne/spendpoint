import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";

export function Home() {
  return (
    <div className="app">
      <ObservedItem
        name="item1"
        textContent="SpendPoint transforms today's inefficient mobile display advertising into must-have, high ROAS marketing."
      ></ObservedItem>
      <ObservedItem
        name="item2"
        textContent="
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior. Proprietary
        Waste Prevention cuts ads to non-responsive, transitional devices."
      ></ObservedItem>
      <ObservedItem
        name="item2"
        textContent="
          Ads delivered to the right person, at the right time, at the right place dramatically increases clicks, store visits and sales."
      >
        <img
          height="30px"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119414/cnc_zhxtmk_gloljy.png"
        ></img>
      </ObservedItem>
      <ObservedItem
        name="item2"
        textContent="
          Let's Connect"
      >
        <p>testing paragraph</p>
        <img
          height="100px"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119414/cnc_zhxtmk_gloljy.png"
        ></img>
      </ObservedItem>
    </div>
  );

  // return (
  //   <div ref={containerRef}>
  //     <h1>Welcome to React!</h1>
  //     <div className="spendpoint-transition2">
  //       SpendPoint transforms today's inefficient mobile display advertising into must-have, high ROAS marketing.
  //     </div>
  //     <div className="spendpoint-transition2">
  //       AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior. Proprietary
  //       Waste Prevention cuts ads to non-responsive, transitional devices.{" "}
  //     </div>
  //     <div className="spendpoint-transition">
  //       <p>
  //         Ads delivered to the right person, at the right time, and at the right place dramatically increases clicks,
  //         store visits and sales.
  //       </p>
  //       <p>Perfect for QSR, retail, and supermarkets/CPG.</p>
  //     </div>
  //   </div>
  // );
}
