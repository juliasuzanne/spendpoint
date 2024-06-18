import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";

export function Home() {
  return (
    <div className="app">
      <ObservedItem name="item1"></ObservedItem>
      <ObservedItem name="item2"></ObservedItem>
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
