import React from 'react';
import ProBg from "./proBg.jpg"
const Hotrolled = () => {
  return (
    <div>
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
         backgroundImage: `url(${ProBg})`,  backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',  // Adjust the height here
        }}
      >
        <div className="container">
          <div className="row justify-content">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              {/* Section Title */}
              <div className="section-tittle text-left mb-80">
                <h2>Hot Rolled Coils & Sheet</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Add content here */}
          </div>
        </div>
      </section>

      <section className="about-low-area section-padding2" style={{ marginTop: '-50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-10">
              <div className="about-caption mb-11">
                <div className="section-tittle mb-11">
                  {/* <span>About Al Hadeed Steel</span> */}
                  {/* <h2>Building the Future with Strength and Durability</h2> */}
                </div>
                <p style={{lineHeight:"2.4"}}>
                  A finished steel product such as sheet or strip which has been wound or coiled after rolling. A flat rolled product over 12 inches in width and of less thickness than plate.

                  Hot rolled sheets are produced at elevated temperatures on rolling mills and generates a material that is resistant to work hardening and exhibits reduced levels of deformation residual stress. Material rolled in the hot rolled condition can require more extensive leveling practices, such as temper passing or stretcher leveling downstream to eliminate coil memory. In addition, hot-rolling may leave surface imperfections such as scale or pits which require additional finishing for a smooth surface.

                  Products manufactured using hot rolled sheet include structural parts such as I-beams and H-beams, rails, stampings, automotive and equipment components.

                  SS400 Steel Coil are used in Construction of Bridges, Highway Construction and Other Engineering construction.

                  Hot Rolled Steel Coil are mainly used in Construction of Bridges, Highway Construction and Other Engineering construction.

                  Common uses of A 36: Shim plates, Gusset plates, bridge plates, bearing plates, robot bases, column base plates, press parallels, press platens, tooling plates, machine plates, machine frames and pedestals, steel table tops, base plates, mold & die, machine mounting plates, etc.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hotrolled;
