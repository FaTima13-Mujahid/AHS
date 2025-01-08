import React from 'react'
import ProBg from "./proBg.jpg"
const Zsection = () => {
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
                <h2> Z-section </h2>
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
               <h1>Roll-Formed Z Section</h1>
<p style={{lineHeight:"2.4"}}>The roll-formed Z section is commonly used as a <strong>wall girt</strong> or <strong>roof purlin</strong> in various <strong>structural systems</strong>. It is fabricated from materials with thicknesses ranging from 16 gauge (0.060 inches) to 10 gauge (0.135 inches). The standard section widths typically vary from 6 inches to 14 inches. Manufacturing equipment allows for custom capabilities, such as hole punching, notching, and modifying section dimensions to fit specific needs.</p>

<h2>Z-Section Dimensions and Properties</h2>
<p style={{lineHeight:"2.4"}}>The reference of a Z-section, such as 232mm deep and 1.8mm thick, is indicated as <strong>232 Z 18</strong>. The first three digits (232) represent the depth of the section in millimeters (i.e., 232mm deep). The fourth character is a letter that denotes the profile type (i.e., <strong>Z</strong> for Z-section). The last two digits specify the material thickness (i.e., 18 = 1.8mm). This structure ensures that Z-sections offer strong support in construction applications while providing flexibility in design and assembly.</p>

<h2>Types of Sleeves</h2>
<p style={{lineHeight:"2.4"}}>Sleeves used in conjunction with Z-sections have the same reference number as the purlin but are prefixed with specific codes to denote their type: ‘PS’ for a standard sleeve and ‘HEBS’ for a heavy end bay sleeve. For example, a standard sleeve might be referred to as <strong>PS 232 Z 18</strong>, while a heavy end bay sleeve would be referenced as <strong>HEBS 232 Z 18</strong>. These components ensure proper functionality and adaptability in various structural setups.</p>

<h2>Material and Coating</h2>
<p style={{lineHeight:"2.4"}}>All Metsec Z-section products are manufactured from pre-hot dipped galvanized steel, ensuring superior protection against corrosion. The galvanized steel has a G275 coating and a minimum yield strength of 450 N/mm², which guarantees the durability and structural integrity of the sections under harsh environmental conditions.</p>
<table class="table table-bordered">
  <thead className="table-dark">
    <tr>
      <th >Section Depth mm</th>
      <th>Lt mm</th>
      <th>Lb mm</th>
      <th>E mm</th>
      <th>F mm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>142-262</td>
      <td>14</td>
      <td>16</td>
      <td>44</td>
      <td>42</td>
    </tr>
    <tr>
      <td>302-342</td>
      <td>19</td>
      <td>21</td>
      <td>55</td>
      <td>52</td>
    </tr>
  </tbody>
</table>

                
              </div>
            </div>
          </div>
               
        </div>
      </section>
    </div>
  )
}

export default Zsection