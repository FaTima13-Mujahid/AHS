import React, { useState } from 'react';
import CountUp from 'react-countup';  // Importing CountUp
import { Waypoint } from 'react-waypoint';
import './CounterSection.css'; // For custom CSS styles (optional)

const CounterSection = () => {
  // States to track if counters are triggered
  const [triggered, setTriggered] = useState(false);

  // Function to reset counters when they come into view
  const handleWaypointEnter = () => {
    setTriggered(true); // This will trigger the animation when the section is in view
  };

  return (
    <div className="count-down-area pt-25 section-bg" style={{ backgroundImage: `url('/assets/img/gallery/section_bg02.png')` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="count-down-wrapper">
              <div className="row justify-content-between">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter text-center">
                    <Waypoint onEnter={handleWaypointEnter} bottomOffset="20%" />
                    {triggered && (
                      <CountUp className="counter color-green" start={0} end={8500} duration={2} key={triggered ? "8500" : "0"} />
                    )}
                    <span className="plus">+</span>
                    <p className="color-green">Steel Products Sold</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter text-center">
                    <Waypoint onEnter={handleWaypointEnter} bottomOffset="20%" />
                    {triggered && (
                      <CountUp className="counter color-green" start={0} end={500} duration={2} key={triggered ? "500" : "0"} />
                    )}
                    <span className="plus">+</span>
                    <p className="color-green">Tons of Steel Manufactured</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter text-center">
                    <Waypoint onEnter={handleWaypointEnter} bottomOffset="20%" />
                    {triggered && (
                      <CountUp className="counter color-green" start={0} end={120} duration={2} key={triggered ? "120" : "0"} />
                    )}
                    <span className="plus">+</span>
                    <p className="color-green">Projects Completed</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter text-center">
                    <Waypoint onEnter={handleWaypointEnter} bottomOffset="20%" />
                    {triggered && (
                      <CountUp className="counter color-green" start={0} end={450} duration={2} key={triggered ? "450" : "0"} />
                    )}
                    <span className="plus">+</span>
                    <p className="color-green">Clients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
