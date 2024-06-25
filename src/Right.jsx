import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Right.css";
import { ObservedAbc } from "./ObservedAbc";
import { ObservedObject } from "./ObservedObject";

export function Right() {
  return (
    <div className="right">
      <img
        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-02_u96lbn.png"
        className="largeP"
      ></img>
      <div className="sideLine"></div>
      <div className="timePP">
        <p className="spentPointP">
          <span className="bold">SpendPoint</span> transforms today's inefficient mobile display advertising into{" "}
          <br></br>
          <span className="ROAS">
            must-have, <br></br> high ROAS marketing.
          </span>
        </p>
      </div>
      <div className="timePP">
        <div className="timePersonPlaceContainer container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <ObservedItem>
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-06_wex5tg.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right person.
                  </p>
                </div>
              </ObservedItem>
            </div>
            <div className="col-sm-12 col-md-4">
              <ObservedAbc>
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-08_dxw7my.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right time.
                  </p>
                </div>
              </ObservedAbc>
            </div>
            <div className="col-sm-12 col-md-4">
              <ObservedObject>
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-07_sf0yob.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right place.
                  </p>
                </div>
              </ObservedObject>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
