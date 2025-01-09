import React, { useEffect } from 'react';
import ProBg from "./proBg.jpg"
const Colorcoilsheets = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);
  return (
     <div>
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
         backgroundImage: `url(${ProBg})`, backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',  // Adjust the height here
        }}
      >
        <div className="container">
          <div className="row justify-content">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              {/* Section Title */}
              <div className="section-tittle text-left mb-80">
                <h2>Color Coils & Sheets </h2>
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
              <p style={{lineHeight:"2.4"}}>Galvanized sheet or coil is defined as a carbon steel sheet coated with zinc on both sides. Continuous hot dipping, or electro-galvanizing are the two processes used to produce galvanized sheet and coil. Generally speaking, the hot dip process consists of passing the steel through a bath of molten zinc. The electro-galvanizing process consists of the application of zinc by electrolytic deposition. The result is a layer of zinc tightly adhering to the base metal through an iron-zinc bonding layer.</p>

<p style={{lineHeight:"2.4"}}>A zinc coating is one of the most effective and economical methods of protecting bare steel from a corroding environment. The zinc not only serves as a barrier between the steel and the environment, it will sacrifice itself to protect the underlying steel sheet. Sacrificial, or galvanic protection occurs when two dissimilar metals are in contact and coupled with water and oxygen. Zinc corrodes preferentially to the iron in steel. This protection prevents corrosion of the steel at areas not covered with zinc. Thus, the spread of corrosion from cut edges, drill holes, etc. is minimized.</p>

<p style={{lineHeight:"2.4"}}>Our Hot-dipped Galvanized products, as well as our Galvannealed (zinc-iron alloy coated) products are manufactured to ASTM A-653 specifications. Our Electrogalvanized products conform to ASTM A-879.</p>

<p style={{lineHeight:"2.4"}}>Material Types for Galvanized Coil and Sheet Steel:</p>

<ul>
  <li>Commercial Steel (CS Types A, B, and C)</li>
  <li>Forming Steel (FS Types A and B)</li>
  <li>Deep Drawing Steel (DDS Types A and C)</li>
  <li>Extra Deep Drawing Steel (EDDS)</li>
  <li>Structural Steel (SS) – further designated by Grades (33,37,40,50,80)</li>
  <li>High Strength Low Alloy Steel (HSLAS)</li>
</ul>

<p style={{lineHeight:"2.4"}}>In addition, the Hot Dipped Galvanized as well as the Galvannealed products are available in a variety of coating weights including G-90, G-60, G-40, and G-30 for the Hot Dipped Galvanized products, and A-60 and A-40 for the Galvannealed products.</p>

<p style={{lineHeight:"2.4"}}>Available Painting:</p>

          <table class="table table-bordered">
  <tbody>
    <tr>
      <td rowspan="6">Category of Painting</td>
      <td>Item</td>
      <td colspan="2">Code</td>
    </tr>
    <tr>
      <td>Polyester</td>
      <td colspan="2">PE</td>
    </tr>
    <tr>
      <td>High-durability polyester</td>
      <td colspan="2">HDP</td>
    </tr>
    <tr>
      <td>Silicon modified polyesters</td>
      <td colspan="2">SMP</td>
    </tr>
    <tr>
      <td>Polyvinylidene fluoride</td>
      <td colspan="2">PVDF</td>
    </tr>
    <tr>
      <td>Easy-Cleaning</td>
      <td colspan="2">—</td>
    </tr>
    <tr>
      <td rowspan="2">Painting Thickness</td>
      <td colspan="3">Top side: 20+5microns;</td>
    </tr>
    <tr>
      <td colspan="3">Bottom side: 5~7microns.</td>
    </tr>
    <tr>
      <td>Color System</td>
      <td colspan="3">Produce according to RAL Color System or as per buyer’s color sample.</td>
    </tr>
    <tr>
      <td rowspan="6">Painting structure</td>
      <td>Top surface</td>
      <td>Bottom surface</td>
      <td></td>
    </tr>
    <tr>
      <td>Primer coating</td>
      <td>No coating</td>
      <td>1/0</td>
    </tr>
    <tr>
      <td>Primer coating</td>
      <td>Primer coating</td>
      <td>1/1</td>
    </tr>
    <tr>
      <td>Primer coating + Finish coating</td>
      <td>No coating</td>
      <td>2/0</td>
    </tr>
    <tr>
      <td>Primer coating + Finish coating</td>
      <td>Primer coating or single back coating</td>
      <td>2/1</td>
    </tr>
    <tr>
      <td>Primer coating + Finish coating</td>
      <td>Primer coating + Finish back coating</td>
      <td>2/2</td>
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

export default Colorcoilsheets