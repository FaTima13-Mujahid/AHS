import React, { useEffect } from 'react';
// import EventCard from '../Components/EventCard'

import Slider from '../Components/Slider'
import ProductCard from "../Components/ProductCard"; // Importing the ProductCard component
import Counter from "../Components/Counter"
const Home = () => {  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);

  const products = [
      {
      image: require("../img/products/chequer.png"),
      title: "Chequer Plate",
      description: "Chequer Plate, also known as checker plate, tread plate, durbar plate, or diamond plate, features a regular pattern of raised projections on one side, often in diamond, tear drop, or linear shapes, with the reverse side being smooth. It is commonly made from materials like mild steel, stainless steel, or aluminum, providing versatility for various applications. Variants include tear drop mild steel chequered plates, diamond-shaped mild steel chequered plates, and embossed mild steel plates. Due to its raised patterns, chequer plate offers excellent anti-slip properties, making it skid-resistant. This characteristic, combined with its high wear resistance, durability, and self-draining surface, makes it an ideal choice for applications where safety and functionality are paramount.",
    links: "/Chequeredplates"
    
    },
 {
      image:
        require("../img/products/hot.jpg"),
      title: "Hot Rolled Coils & Sheet",
      
      description:
        "A finished steel product such as sheet or strip, which is wound or coiled after rolling. A flat rolled product over 12 inches in width and of less thickness than plate. Hot rolled sheets are manufactured at elevated temperatures on rolling mills, producing material resistant to work hardening and exhibiting reduced levels of deformation residual stress.",
       links: "/Hotrolled"
       
      },
    
    
      {
      image:  require("../img/products/glavinzed.jpg"),
       title: "Galvanized Products",
      description: "Galvanized steel is produced by coating hot or cold-rolled sheet or strip with zinc to protect against corrosion. This coating is applied through methods such as hot-dip galvanizing, where steel is immersed in molten zinc to create a thick, durable layer with a crystalline finish, or electrogalvanizing, which uses an electrolyte solution to deposit a thinner zinc coating suited for mild conditions. Other processes include sherardizing (zinc dust coating under heat), metallic spraying (molten zinc application), and painting (zinc-rich protective layers). Galvanized steel is widely used in construction (roofing, cladding, HVAC systems), electrical appliances (washing machines, refrigerators), automotive parts (doors, fenders), domestic appliances (water tanks, coolers), and various other industries like furniture and road signage. Its primary advantage is effective corrosion resistance, making it a versatile material for diverse applications.",
      links: "/Galvanizedsheet"
   
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
                <br />
                <br />
                <br />
            </main>
        </>
    )
}

export default Home
