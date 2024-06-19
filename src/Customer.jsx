import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Right.css";

export function Customer() {
  return (
    <div className="app">
      <div className="customer">
        <h2>Perfect for QSR, retail and supermarkets/CPG.</h2>
        <p>
          Ads delivered to the right person, at the right time, at the right place dramatically increases clicks, store
          visits and sales.
        </p>
        <div className="timePP">
          <div className="timePersonPlaceContainer">
            <div className="timePersonPlace">
              <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-05_zgv611.png"></img>
              <p>QSR</p>
            </div>
            <div className="timePersonPlace">
              <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808893/SpendPointimage-09_ljhu0p.png"></img>
              <p>Retail</p>
            </div>
            <div className="timePersonPlace">
              <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808891/SpendPointimage-04_bztgwu.png"></img>
              <p>Supermarkets CPG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
