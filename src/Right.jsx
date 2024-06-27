import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Right.css";
import { ObservedAbc } from "./ObservedAbc";
import { ObservedObject } from "./ObservedObject";

export function Right() {
  const containerRef = useRef(null);

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
        <div className="timePersonPlaceContainer container-fluid">
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
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719504354/clock_rownxb.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right time.
                  </p>
                </div>
              </ObservedAbc>
            </div>
            <div className="col-sm-12 col-md-4">
              <ObservedObject beforeAnim="box" afterAnim="box-animate-delay2">
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719504356/map_wujcc6.png"
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
