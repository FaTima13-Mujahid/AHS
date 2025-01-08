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
   const msflat = [
    { size: "4x1/8", weight: 0.895 },
    { size: "x3/16", weight: 0.144 },
    { size: "4x1/8", weight: 0.145 },
    { size: "x3/16", weight: 0.217 },
    { size: "%x%", weight: 0.289 },
    { size: "1x1/8", weight: 0.191 },
    { size: "1x3/16", weight: 0.289 },
    { size: "1x4", weight: 0.385 },
    { size: "1x3/8", weight: 0.581 },
    { size: "1x1/8", weight: 0.241 },
    { size: "1x3/16", weight: 0.362 },
    { size: "0.481", weight: null },
    { size: "1x3/8", weight: 0.722 },
    { size: "15x1/8", weight: 0.291 },
    { size: "1x3/16", weight: 0.431 },
    { size: "0.581", weight: null },
    { size: "1x3/8", weight: 0.866 },
    { size: "1.156", weight: null },
    { size: "2x1/8", weight: 0.385 },
    { size: "2x3/16", weight: 0.581 },
    { size: "2x%", weight: 0.771 },
    { size: "2x3/8", weight: 1.156 },
    { size: "2x%", weight: 1.542 },
    { size: "2x3/16", weight: 0.721 },
    { size: "2%x%", weight: 0.966 },
    { size: "2%x5/16", weight: 1.206 },
    { size: "2x3/8", weight: 1.447 },
    { size: "2%x%", weight: 1.928 },
    { size: "2%x%", weight: 2.894 },
    { size: "3x%", weight: null },
    { size: "3x3/8", weight: 1.156 },
    { size: "1.737", weight: null },
    { size: "3x%", weight: 2.313 },
    { size: "3x5/8", weight: 2.894 },
    { size: "3x%", weight: 3.471 },
    { size: "3x1", weight: 4.627 },
    { size: "4x%", weight: 1.542 },
    { size: "4x5/16", weight: 1.928 },
    { size: "4x3/8", weight: 2.313 },
    { size: "4x%", weight: 3.085 },
    { size: "4x5/8", weight: 3.856 },
    { size: "4x%", weight: 4.627 },
    { size: "4x1", weight: 6.171 },
    { size: "5x%", weight: 1.929 },
    { size: "5x3/8", weight: 2.895 },
    { size: "5x%", weight: 3.857 },
    { size: "5x5/8", weight: 4.824 },
    { size: "5x%", weight: 5.785 },
  ];
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Metal Weight Chart</h2>

      {/* Tables Section */}
      <div className="row">
        {/* Table 1: MS ANGLES */}
        <div className="col-md-6 mb-4">
          <h4>MS ANGLES</h4>
          <table className="table table-bordered">
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
        <div className="col-md-6 mb-4">
          <h4>MS FLAT / STRIP</h4>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
             {msflat.map((row, index) => (
            <tr key={index}>
              <td>{row.size}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        {/* Table 3: MS PLATE / SHEET */}
        <div className="col-md-6 mb-4">
          <h4>MS PLATE / SHEET</h4>
          <table className="table table-bordered ">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/sheet</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>8x4x16g (0.50)</td><td>11.63</td></tr>
              <tr><td>8x4x12g (0.79)</td><td>18.48</td></tr>
              <tr><td>8x4x10g (1.00)</td><td>23.77</td></tr>
              <tr><td>8x4x8g (1.29)</td><td>30.52</td></tr>
              <tr><td>8x4x6g (1.90)</td><td>44.45</td></tr>
            </tbody>
          </table>
        </div>

        {/* Table 4: MS CHANNEL */}
        <div className="col-md-6 mb-4">
          <h4>MS CHANNEL</h4>
          <table className="table table-bordered ">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2"x1"</td><td>2.268</td></tr>
              <tr><td>3"x1-1/4"</td><td>3.899</td></tr>
              <tr><td>4"x1-1/2"</td><td>5.423</td></tr>
              <tr><td>5"x2"</td><td>7.779</td></tr>
              <tr><td>6"x2-1/2"</td><td>10.502</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        {/* Table 5: MS SQUARE BAR */}
        <div className="col-md-6 mb-4">
          <h4>MS SQUARE BAR</h4>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>3/8"</td><td>0.526</td></tr>
              <tr><td>1/2"</td><td>0.934</td></tr>
              <tr><td>5/8"</td><td>1.461</td></tr>
              <tr><td>3/4"</td><td>2.104</td></tr>
              <tr><td>7/8"</td><td>2.865</td></tr>
            </tbody>
          </table>
        </div>

        {/* Table 6: MS ROUND BAR */}
        <div className="col-md-6 mb-4">
          <h4>MS ROUND BAR</h4>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>SIZE</th>
                <th>wt, kg/ft</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ROUND 1/4</td><td>0.526</td></tr>
              <tr><td>ROUND 3/8</td><td>0.934</td></tr>
              <tr><td>ROUND 1/2</td><td>1.461</td></tr>
              <tr><td>ROUND 5/8</td><td>2.104</td></tr>
              <tr><td>ROUND 3/4</td><td>2.865</td></tr>
              <tr><td>ROUND 7/8</td><td>2.865</td></tr>
              <tr><td>ROUND1</td><td>2.865</td></tr>
              <tr><td>ROUND </td><td>2.865</td></tr>
              <tr><td>ROUND</td><td>2.865</td></tr>
              <tr><td>ROUND</td><td>2.865</td></tr>

            </tbody>
          </table>
        </div>
      </div>

     

      <div className="row">
        {/* Table 9: I-BEAM */}
        <div className="col-md-12 mb-4">
          <h4>MS H BEAM</h4>
          <table className="table table-bordered">
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
      </div>
    </div>
  );
};

export default MetalTable;
