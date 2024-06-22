import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Right.css";
import "./css/Customer.css";
import { ObservedAbc } from "./ObservedAbc";
import { ObservedObject } from "./ObservedObject";

export function Customer() {
  return (
    <div className="app">
      <div className="customer">
        <div className="timePP">
          <div className="timePersonPlaceContainer">
            <ObservedItem>
              <div className="timePersonPlace">
                <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-05_zgv611.png"></img>
                <p>QSR Fast Casual</p>
              </div>
            </ObservedItem>
            <ObservedAbc>
              <div className="timePersonPlace">
                <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808893/SpendPointimage-09_ljhu0p.png"></img>
                <p>Retail</p>
              </div>
            </ObservedAbc>
            <ObservedObject>
              <div className="timePersonPlace">
                <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808891/SpendPointimage-04_bztgwu.png"></img>
                <p>Supermarkets CPG</p>
              </div>
            </ObservedObject>
          </div>
        </div>
      </div>
    </div>
  );
}
