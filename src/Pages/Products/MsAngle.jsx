


import ProBg from "./proBg.jpg"

const MsAngle = () => {
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
                <h2>Ms Angle </h2>
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


MS Angles, also known as L-shaped structural steel, are represented by the dimensions of sides and thickness. There are various sizes of angles. MS Angles are commonly used for the manufacturing of truck-trailers, EOT cranes, and gantries, escalators and elevators, shipbuilding, factory sheds, bus bodies, communication and transmission towers, conveyors, boilers, agricultural machinery, and the construction of bridges, scaffolding, and many more fabrication and engineering sectors.


 </p>
                
              </div>
            </div>
          </div>
    
        </div>
      </section>
    </div>
  );
}

export default MsAngle;
