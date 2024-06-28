import { useState, useRef, useEffect } from "react";
import "./css/Customer.css";
import "./css/animate/ListAnimate.css";
import { ObserverComponent } from "./ObserverComponent";

export function Customer() {
  const [startAnim, setStartAnim] = useState(false);

  const startAnimating = () => {
    console.log("startAnimatingCustomer");
    setStartAnim(true);
  };

  return (
    <div className="app">
      <div className="customer">
        <div className="timePP">
          <p className="customerText">
            SpendPoint is delivering excellent results{" "}
            <span className="storeVisits">where store visits matter most.</span>
            {/* <span className="storeVisits">where store visits matter most.</span> */}
          </p>
          <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>
          <div className="timePersonPlaceContainer container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className={`${startAnim ? "box-animate" : "box"}`}>
                  <div className="timePersonPlace">
                    <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719349890/SpendPointHamburger_usf5x6.png"></img>
                    <p className="rightSubtitle">QSR / Fast Casual</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className={`${startAnim ? "box-animate-delay" : "box"}`}>
                  <div className="timePersonPlace">
                    <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719349898/SpendPointShop_p0b3nm.png"></img>
                    <p className="rightSubtitle">Retail</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className={`${startAnim ? "box-animate-delay2" : "box"}`}>
                  <div className="timePersonPlace">
                    <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719349890/SpendPointCart_pe4ntb.png"></img>
                    <p className="rightSubtitle">Supermarkets / CPG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ObserverComponent handleStartAnim={startAnimating}></ObserverComponent>
        </div>
      </div>
    </div>
  );
}
