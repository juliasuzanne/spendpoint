import { useState, useRef, useEffect } from "react";
import "./css/Geofences.css";
import "./css/animate/GeofenceAnimate.css";
import "./css/animate/ListAnimate.css";
import "./css/CurlyBrace.css";
import { ObserverComponent } from "./ObserverComponent";
import { Customer } from "./Customer";

export function Geofences() {
  const [startAnim, setStartAnim] = useState(false);

  const startAnimating = () => {
    console.log("startAnimatingGeofences");
    setStartAnim(true);
  };

  return (
    <div className="app">
      <div className="bluebox"></div>
      <div className="geofences">
        <h2 className="heading">AI-driven Dynamic Geofences™</h2>
        <p className="geofencesTextMobile">
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior.
          Proprietary Waste Prevention cuts ads to non-responsive, transitional devices.
        </p>
        <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>{" "}
        <h2 className="increaseHeader">6X Increase</h2>
        <p className="inClicksSubHeader">In Clicks & Visits Per 1000 Ads</p>
        <div
          className="container-fluid"
          id={`${startAnim ? "curly-braces-container-animate" : "curly-braces-container"}`}
        >
          <div className="row">
            <div className="curly-brace col-sm-4 col-lg-4" id={`${startAnim ? "curly-brace-before1" : ""}`}></div>
            <div className="curly-brace2 col-sm-4 col-lg-4" id={`${startAnim ? "curly-brace-before1" : ""}`}></div>
            <div className="curly-brace3 col-sm-4 col-lg-4" id={`${startAnim ? "curly-brace-before1" : ""}`}></div>
            <div className="curly-brace4 col-sm-4 " id={`${startAnim ? "curly-brace-before1" : ""}`}></div>
          </div>
        </div>
        <div className="padding-geofencesMobile"></div>
        <div className="boxes">
          <div className="boxes123">
            <div className={`${startAnim ? "three-fence-1" : "three-fence"}`}>
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
            </div>
          </div>
          <div className={`${startAnim ? "three-fence-2" : "three-fence-second"}`}>
            <div className="container-fluid">
              <div className="row">
                <p className="six-header-med">Spend Data</p>
              </div>
              <div className="row">
                <h3 className="times-p">2X</h3>
              </div>
            </div>
          </div>
          <div className={`${startAnim ? "three-fence-3" : "three-fence-third"}`}>
            <div className="container-fluid">
              <div className="row">
                <p className="six-header">
                  Waste <span className="six-header-mobile">Prevention</span>
                </p>
                <p className="six-header-small"> Prevention</p>
              </div>
              <div className="row">
                <h3 className="times-p" id="small-times-p">
                  1X
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-geofences"></div>
        <p className="geofencesText">
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior.
          Proprietary Waste Prevention cuts ads to non-responsive, transitional devices.
        </p>
        <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>{" "}
      </div>

      <div className="blueCustomer">
        <Customer></Customer>
      </div>
      <div className="greenLine"></div>
    </div>
  );
}
