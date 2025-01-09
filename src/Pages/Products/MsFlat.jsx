


import React, { useEffect } from 'react';
import ProBg from "./proBg.jpg"
const MsFlat = () => {
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
                <h2>Ms Flat </h2>
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
<p><strong>Flat bars</strong> are a <strong>flat</strong>, <strong>rectangular section</strong> with <strong>square edges</strong> varying in sizes. This <strong>cost-effective</strong> <strong>steel product</strong> is suitable for a wide variety of <strong>applications</strong> and is distributed into the <strong>construction</strong>, <strong>engineering</strong>, <strong>manufacturing</strong>, <strong>mining</strong>, <strong>grating</strong>, <strong>fabrication</strong> and many other <strong>industries</strong>. The flat bar’s <strong>versatility</strong> is the main reason it is usable throughout various <strong>industries</strong>, along with the excellent <strong>strength</strong> and <strong>formability</strong> combination of steel.</p>

<p><strong>MS Flat Bars</strong> are used by <strong>grating manufacturers</strong>, <strong>cable trays</strong>, <strong>bright bar industries</strong>, <strong>automobile</strong> and <strong>auto-ancillaries</strong>, <strong>truck trailers</strong>, <strong>tippers</strong>, <strong>railways</strong>, <strong>bus body</strong>, <strong>elevators</strong> and <strong>escalators</strong>, <strong>scaffolding manufacturers</strong>, <strong>base plates</strong>, <strong>earthing material</strong>, <strong>ship building</strong>, <strong>washers</strong>, <strong>flanges</strong>, <strong>clamps</strong> and many more <strong>engineering industries</strong>.</p>

 </p>
                
              </div>
            </div>
          </div>
                <div className="container my-4">
            <h2 className="text-center mb-4">Please see below for the flat bar’s dimensions and properties:Flat bars (dimensions and properties)</h2>
            <div className="table-responsive">
              <table class="table table-bordered ">
  <thead className="table-dark">
    <tr>
      <th>Thickness</th>
      <th colspan="11">Mass in kg/m for widths in mm</th>
    </tr>
    <tr>
      <th>mm</th>
      <th>20</th>
      <th>25</th>
      <th>30</th>
      <th>40</th>
      <th>45</th>
      <th>50</th>
      <th>60</th>
      <th>65</th>
      <th>70</th>
      <th>80</th>
      <th>90</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5</td>
      <td>0.785</td>
      <td>0.981</td>
      <td>1.18</td>
      <td>1.57</td>
      <td>1.77</td>
      <td>1.96</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>0.942</td>
      <td>1.18</td>
      <td>1.41</td>
      <td>1.88</td>
      <td>2.12</td>
      <td>2.36</td>
      <td>2.83</td>
      <td>3.06</td>
      <td>3.30</td>
      <td>3.77</td>
      <td>4.24</td>
    </tr>
    <tr>
      <td>8</td>
      <td>1.26</td>
      <td>1.57</td>
      <td>1.88</td>
      <td>2.51</td>
      <td>-</td>
      <td>3.14</td>
      <td>3.77</td>
      <td>4.08</td>
      <td>4.40</td>
      <td>5.02</td>
      <td>5.65</td>
    </tr>
    <tr>
      <td>10</td>
      <td>1.57</td>
      <td>1.96</td>
      <td>2.36</td>
      <td>3.14</td>
      <td>-</td>
      <td>3.93</td>
      <td>4.71</td>
      <td>5.10</td>
      <td>5.50</td>
      <td>6.28</td>
      <td>7.07</td>
    </tr>
    <tr>
      <td>12</td>
      <td>-</td>
      <td>2.36</td>
      <td>2.83</td>
      <td>3.77</td>
      <td>4.24</td>
      <td>4.71</td>
      <td>5.65</td>
      <td>6.12</td>
      <td>6.59</td>
      <td>7.54</td>
      <td>8.48</td>
    </tr>
    <tr>
      <td>16</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>5.02</td>
      <td>-</td>
      <td>6.28</td>
      <td>7.54</td>
      <td>8.16</td>
      <td>8.79</td>
      <td>10.0</td>
      <td>11.3</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>6.28</td>
      <td>-</td>
      <td>7.85</td>
      <td>9.42</td>
      <td>10.2</td>
      <td>11.0</td>
      <td>12.6</td>
      <td>14.1</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>7.85</td>
      <td>-</td>
      <td>9.81</td>
      <td>11.8</td>
      <td>12.8</td>
      <td>13.7</td>
      <td>15.7</td>
      <td>17.7</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>18.8</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>25.1</td>
      <td>-</td>
    </tr>
  </tbody>
             </table>

             <br />
             <br />

            <h2 className="text-center mb-4"> Flat bars dimensions and properties (continued)</h2>

             <table class="table table-bordered" >
  <thead className="table-dark">
    <tr>
      <th>Thickness (mm)</th>
      <th>100</th>
      <th>110</th>
      <th>130</th>
      <th>150</th>
      <th>180</th>
      <th>200</th>
      <th>250</th>
      <th>300</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>5.18</td>
      <td>4.71</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>6.28</td>
      <td>6.91</td>
      <td>8.16</td>
      <td>9.42</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>7.85</td>
      <td>8.64</td>
      <td>10.2</td>
      <td>11.8</td>
      <td>14.1</td>
      <td>15.7</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>12</td>
      <td>9.42</td>
      <td>10.4</td>
      <td>12.2</td>
      <td>14.1</td>
      <td>17.0</td>
      <td>18.8</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>12.6</td>
      <td>-</td>
      <td>16.3</td>
      <td>18.8</td>
      <td>22.6</td>
      <td>25.1</td>
      <td>31.4</td>
      <td>37.7</td>
    </tr>
    <tr>
      <td>20</td>
      <td>15.7</td>
      <td>-</td>
      <td>20.4</td>
      <td>23.6</td>
      <td>28.3</td>
      <td>31.4</td>
      <td>39.2</td>
      <td>47.1</td>
    </tr>
    <tr>
      <td>25</td>
      <td>19.6</td>
      <td>-</td>
      <td>25.5</td>
      <td>29.4</td>
      <td>35.3</td>
      <td>39.2</td>
      <td>49.1</td>
      <td>58.9</td>
    </tr>
    <tr>
      <td>30</td>
      <td>23.6</td>
      <td>-</td>
      <td>31.6</td>
      <td>35.3</td>
      <td>42.4</td>
      <td>47.1</td>
      <td>58.9</td>
      <td>70.6</td>
    </tr>
    <tr>
      <td>40</td>
      <td>31.4</td>
      <td>-</td>
      <td>-</td>
      <td>47.1</td>
      <td>56.5</td>
      <td>62.8</td>
      <td>78.5</td>
      <td>94.2</td>
    </tr>
    <tr>
      <td>45</td>
      <td>39.2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>106</td>
    </tr>
    <tr>
      <td>50</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>118</td>
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

export default MsFlat;
