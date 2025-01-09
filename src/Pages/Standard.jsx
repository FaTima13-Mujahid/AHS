import React, { useEffect } from 'react';

const MetalTable = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when this page loads
    }, []);
   const data = [
    { size: "3/4x3/4x1/8", weight: "0.263" },
    { size: "1x1x1/8", weight: "0.362" },
    { size: "1x1x3/16", weight: "0.544" },
    { size: "1-1/4x1-1/4x1/8", weight: "0.462" },
    { size: "1-1/4x1-1/4x3/16", weight: "0.666" },
    { size: "1-1/2x1-1/2x1/8", weight: "0.558" },
    { size: "1-1/2x1-1/2x3/16", weight: "0.812" },
    { size: "1-1/2x1-1/2x1/4", weight: "1.061" },
    { size: "2x2x1/8", weight: "0.748" },
    { size: "2x2x3/16", weight: "1.102" },
    { size: "2x2x1/4", weight: "1.447" },
    { size: "2-1/2x2-1/2x1/8", weight: "1.295" },
    { size: "2-1/2x2-1/2x3/16", weight: "1.853" },
    { size: "2-1/2x2-1/2x1/4", weight: "2.195" },
    { size: "3x3x1/8", weight: "1.857" },
    { size: "3x3x3/16", weight: "2.225" },
    { size: "3x3x1/4", weight: "2.223" },
    { size: "3x3x5/16", weight: "3.477" },
    { size: "3x3x3/8", weight: "4.246" },
    { size: "4x4x1/8", weight: "2.975" },
    { size: "4x4x3/16", weight: "4.246" },
    { size: "4x4x1/4", weight: "4.771" },
    { size: "4x4x5/16", weight: "5.784" },
    { size: "4x4x3/8", weight: "6.571" },
    { size: "5x5x5/16", weight: "7.321" },
    { size: "5x5x3/8", weight: "6.728" },
    { size: "6x6x3/8", weight: "10.971" },
    { size: "6x6x5/8", weight: "10.422" },
    { size: "7x7x5/8", weight: "11.956" },
    { size: "8x8x3/8", weight: "17.645" },
  ]; 

  return (
    <div className="container mt-4">
      <br />
     
       <br />
      <br />
      <br />
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '3.5rem' }}>
  Metal Weight Chart
</h1>
 <br />
      <br />
      <br />

      {/* Tables Section */}
      <div className="row">
        {/* Table 1: MS ANGLES */}
        <div className="col-md-6 mb-4">
         <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>
  MS ANGLES
