import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Geofences.css";

export function Geofences() {
  return (
    <div className="app">
      <div className="bluebox"></div>
      <div className="geofences">
        <h2 className="heading">AI-driven Dynamic Geofences™</h2>
        <p>
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior.
          Proprietary Waste Prevention cuts ads to non-responsive, transitional devices.
        </p>
        <div className="boxes">
          <div className="box1">
            <p>Dynamic Geo-Fencing</p>
          </div>
          <div className="box2">
            <p>Spend Data</p>
          </div>
          <div className="box3">
            <p>Waste Prevention</p>
          </div>
        </div>
      </div>
      <div className="blueCustomer">
        <h2 className="heading">Perfect for QSR, retail and supermarkets/CPG.</h2>
      </div>
    </div>
  );
}
