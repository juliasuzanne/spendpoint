import { useState, useRef, useEffect } from "react";
import "./css/animate/GeofenceAnimate.css";
import "./css/animate/ListAnimate.css";

export function GeofencesThree(props) {
  // const { ref: containerRef, inView: isVisible, entry } = useInView(options);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const [name, setName] = useState(props.name);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (isVisible == true) {
      setIsActivated(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div>
      {/* <div className="isVisible">{isVisible ? `${name} is visible` : ""}</div> */}
      <div className={` ${isActivated ? "three-fence-1" : "three-fence"}`}>
        <div ref={containerRef}>{props.children}</div>
      </div>
    </div>
  );

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
