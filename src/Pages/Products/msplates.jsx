
import ProBg from "./proBg.jpg"
const msplates = () => {
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
                <h2>Ms Plates </h2>
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
                  A flat rolled product derived from slabs or ingots that are thicker than sheets or strips. Hot Rolled Steel Plate is primarily used in the construction of bridges, highway infrastructure, and various other engineering applications due to its durability and versatility. It is produced by rolling the material at high temperatures, making it more malleable and allowing for large dimensions to be achieved efficiently.

Pipeline & Oil Tank Steel Plate is widely utilized in the petroleum and gas industry, offering reliable strength and resistance to high-pressure conditions. These plates are essential for the construction of pipelines, storage tanks, and other critical components in the oil and gas sector. Their high tensile strength and corrosion resistance make them ideal for harsh environments.

Common applications of A36 Steel Plate include shim plates, gusset plates, bridge plates, bearing plates, robot bases, column base plates, press parallels, press platens, tooling plates, machine plates, machine frames, pedestals, steel table tops, base plates, mold & die plates, machine mounting plates, and other heavy-duty equipment. The versatility of A36 allows it to be used in a wide range of industries, including automotive, construction, and manufacturing.

SS400 Steel Sheets are frequently employed in the construction of bridges, highway construction, and various engineering projects, offering excellent weldability and strength. These sheets are designed for heavy-duty structural applications where safety and durability are paramount.

Weather Resistant Steel Plate is extensively used in the construction of vehicles, bridges, towers, containers, and other structures that are exposed to varying weather conditions. This type of steel plate is designed to resist corrosion and oxidation, making it ideal for outdoor applications where materials are subjected to environmental factors such as rain, snow, and UV radiation. It is commonly used in transportation and infrastructure projects that require materials that can endure long-term exposure to the elements without degrading. </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default msplates;
