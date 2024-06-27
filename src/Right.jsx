import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import "./css/Right.css";
import { ObservedAbc } from "./ObservedAbc";
import { ObservedObject } from "./ObservedObject";
import { ObserverComponent } from "./ObserverComponent";

export function Right() {
  const containerRef = useRef(null);
  const [startAnim, setStartAnim] = useState(false);

  const startAnimating = () => {
    console.log("startAnimatingRight");
    setStartAnim(true);
  };

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
      <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>
      <div className="timePP">
        <div className="timePersonPlaceContainer container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className={`${startAnim ? "box-animate" : "box"}`}>
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808892/SpendPointimage-06_wex5tg.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right person.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={`${startAnim ? "box-animate-delay" : "box"}`}>
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719504354/clock_rownxb.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={`${startAnim ? "box-animate-delay2" : "box"}`}>
                <div className="timePersonPlace">
                  <img
                    id="floatLeft"
                    src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719504356/map_wujcc6.png"
                  ></img>
                  <p className="rightSubtitle" id="rightSubtitleLeft">
                    Right place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
