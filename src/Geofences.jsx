import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Geofences.css";
import "./css/animate/GeofenceAnimate.css";
import { ObservedObject } from "./ObservedObject";
import { GeofencesThree } from "./GeofencesThree";
import { GeofencesTwo } from "./GeofencesTwo";
import { GeofencesOne } from "./GeofencesOne";

export function Geofences() {
  return (
    <div className="app">
      <div className="bluebox"></div>
      <div className="geofences">
        <h2 className="heading">AI-driven Dynamic Geofences™</h2>
        <h2>6X Increase</h2>
        <p>In Clicks & Visits Per 1000 Ads</p>
        <div className="boxes">
          <div className="boxes123">
            <GeofencesThree>
              <div className="container">
                <div className="row">
                  <p className="six-header-wide">Dynamic Geo-Fencing</p>
                </div>
                <div className="row">
                  <h3 className="times-p">3X</h3>
                </div>
              </div>
            </GeofencesThree>
          </div>
          <GeofencesTwo>
            <div className="container">
              <div className="row">
                <p className="six-header-med">Spend Data</p>
              </div>
              <div className="row">
                <h3 className="times-p">2X</h3>
              </div>
            </div>
          </GeofencesTwo>
          <GeofencesOne>
            <div className="container">
              <div className="row">
                <p className="six-header">Waste</p>
                <p className="six-header-small"> Prevention</p>
              </div>
              <div className="row">
                <h3 className="times-p">1X</h3>
              </div>
            </div>
          </GeofencesOne>
        </div>

        <div className="padding-geofences"></div>
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
