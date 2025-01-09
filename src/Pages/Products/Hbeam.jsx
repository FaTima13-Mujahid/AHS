
import React, { useEffect } from 'react';
import ProBg from "./proBg.jpg"

const Hbeam = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);
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
                <h2>H Beam, I Beam </h2>
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

A beam is a structural element that is capable of withstanding load primarily by resisting against bending. The bending force induced into the material of the beam as a result of the external loads, own weight, span and external reactions to these loads is called a bending moment. Beams are characterized by their profile (shape of cross-section), their length, and their material.

Beams are traditionally descriptions of building or civil engineering structural elements, but smaller structures such as truck or automobile frames, machine frames, and other mechanical or structural systems contain beam structures that are designed and analyzed in a similar fashion.

An I-beam, also known as H-beam, W-beam (for “wide flange”), Universal Beam (UB), Rolled Steel Joist (RSJ), or double-T(especially in Polish, Bulgarian, Spanish, Italian and German), is a beam with an I or H-shaped cross-section. The horizontal elements of the “I” are known as flanges, while the vertical element is termed the “web”. I-beams are usually made of structural steel and are used in construction and civil engineering.

The web resists shear forces, while the flanges resist most of the bending moment experienced by the beam. Beam theory shows that the I-shaped section is a very efficient form for carrying both bending and shear loads in the plane of the web. On the other hand, the cross-section has a reduced capacity in the transverse direction, and is also inefficient in carrying torsion, for which hollow structural sections are often preferred.

H-beam is a structural beam made of rolled steel. It is incredibly strong. It gets its name because it looks like a capital H over its cross section. The H-beam has wider flanges than an I-beam, but the I-beam has tapered edges. The width is the flange, and the height is the Web. The difference between both H-beams and I-beams is the flange by web ratio. The H-beam tends to be heavier than the I-beam, and that is why some say that it is better than the I-beam, but that is subjective, as the H-beam is generally heavier.

I-beam has tapered edges where an H-beam does not. It gets its name from the fact that it looks like a capital I when you see it from its cross section. With an I-beam, the height of the cross section is higher than the width of its flange. The I-beam is lighter than the H-beam, which means a H-beam is not always ideal.

uered plate serves a wide range of industries, including construction, automotive, marine, agriculture, and decorative design, all while offering safety, strength, slip resistance, and appeal.

 </p>
                
              </div>
            </div>
          </div>
    
        </div>
      </section>
    </div>
  );
}

export default Hbeam;
