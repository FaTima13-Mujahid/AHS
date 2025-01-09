



import React, { useEffect } from 'react';
import ProBg from "./proBg.jpg"
const RoundBars = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);
  return (
    <div>
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
       backgroundImage: `url(${ProBg})`,   backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',  // Adjust the height here
        }}
      >
        <div className="container">
          <div className="row justify-content">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              {/* Section Title */}
              <div className="section-tittle text-left mb-80">
                <h2>MS Round Bars</h2>
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

  <h2 >Mild Steel Bars and Deformed Steel Bars</h2>

  <h3 >Mild Steel Bars (as per IS: 432, part-I -1982)</h3>
  <p>
    Mild steel bars are used for tensile stress of RCC (Reinforced cement concrete) slab beams, etc. in reinforced cement concrete work. 
    These steel bars are plain in surface and are round sections of diameter from 6 to 50 mm. These rods are manufactured in long lengths 
    and can be cut quickly and be bent easily without damage.
  </p>

  <h3 >Deformed Steel Bars (as per IS: 1786-1985)</h3>
  <p>
    As deformed bars are rods of steels provided with lugs, ribs, or deformation on the surface of the bar, these bars minimize slippage in concrete 
    and increase the bond between the two materials. Deformed bars have more tensile stresses than that of mild steel plain bars. 
    These bars can be used without end hooks. The deformation should be spaced along the bar at substantially uniform distances.
  </p>
  <p>
    To limit cracks that may develop in reinforced concrete around mild steel bars due to stretching of bars and some loss of bond under load, 
    it is common to use deformed bars that have projecting ribs or are twisted to improve the bond with concrete. 
    These bars are produced in sections from 6 mm to 50 mm dia.
  </p>
  <p>
    In addition, the strength of bonds of deformed bars calculated should be 40 to 80% higher than that of plain round bars of the same nominal size. 
    It has more tensile stress than that of plain round bars of the same nominal size.
  </p>
  <p>
    Cold twisted deformed (Ribbed or Tor Steel Bars) bars are recommended as the best quality steel bars for construction work by structural engineers.
  </p>

  <h3 >Various Grades of Mild Steel Bars</h3>
  <p>Reinforcement bars in accordance with standard IS No. 432 part-I can be classified into the following types:</p>

  <ul>
    <li>
      <strong>Mild Steel Bars:</strong> Mild steel bars can be supplied in two grades:
      <ul>
        <li>a) Mild steel bars grade-I designated as Fe 410-S or Grade 60</li>
        <li>b) Mild steel bars grade-II designated as Fe-410-O or Grade 40</li>
      </ul>
    </li>
    <li><strong>Medium Tensile Steel Bars:</strong> Designated as Fe-540-W-HT or Grade 75</li>
  </ul>


 </p>
                
              </div>
            </div>
          </div>
                <div className="container my-4">
            <h2 className="text-center mb-4">Various Grades of Mild Steel Bars</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
      <thead className="table-dark"> 
        <tr>
          <th className="text-center"><strong>S.No</strong></th>
          <th className="text-center"><strong>Types of Nominal Size of Bars</strong></th>
          <th className="text-center"><strong>Ultimate Tensile Stress N/mm<sup>2</sup> minimum</strong></th>
          <th className="text-center"><strong>Yield Stress N/mm<sup>2</sup></strong></th>
          <th className="text-center"><strong>Elongation Percent minimum</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">1.</td>
          <td>Mild Steel Grade I or Grade 60</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bars up to 20mm</td>
          <td className="text-center">410</td>
          <td className="text-center">250</td>
          <td className="text-center">23</td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bars above 20mm upto 50mm</td>
          <td className="text-center">410</td>
          <td className="text-center">240</td>
          <td className="text-center">23</td>
        </tr>
        <tr>
          <td className="text-center">2.</td>
          <td>Mild Steel Grade-II or Grade 40</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bar up to 20mm</td>
          <td className="text-center">370</td>
          <td className="text-center">225</td>
          <td className="text-center">23</td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bars above 20mm upto 50mm</td>
          <td className="text-center">370</td>
          <td className="text-center">215</td>
          <td className="text-center">23</td>
        </tr>
        <tr>
          <td className="text-center">3.</td>
          <td>Medium Tensile Steel Grade-75</td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center"></td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bars up to 16mm</td>
          <td className="text-center">540</td>
          <td className="text-center">350</td>
          <td className="text-center">20</td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bars above 16mm up to 32mm</td>
          <td className="text-center">540</td>
          <td className="text-center">340</td>
          <td className="text-center">20</td>
        </tr>
        <tr>
          <td className="text-center"></td>
          <td>For bars above 32mm up to 50mm</td>
          <td className="text-center">510</td>
          <td className="text-center">330</td>
          <td className="text-center">20</td>
        </tr>
      </tbody>
    </table>




    <br />

    <br />
<table class="table table-bordered text-center">
  <thead className="table-dark">
    <tr>
      <th colspan="4">
        <span class="fw-bold">M S Steel Round & Square Bar</span>
      </th>
    </tr>
    <tr>
      <th>Sr.No.</th>
      <th>Dia of Steel Bar</th>
      <th>Round Bar</th>
      <th>Square Bar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>a</td>
      <td>6 mm</td>
      <td>0.22 Kg</td>
      <td>0.28 Kg</td>
    </tr>
    <tr>
      <td>b</td>
      <td>8 mm</td>
      <td>0.39 Kg</td>
      <td>0.50 Kg</td>
    </tr>
    <tr>
      <td>c</td>
      <td>10 mm</td>
      <td>0.62 Kg</td>
      <td>0.78 Kg</td>
    </tr>
    <tr>
      <td>d</td>
      <td>12 mm</td>
      <td>0.89 Kg</td>
      <td>1.13 Kg</td>
    </tr>
    <tr>
      <td>e</td>
      <td>16 mm</td>
      <td>1.58 Kg</td>
      <td>2.01 Kg</td>
    </tr>
    <tr>
      <td>f</td>
      <td>20 mm</td>
      <td>2.46 Kg</td>
      <td>3.14 Kg</td>
    </tr>
    <tr>
      <td>g</td>
      <td>25 mm</td>
      <td>3.85 Kg</td>
      <td>4.91 Kg</td>
    </tr>
    <tr>
      <td>h</td>
      <td>28 mm</td>
      <td>4.83 Kg</td>
      <td>6.15 Kg</td>
    </tr>
    <tr>
      <td>i</td>
      <td>32 mm</td>
      <td>6.31 Kg</td>
      <td>8.04 Kg</td>
    </tr>
    <tr>
      <td>j</td>
      <td>36 mm</td>
      <td>7.99 Kg</td>
      <td>10.17 Kg</td>
    </tr>
    <tr>
      <td>k</td>
      <td>40 mm</td>
      <td>9.86 Kg</td>
      <td>12.56 Kg</td>
    </tr>
    <tr>
      <td>l</td>
      <td>45 mm</td>
      <td>12.49 Kg</td>
      <td>15.90 Kg</td>
    </tr>
    <tr>
      <td>m</td>
      <td>50 mm</td>
      <td>15.41 Kg</td>
      <td>19.62 Kg</td>
    </tr>
  </tbody>
</table>
 

            </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default RoundBars;
