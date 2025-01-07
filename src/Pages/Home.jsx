import React from 'react'
// import EventCard from '../Components/EventCard'

import Slider from '../Components/Slider'
import ProductCard from "../Components/ProductCard"; // Importing the ProductCard component
import Counter from "../Components/Counter"
const Home = () => {
  const products = [
    {
      image:
        "https://images.ctfassets.net/o0otttl8ele8/2EimCvPzHkxTNkMUKqsmlW/ac67b7d4857d43a05ec2d0873b04dc9a/Hot-Rolled-Steel-Embodying-Ductility-min.jpg",
      title: "Hot Rolled Coils & Sheet",
      
      description:
        "A finished steel product such as sheet or strip, which is wound or coiled after rolling. A flat rolled product over 12 inches in width and of less thickness than plate. Hot rolled sheets are manufactured at elevated temperatures on rolling mills, producing material resistant to work hardening and exhibiting reduced levels of deformation residual stress.",
       links: "/hotrolled"
       
      },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6eU8EIfm9ywNPj3sL2CfbVn2ruYBmfJTqQ&s",
       title: "MS Plates",
      description: "A flat rolled product derived from slabs or ingots, with a thickness greater than that of sheets or strips. Hot Rolled Steel Plates are predominantly utilized in the construction of bridges, highway infrastructure, and various other engineering projects due to their durability and strength. Pipeline & Oil Tank Steel Plates, known for their high resistance to pressure and corrosion, are extensively employed in the petroleum and natural gas industries for applications such as pipelines, storage tanks, and pressure vessels. Common uses of A36 Steel Plates include shim plates, gusset plates, bridge components, bearing plates, robot bases, column base plates, press parallels, press platens, tooling plates, machine frames, pedestals, steel table tops, base plates, and mold and die components. These plates are preferred for their versatility, weldability, and strength-to-weight ratio, making them ideal for various structural and mechanical applications. SS400 Steel Sheets, a high-quality structural steel, are widely applied in the construction of bridges, highway infrastructure, and diverse engineering works due to their excellent mechanical properties and cost-efficiency. Weather-Resistant Steel Plates, often referred to as corten steel or atmospheric corrosion-resistant steel, are highly sought after for applications in vehicles, bridges, towers, containers, and other structures exposed to harsh weather conditions. Their ability to form a protective patina layer over time enhances their lifespan and reduces the need for maintenance, making them a sustainable choice.",
     links: "/msplates"
    },
    {
      image: "https://www.kksteel.com.pk/wp-content/uploads/2013/01/ms_chequered_plate.png",
      title: "Chequer Plate",
      description: "Chequer Plate, also known as checker plate, tread plate, durbar plate, or diamond plate, features a regular pattern of raised projections on one side, often in diamond, tear drop, or linear shapes, with the reverse side being smooth. It is commonly made from materials like mild steel, stainless steel, or aluminum, providing versatility for various applications. Variants include tear drop mild steel chequered plates, diamond-shaped mild steel chequered plates, and embossed mild steel plates. Due to its raised patterns, chequer plate offers excellent anti-slip properties, making it skid-resistant. This characteristic, combined with its high wear resistance, durability, and self-draining surface, makes it an ideal choice for applications where safety and functionality are paramount.",
    links: "/Chequeredplates"
    
    },
   
    
    
  ];
    return (
        <>            {/* background-image:url(../img/hero/hero_arrow.png) */}
            <main>
                {/* <!-- slider Area Start--> */}
               <Slider/>
          
         <div className="our-cases-area section-padding30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
              {/* Section Title */}
              <div className="section-tittle text-center mb-80">
                {/* <span>Al Hadeed Steel Products</span> */}
                <h2>High-quality steel products</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description.slice(0, 100) + "..."} // Show short description
                  links={product.links}
              />
            ))}
          </div>

         
        </div>
      </div>
           
        
       
                {/* <!--? Count Down Start --> */}
               <Counter/>
                {/* <!-- Count Down End --> */}
            </main>
        </>
    )
}

export default Home
