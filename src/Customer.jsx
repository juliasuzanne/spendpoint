import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Customer.css";
import "./css/animate/ListAnimate.css";

import { ObservedAbc } from "./ObservedAbc";
import { ObservedObject } from "./ObservedObject";

export function Customer() {
  return (
    <div className="app">
      <div className="customer">
        <div className="timePP">
          <p className="customerText">SpendPoint is delivering excellent results where store visits matter most.</p>
          <div className="timePersonPlaceContainer container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <ObservedItem>
                  <div className="timePersonPlace">
                    <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719349890/SpendPointHamburger_usf5x6.png"></img>
                    <p className="rightSubtitle">QSR / Fast Casual</p>
                  </div>
                </ObservedItem>
              </div>
              <div className="col-sm-12 col-md-4">
                <ObservedAbc>
                  <div className="timePersonPlace">
                    <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719349898/SpendPointShop_p0b3nm.png"></img>
                    <p className="rightSubtitle">Retail</p>
                  </div>
                </ObservedAbc>
              </div>
              <div className="col-sm-12 col-md-4">
                <ObservedObject>
                  <div className="timePersonPlace">
                    <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719349890/SpendPointCart_pe4ntb.png"></img>
                    <p className="rightSubtitle">Supermarkets / CPG</p>
                  </div>
                </ObservedObject>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