</h4>

          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
             {data.map((row, index) => (
            <tr key={index}>
              <td>{row.size}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>

        {/* Table 2: MS FLAT / STRIP */}
       <div class="col-md-6 mb-4">
  <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS FLAT / STRIP</h4>
  <table class="table table-bordered text-center">
    <thead class="table-dark">
      <tr>
        <th>SIZE</th>
        <th>wt, kg/ft</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1/2x1/8</td><td>0.895</td></tr>
      <tr><td>1/2x3/16</td><td>0.144</td></tr>
      <tr><td>3/4x1/8</td><td>0.145</td></tr>
      <tr><td>3/4x3/16</td><td>0.217</td></tr>
      <tr><td>1x1/8</td><td>0.289</td></tr>
      <tr><td>1x3/16</td><td>0.435</td></tr>
      <tr><td>1x1/4</td><td>0.581</td></tr>
      <tr><td>1-1/4x1/8</td><td>0.361</td></tr>
      <tr><td>1-1/4x3/16</td><td>0.542</td></tr>
      <tr><td>1-1/4x1/4</td><td>0.722</td></tr>
      <tr><td>1-1/2x1/8</td><td>0.431</td></tr>
      <tr><td>1-1/2x3/16</td><td>0.646</td></tr>
      <tr><td>1-1/2x1/4</td><td>0.866</td></tr>
      <tr><td>2x1/8</td><td>0.581</td></tr>
      <tr><td>2x3/16</td><td>0.866</td></tr>
      <tr><td>2x1/4</td><td>1.156</td></tr>
      <tr><td>2x3/8</td><td>1.742</td></tr>
      <tr><td>2-1/2x3/16</td><td>1.206</td></tr>
      <tr><td>2-1/2x1/4</td><td>1.447</td></tr>
      <tr><td>2-1/2x3/8</td><td>2.169</td></tr>
      <tr><td>3x1/8</td><td>0.866</td></tr>
      <tr><td>3x1/4</td><td>1.738</td></tr>
      <tr><td>3x3/8</td><td>2.313</td></tr>
      <tr><td>3x1/2</td><td>2.894</td></tr>
      <tr><td>4x1</td><td>4.627</td></tr>
      <tr><td>5x1/4</td><td>3.085</td></tr>
      <tr><td>5x3/8</td><td>4.627</td></tr>
      <tr><td>5x1/2</td><td>6.171</td></tr>
      <tr><td>5x3/4</td><td>8.357</td></tr>
    </tbody>
  </table>
</div>

      </div>

      <div className="row">
        {/* Table 3: MS PLATE / SHEET */}
      <div class="col-md-6 mb-4">
  <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS PLATE / SHEET  DONE</h4>
  <table class="table table-bordered text-center">
    <thead class="table-dark">
      <tr>
        <th>SIZE</th>
        <th>kg/sheet</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>8x4x26g (0.50)</td><td>11.63</td></tr>
      <tr><td>8x4x24g (0.63)</td><td>14.69</td></tr>
      <tr><td>8x4x22g (0.79)</td><td>18.48</td></tr>
      <tr><td>8x4x20g (1.00)</td><td>23.27</td></tr>
      <tr><td>8x4x16g (1.59)</td><td>37.1</td></tr>
      <tr><td>8x4x14g (1.99)</td><td>46.55</td></tr>
      <tr><td>8x4x12g (2.52)</td><td>58.77</td></tr>
      <tr><td>8x4x3.0mm</td><td>71</td></tr>
      <tr><td>8x4x3.2mm</td><td>76</td></tr>
      <tr><td>8x4x4.0mm</td><td>94</td></tr>
      <tr><td>8x4x4.5mm</td><td>105</td></tr>
      <tr><td>8x4x5.0mm</td><td>118</td></tr>
      <tr><td>8x4x5.5mm</td><td>130</td></tr>
      <tr><td>8x4x6.0mm</td><td>143</td></tr>
      <tr><td>8x4x6.5mm</td><td>156</td></tr>
      <tr><td>8x4x7.0mm</td><td>165</td></tr>
      <tr><td>8x4x7.5mm</td><td>176</td></tr>
      <tr><td>8x4x8.0mm</td><td>188</td></tr>
      <tr><td>8x4x9.0mm</td><td>212</td></tr>
      <tr><td>8x4x10.0mm</td><td>235</td></tr>
      <tr><td>8x4x12.0mm</td><td>290</td></tr>
      <tr><td>8x4x14.0mm</td><td>340</td></tr>
      <tr><td>8x4x16.0mm</td><td>390</td></tr>
      <tr><td>8x4x20.0mm</td><td>475</td></tr>
      <tr><td>8x4x25.0mm</td><td>610</td></tr>
      <tr><td>8x4x30.0mm</td><td>720</td></tr>
      <tr><td>8x4x40.0mm</td><td>940</td></tr>
      <tr><td>8x4x50.0mm</td><td>1170</td></tr>
    </tbody>
  </table>
</div>


        {/* Table 4: MS CHANNEL */}
       <div className="col-md-6 mb-4">
  <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS CHANNEL</h4>
  <table className="table table-borderedtext-center">
    <thead className="table-dark">
      <tr>
        <th>SIZE</th>
        <th>wt, kg/ft</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1 1/2 x 1 1/4</td><td>1.36</td></tr>
      <tr><td>3 x 1 1/2</td><td>1.65</td></tr>
      <tr><td>3 x 1 1/2 x 1/4</td><td>2.05</td></tr>
      <tr><td>4 x 2 x 3/16</td><td>2.65</td></tr>
      <tr><td>4 x 2 x 1/4</td><td>3.25</td></tr>
      <tr><td>5 x 2 1/2</td><td>3.85</td></tr>
      <tr><td>6 x 3 x 1/4</td><td>4.85</td></tr>
      <tr><td>6 x 3 x 3/8</td><td>6.12</td></tr>
      <tr><td>7 x 3 x 1/4</td><td>6.14</td></tr>
      <tr><td>8 x 3 x 1/4</td><td>6.55</td></tr>
      <tr><td>8 x 3 x 3/8</td><td>8.12</td></tr>
      <tr><td>10 x 3 1/2 x 3/8</td><td>10.05</td></tr>
      <tr><td>12 x 4 x 3/8</td><td>13.92</td></tr>
    </tbody>
  </table>
</div>

      </div>

      <div className="row">
        {/* Table 5: MS SQUARE BAR */}
        <div className="col-md-6 mb-4">
          <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS ROUND BAR</h4>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ROUND 1/4</td><td>0.07</td></tr>
              <tr><td>ROUND 3/8</td><td>0.17</td></tr>
              <tr><td>ROUND 1/2</td><td>0.303</td></tr>
              <tr><td>ROUND 5/8</td><td>0.473</td></tr>
              <tr><td>ROUND 3/4</td><td>0.681</td></tr>
              <tr><td>ROUND 7/8</td><td>0.927</td></tr>
              <tr><td>ROUND1</td><td>1.211</td></tr>
              <tr><td>ROUND1*1/2 </td><td>1.892</td></tr>
              <tr><td>ROUND2</td><td>2.726</td></tr>
              <tr><td>ROUND2 1/2</td><td>4.845</td></tr>
              <tr><td>ROUND3</td><td>7.572</td></tr>
              <tr><td>ROUND4</td><td>10.902</td></tr>
              <tr><td>ROUND5</td><td>30.29</td></tr>
              <tr><td>ROUND6</td><td>43.616</td></tr>



            </tbody>
          </table>
        </div>

        {/* Table 6: MS ROUND BAR */}
       <div className="col-md-6 mb-4">
  <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS SQUARE BAR</h4>
  <table className="table table-bordered text-center">
    <thead className="table-dark">
      <tr>
        <th>SIZE</th>
        <th>wt, kg/ft</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>3/8 x 3/8</td><td>0.216</td></tr>
      <tr><td>1/2 x 1/2</td><td>0.385</td></tr>
      <tr><td>5/8 x 5/8</td><td>0.602</td></tr>
      <tr><td>3/4 x 3/4</td><td>0.867</td></tr>
      <tr><td>1 x 1</td><td>1.542</td></tr>
      <tr><td>1 1/4 x 1 1/4</td><td>2.41</td></tr>
      <tr><td>1 1/2 x 1 1/2</td><td>3.47</td></tr>
      <tr><td>2 x 2</td><td>6.17</td></tr>
      <tr><td>2 1/2 x 2 1/2</td><td>9.641</td></tr>
      <tr><td>3 x 3</td><td>13.883</td></tr>
      <tr><td>4 x 4</td><td>24.682</td></tr>
    </tbody>
  </table>
</div>
<div className="col-md-6 mb-4">
  <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS TEE BAR</h4>
  <table className="table table-bordered text-center">
    <thead className="table-dark">
      <tr>
        <th>SIZE</th>
        <th>wt, kg/ft</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1X1/8</td><td>0.372</td></tr>
      <tr><td>1½X3/16</td><td>0.821</td></tr>
      <tr><td>1½X¼</td><td>1.066</td></tr>
      <tr><td>2X3/16</td><td>1.12</td></tr>
      <tr><td>2X¼</td><td>1.46</td></tr>
      <tr><td>3X¼</td><td>2.55</td></tr>
    </tbody>
  </table>
</div>

      </div>

     

      <div className="row">
        {/* Table 9: I-BEAM */}
        <div className="col-md-6 mb-4">
          <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS H BEAM</h4>
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>4x4</td><td>6.45</td></tr>
              <tr><td>6X6</td><td>10.45</td></tr>
              <tr><td>8X8</td><td>15.55</td></tr>
              <tr><td>10X10</td><td>24.05</td></tr>
                <tr><td>12X12</td><td>28.55</td></tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6 mb-4">
  <h4 style={{ textAlign: 'center', fontSize: '2.1rem', color: '', fontWeight: 'bold', marginTop: '1rem' }}>MS I BEAM</h4>
  <table class="table table-bordered text-center">
    <thead class="table-dark">
      <tr>
        <th>SIZE</th>
        <th>wt, kg/ft</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>4x2x1/4</td><td>2.45</td></tr>
      <tr><td>5x2-1/2x3/16</td><td>2.85</td></tr>
      <tr><td>6x3x1/4</td><td>5.05</td></tr>
      <tr><td>8x4x1/4</td><td>6.65</td></tr>
      <tr><td>8x4x3/8</td><td>8.25</td></tr>
      <tr><td>10x5</td><td>12.55</td></tr>
      <tr><td>12x5</td><td>14.55</td></tr>
      <tr><td>12x6</td><td>16.55</td></tr>
      <tr><td>14x6</td><td>24.05</td></tr>
      <tr><td>16x6</td><td>28.05</td></tr>
      <tr><td>18x7</td><td>34.95</td></tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default MetalTable;
