import { useState, useRef, useEffect } from "react";
import { ObservedItem } from "./ObservedItem";
import { Right } from "./Right";
import { Geofences } from "./Geofences";
import { Customer } from "./Customer";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="app">
      <img
        className="spendpointLogoTop"
        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718808894/SpendPointimage-10_wivase.png"
      ></img>

      <Right></Right>

      <div className="content-breathe"></div>

      <Geofences></Geofences>
      <br></br>

      <Customer></Customer>
      {/* <div className="content-breathe2"></div> */}
      <ContactForm></ContactForm>
    </div>
  );
  {
    /* <Footer></Footer> */
  }

  {
    /* <ObservedItem
        name="item1"
        textContent="SpendPoint transforms today's inefficient mobile display advertising into must-have, high ROAS marketing."
      ></ObservedItem>
      <ObservedItem
        name="item2"
        textContent="
          AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior. Proprietary
        Waste Prevention cuts ads to non-responsive, transitional devices."
      ></ObservedItem>
      <ObservedItem
        name="item2"
        textContent="
          Ads delivered to the right person, at the right time, at the right place dramatically increases clicks, store visits and sales."
      >
        <img
          height="30px"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119414/cnc_zhxtmk_gloljy.png"
        ></img>
      </ObservedItem>
      <ObservedItem name="item2" textContent="Let's Connect">
        <p>test paragraph</p>
      </ObservedItem>
      <br></br> */
  }

  // return (
  //   <div ref={containerRef}>
  //     <h1>Welcome to React!</h1>
  //     <div className="spendpoint-transition2">
  //       SpendPoint transforms today's inefficient mobile display advertising into must-have, high ROAS marketing.
  //     </div>
  //     <div className="spendpoint-transition2">
  //       AI-driven Dynamic Geofences™ change shape based on time of day, spending data and consumer behavior. Proprietary
  //       Waste Prevention cuts ads to non-responsive, transitional devices.{" "}
  //     </div>
  //     <div className="spendpoint-transition">
  //       <p>
  //         Ads delivered to the right person, at the right time, and at the right place dramatically increases clicks,
  //         store visits and sales.
  //       </p>
  //       <p>Perfect for QSR, retail, and supermarkets/CPG.</p>
  //     </div>
  //   </div>
  // );
}
