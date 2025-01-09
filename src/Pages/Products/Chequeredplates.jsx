import React, { useEffect } from 'react';
import ProBg from "./proBg.jpg"
const Chequeredplates = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);
  return (
    <div>
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
           backgroundImage: `url(${ProBg})`,
           backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',  // Adjust the height here
        }}
      >
        <div className="container">
          <div className="row justify-content">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              {/* Section Title */}
              <div className="section-tittle text-left mb-80">
                <h2>Chequer plates </h2>
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
Chequer plate is a type of steel plate characterized by a regular pattern of projections, typically diamond-shaped or other patterns, on one side, while the opposite side remains smooth. This type of plate can also be referred to as checker plate, diamond plate, or embossed plate. The projections on the surface provide excellent skid resistance, making it slip-resistant and ideal for use in environments where traction is important. In some cases, it is also known as tear-drop plate due to the shape of its raised pattern.

Chequer plate is commonly manufactured from materials like mild steel, stainless steel, or aluminum, making it versatile and suitable for a variety of applications. The raised pattern not only enhances the aesthetic appeal but also increases the durability and wear resistance of the plate, providing a long-lasting surface that can withstand heavy use. Additionally, the projections help with self-draining, allowing for better water drainage on the surface.

Due to its skid-proof properties, chequered plate is widely used in industries where safety and durability are a concern. In the construction sector, it is frequently applied to areas such as stair treads, platforms, walkways, and ramps, offering both functional and decorative advantages. The plate is also used extensively in the automotive industry, particularly in flooring and side panels, as well as in agricultural machinery where traction and safety are critical.

In industrial enterprises, chequered plate is often used in workshops, staircases, catwalks, and elevated platforms to protect workers and prevent accidents. It is particularly useful in environments where heavy traffic or machinery is common. The durability and slip resistance of chequer plate make it a preferred choice for applications that require a high-strength and safe surface.

In addition to its functional use, chequered plate has become a popular material for decorative purposes. Many modern designs incorporate it in interior décor and exterior installations, with its unique texture adding a fashionable and industrial-chic touch to both residential and commercial spaces. Architects and designers use chequered plate as a stylish element in wall cladding, furniture, and flooring, blending form and function for visually striking results.

Overall, the chequered plate serves a wide range of industries, including construction, automotive, marine, agriculture, and decorative design, all while offering safety, strength, slip resistance, and appeal.

 </p>
                
              </div>
            </div>
          </div>
                <div className="container my-4">
            <h2 className="text-center mb-4">Theoretical Weight Table</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th rowSpan="2">Thickness (mm)</th>
                            <th colSpan="3">1219mm x 2438mm</th>
                            <th colSpan="3">1524mm x 3048mm</th>
                            <th colSpan="3">1829mm x 6096mm</th>
                        </tr>
                        <tr>
                            <th>kg/pc</th>
                            <th>lb/pc</th>
                            <th>pcs/mt</th>
                            <th>kg/pc</th>
                            <th>lb/pc</th>
                            <th>pcs/mt</th>
                            <th>kg/pc</th>
                            <th>lb/pc</th>
                            <th>pcs/mt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3.0</td>
                            <td>75.069</td>
                            <td>165.497</td>
                            <td>13.3</td>
                            <td>117.336</td>
                            <td>258.679</td>
                            <td>8.5</td>
                            <td>281.623</td>
                            <td>620.866</td>
                            <td>3.6</td>
                        </tr>
                        <tr>
                            <td>4.5</td>
                            <td>110.063</td>
                            <td>242.645</td>
                            <td>9.1</td>
                            <td>172.033</td>
                            <td>379.264</td>
                            <td>5.8</td>
                            <td>412.909</td>
                            <td>910.299</td>
                            <td>2.4</td>
                        </tr>
                        <tr>
                            <td>6.0</td>
                            <td>145.058</td>
                            <td>319.795</td>
                            <td>6.9</td>
                            <td>226.730</td>
                            <td>499.849</td>
                            <td>4.4</td>
                            <td>544.195</td>
                            <td>1199.732</td>
                            <td>1.8</td>
                        </tr>
                        <tr>
                            <td>7.5</td>
                            <td>180.052</td>
                            <td>396.943</td>
                            <td>5.6</td>
                            <td>281.426</td>
                            <td>620.432</td>
                            <td>3.6</td>
                            <td>675.482</td>
                            <td>1489.168</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td>8.0</td>
                            <td>191.717</td>
                            <td>422.659</td>
                            <td>5.2</td>
                            <td>299.659</td>
                            <td>660.628</td>
                            <td>3.3</td>
                            <td>719.244</td>
                            <td>1585.646</td>
                            <td>1.4</td>
                        </tr>
                        <tr>
                            <td>9.0</td>
                            <td>215.046</td>
                            <td>474.090</td>
                            <td>4.7</td>
                            <td>336.123</td>
                            <td>741.017</td>
                            <td>3.0</td>
                            <td>806.768</td>
                            <td>1778.601</td>
                            <td>1.2</td>
                        </tr>
                        <tr>
                            <td>10.0</td>
                            <td>238.376</td>
                            <td>525.524</td>
                            <td>4.2</td>
                            <td>372.587</td>
                            <td>821.405</td>
                            <td>2.7</td>
                            <td>894.292</td>
                            <td>1971.556</td>
                            <td>1.1</td>
                        </tr>
                        <tr>
                            <td>11.0</td>
                            <td>261.705</td>
                            <td>576.955</td>
                            <td>3.8</td>
                            <td>409.052</td>
                            <td>901.796</td>
                            <td>2.4</td>
                            <td>981.817</td>
                            <td>2164.514</td>
                            <td>1.0</td>
                        </tr>
                        <tr>
                            <td>12.0</td>
                            <td>285.035</td>
                            <td>628.388</td>
                            <td>3.5</td>
                            <td>481.981</td>
                            <td>982.185</td>
                            <td>2.2</td>
                            <td>1069.341</td>
                            <td>2357.469</td>
                            <td>0.9</td>
                        </tr>
                        <tr>
                            <td>13.0</td>
                            <td>308.365</td>
                            <td>679.821</td>
                            <td>3.2</td>
                            <td>518.445</td>
                            <td>1062.575</td>
                            <td>2.1</td>
                            <td>1156.876</td>
                            <td>2550.450</td>
                            <td>0.9</td>
                        </tr>
                        <tr>
                            <td>14.0</td>
                            <td>331.694</td>
                            <td>731.253</td>
                            <td>3.0</td>
                            <td>554.910</td>
                            <td>1142.965</td>
                            <td>1.0</td>
                            <td>1244.401</td>
                            <td>2743.406</td>
                            <td>0.8</td>
                        </tr>
                        <tr>
                            <td>15.0</td>
                            <td>355.024</td>
                            <td>782.686</td>
                            <td>2.8</td>
                            <td>591.374</td>
                            <td>1223.354</td>
                            <td>0.91</td>
                            <td>1331.925</td>
                            <td>2936.362</td>
                            <td>0.8</td>
                        </tr>
                        <tr>
                            <td>16.0</td>
                            <td>378.353</td>
                            <td>834.118</td>
                            <td>2.6</td>
                            <td>630.744</td>
                            <td>1303.744</td>
                            <td>0.8</td>
                            <td>1419.449</td>
                            <td>3129.318</td>
                            <td>0.7</td>
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

export default Chequeredplates;
