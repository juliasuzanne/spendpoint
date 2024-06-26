import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Geofences.css";
import "./css/animate/GeofenceAnimate.css";
import "./css/animate/ListAnimate.css";
import { ObservedObject } from "./ObservedObject";
import { GeofencesThree } from "./GeofencesThree";
import { GeofencesTwo } from "./GeofencesTwo";
import { GeofencesOne } from "./GeofencesOne";
import "./css/CurlyBrace.css";
import { CurlyAnimScroll } from "./CurlyAnimScroll";

export function Geofences() {
  return (
    <div className="app">
      <div className="bluebox"></div>
      <div className="geofences">
        <h2 className="heading">AI-driven Dynamic Geofences™</h2>
        <p className="geofencesTextMobile">
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior.
          Proprietary Waste Prevention cuts ads to non-responsive, transitional devices.
        </p>
        <h2 className="increaseHeader">6X Increase</h2>
        <p className="inClicksSubHeader">In Clicks & Visits Per 1000 Ads</p>

        <div className="curly-braces-container container-fluid">
          <CurlyAnimScroll>
            <div className="curly-anim"></div>
          </CurlyAnimScroll>
          <div className="row">
            <div className="curly-brace col-sm-4 col-lg-4"></div>
            <div className="curly-brace2 col-sm-4 col-lg-4"></div>
            <div className="curly-brace3 col-sm-4 col-lg-4"></div>
            <div className="curly-brace4 col-sm-4 "></div>
          </div>
        </div>

        <div className="padding-geofencesMobile"></div>

        <div className="boxes">
          <div className="boxes123">
            <GeofencesThree>
              <div className="container-fluid">
                <div className="row">
                  <p className="six-header-wide">Dynamic Geo-Fencing</p>
                </div>
                <div className="row">
                  <h3 className="times-p" id="large-times-p">
                    3X
                  </h3>
                </div>
              </div>
            </GeofencesThree>
          </div>
          <GeofencesTwo>
            <div className="container-fluid">
              <div className="row">
                <p className="six-header-med">Spend Data</p>
              </div>
              <div className="row">
                <h3 className="times-p">2X</h3>
              </div>
            </div>
          </GeofencesTwo>
          <GeofencesOne>
            <div className="container-fluid">
              <div className="row">
                <p className="six-header">Waste</p>
                <p className="six-header-small"> Prevention</p>
              </div>
              <div className="row">
                <h3 className="times-p" id="small-times-p">
                  1X
                </h3>
              </div>
            </div>
          </GeofencesOne>
        </div>
        <div className="padding-geofences"></div>
        <p className="geofencesText">
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior.
          Proprietary Waste Prevention cuts ads to non-responsive, transitional devices.
        </p>
      </div>

      <div className="blueCustomer">
        <h2 className="heading" id="right">
          Delivering ads to the right person, at the right time, at the right place dramatically increases{" "}
          <span className="dramatically">clicks, store visits and sales.</span>
        </h2>
      </div>
      <div className="greenLine"></div>
    </div>
  );
}
