import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Geofences.css";

export function Geofences() {
  return (
    <div className="app">
      <div className="bluebox"></div>
      <div className="geofences">
        <h2 className="heading">AI-driven Dynamic Geofences™</h2>

        <div className="boxes">
          <div className="box1">
            <p>Dynamic Geo-Fencing</p>
            <h3>3X</h3>
          </div>
          <div className="box2">
            <p>Spend Data</p>
            <h3>2X</h3>
          </div>
          <div className="box3">
            <p>Waste Prevention</p>
            <h3>1X</h3>
          </div>
        </div>
        <p className="geofencesText">
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior. Ads
          delivered to the right person, at the right time, at the right place dramatically increases clicks, store
          visits, and sales. Proprietary Waste Prevention cuts ads to non-responsive, transitional devices.
        </p>
      </div>

      <div className="blueCustomer">
        <h2 className="heading">Perfect for QSR, retail and supermarkets/CPG.</h2>
      </div>
    </div>
  );
}
