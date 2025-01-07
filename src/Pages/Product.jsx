import React from "react";
// import { useHistory } from "react-router-dom";  // Importing useHistory hook for navigation
import ProductCard from "../Components/ProductCard"; // Importing the ProductCard component

const Product = () => {

  const products = [
    {
      image:
        "https://images.ctfassets.net/o0otttl8ele8/2EimCvPzHkxTNkMUKqsmlW/ac67b7d4857d43a05ec2d0873b04dc9a/Hot-Rolled-Steel-Embodying-Ductility-min.jpg",
      title: "Hot Rolled Coils & Sheet",
      
      description:
        "A finished steel product such as sheet or strip, which is wound or coiled after rolling. A flat rolled product over 12 inches in width and of less thickness than plate. Hot rolled sheets are manufactured at elevated temperatures on rolling mills, producing material resistant to work hardening and exhibiting reduced levels of deformation residual stress.",
       links: "/Hotrolled"
       
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
        {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKB-MsBjxcRDto_lL_z0vU7QziDXKEqNGUng&s",
      title: "Boiler Plates",
      description:"Boiler Quality Steel is a group of steels that are used in various industries for the fabrication of boilers and pressure vessels. When steel is described as boiler quality steel, it is suitable for use in various containers to withstand high pressures. These steels are also known as pressure vessel steel, PV plate, or boiler plate. The manufacturing of pressure vessels is strictly regulated since these vessels often contain volatile substances and, if improperly designed, fabricated, operated, or maintained, can act as a large explosive device. Some key sources of regulation include the EU's Pressure Equipment Directive (PED), PD5500, the National Board, and the ASME Pressure Vessel Code in the US. Additionally, classification societies such as Lloyds, DNV, and TÜV often certify both the boiler quality steel plates and the pressure vessels manufactured. In the EU, the primary standard for boiler quality plates is EN10028, which pertains to flat products made of steels for pressure purposes. EN10028 consists of seven parts and covers a wide range of boiler-quality steel grades. In the US, the ASTM publishes numerous standards, many of which are harmonized with the ASME standards. Common boiler quality steel standards include ASME/ASTM SA/A 516 and ASME/ASTM SA/A387. The EN10028 standard harmonizes several older national standards across the European Union, replacing requirements from BS 1501 and DIN 17155 steels. These steels, also referred to as pressure vessel plate, boiler steel, or tank plate, are crucial for constructing safe and reliable pressure systems." ,
    links: "/Boilerplates"
    },
    
    
      {
      image: "https://www.apex-steel.com/wp-content/uploads/2018/05/zenith-steel-pipes-pre-galvanized-pipes-1.jpg",
       title: "Galvanized Products",
      description: "Galvanized steel is produced by coating hot or cold-rolled sheet or strip with zinc to protect against corrosion. This coating is applied through methods such as hot-dip galvanizing, where steel is immersed in molten zinc to create a thick, durable layer with a crystalline finish, or electrogalvanizing, which uses an electrolyte solution to deposit a thinner zinc coating suited for mild conditions. Other processes include sherardizing (zinc dust coating under heat), metallic spraying (molten zinc application), and painting (zinc-rich protective layers). Galvanized steel is widely used in construction (roofing, cladding, HVAC systems), electrical appliances (washing machines, refrigerators), automotive parts (doors, fenders), domestic appliances (water tanks, coolers), and various other industries like furniture and road signage. Its primary advantage is effective corrosion resistance, making it a versatile material for diverse applications.",
      links: "/Galvanizedsheet"
   
    },
     {
      image: "https://www.apnsteel.com/assets/images/ms-pipes.jpg",
       title: "MS Pipes",
      description: " Mild steel is the most affordable type of steel and the most commonly used in various applications. It is highly versatile, weldable, and durable, although it tends to rust easily. Comprising a maximum of 0.29% carbon, mild steel can be magnetized and is suitable for projects requiring large amounts of metal. However, its   ",
      links: "/Mspipe"
   
    },
     {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIUshVqcaxE6HVJaEI6xFXd1B7dPmKEB4uA&sg",
       title: "Cold Rolled Coils & Sheets",
      description: "  Cold rolled coils and sheets, also referred to as cold reduced coils, CRC (Cold Rolled Coils), or flat steel products, are finished steel products processed to achieve superior surface quality and precise dimensions. These products are produced by passing a hot rolled sheet or strip, previously pickled to remove scale, through cold rolls below the metal's recrystallization temperature. The cold rolling process enhances the material's surface finish, uniformity, and strength, making it suitable for high-end applications. ",
      links: "/ColdRolled"
   
    },
     {
      image: "https://supremepipe.com/wp-content/uploads/2020/12/Corrosion-Resistance.jpg",
       title: "GI Pipe ",
      description: "In the early 20th century, galvanized piping replaced cast iron and lead in cold-water plumbing systems. Over time, this type of piping deteriorates from the inside out, accumulating deposits or plaques that can lead to reduced water pressure and eventual pipe failure",
      links: "/Gpipe"
   
    },
       {
      image: "https://www.poscogroup.com/wp-content/uploads/elementor/thumbs/Tin-Plate-Coil-Stock-5-pwocrc7qj33yydhszfsk5yg97q548grruadkqrg4bk.jpg",
       title: "Tin Plate Coils & Sheets",
      description: "Mill products include electrolytic tinplate, electrolytic chromium coated steel (also referred to as tin-free steel or TFS), and black plate, the uncoated steel. About 90% of tin mill products made in the world are used by the container industry in the manufacture of cans, ends, and closures for the food and beverage industry. ",
      links: "/TinPlate"
   
    },
    {
      image: "https://reganindustrial.com/wp-content/uploads/2021/05/4-Advantages-of-Round-Bars.jpg",
       title: "MS Round Bars",
      description: "Mill products include electrolytic tinplate, electrolytic chromium coated steel (also referred to as tin-free steel or TFS), and black plate, the uncoated steel. About 90% of tin mill products made in the world are used by the container industry in the manufacture of cans, ends, and closures for the food and beverage industry. ",
      links: "/RoundBars"
   
    },
     {
      image: "https://cdn.prod.website-files.com/5efc68bf10ea70b35b1af7a0/608ffbfe8552e16a36ab437a_76df5e9d.jpeg",
       title: "MS Deformed Bar",
      description: "Deformed steel bars are rods of steel that are designed with lugs, ribs, or other surface deformations. These modifications reduce slippage within concrete and enhance the bond between the two materials, thereby improving the overall strength and performance of reinforced concrete. Deformed bars have a higher tensile strength than mild steel plain bars, making them ideal for structural applications where strength is paramount.",
      links: "/DeformedBars"
   
    },
        {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKuOv_OD9010KN_PPM5WLZpsZmuLEIJZh7Q&s",
       title: "MS Rail",
      description: "The track on a railway or railroad, also known as the permanent way, is the structure consisting of the rails, fasteners, railroad ties (or sleepers in British English) and ballast (or slab track), along with",
      links: "/MsRail"
   
    },

      {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QrD2xuV2bE0x9MiTQ_r2tMiTlA2l75UAaA&s",
      title: "MS Flat",
      description: "Flat bars are a flat, rectangular section with square edges varying in sizes. This cost-effective steel product is suitable for a wide variety of applications and is distributed into the construction",
      links: "/MsFlat"
   
    },
    
    {
      image: "https://www.kksteel.com.pk/wp-content/uploads/2013/01/ms_chequered_plate.png",
      title: "Galvanized & PPGI Corrugated Sheet",
      description: "Corrugated galvanised iron or steel (colloquially corrugated iron or pailing (in Caribbean English), corrugated sheet metal (in North America), occasionally abbreviated CGI) is a building material composed of ",
       links: "/Ppgi"
    },  
      {
      image: "https://5.imimg.com/data5/SELLER/Default/2024/2/383462471/RU/VS/HA/34697253/color-coated-sheet-coil.jpg",
      title: "Color Coils & Sheet",
      description: "Galvanized sheet or coil refers to carbon steel sheets coated with zinc on both sides, produced through either hot-dipping or electro-galvanizing processes. In hot-dipping, steel is passed through a bath of molten zinc, while electro-galvanizing applies zinc through electrolytic deposition, creating a strong iron-zinc bond. Zinc serves as an effective and economical barrier, protecting steel from corrosion, and through sacrificial protection, it corrodes preferentially to the steel, minimizing rust spread on uncoated areas. Hot-dipped galvanized and galvannealed products meet ASTM A-653 and ASTM A-879 standards, with various material types, such as Commercial Steel (CS), Forming Steel (FS), Deep Drawing Steel (DDS), and High Strength Low Alloy Steel (HSLAS). Available in coatings like G-90, G-60, G-40, G-30, and A-60, A-40, these materials may also be painted for additional protection. Synonyms include zinc-coated steel, galvanized metal, and corrosion-resistant steel.",
 links: "/Colorcoilsheets "
    },
        {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueyACLBI0ulHXdGSD9m90gAyb5U2kc9QIMQ&s",
      title: "H Beam, I Beam",
      description:"A beam is a structural element designed to withstand loads primarily by resisting bending, induced by external loads, its own weight, span, and external reactions. Beams are defined by their shape, length, and material. An I-beam, also called an H-beam, W-beam, Universal Beam (UB), Rolled Steel Joist (RSJ), or double-T, has a cross-section in the shape of an 'I' or 'H'. The I-beam is characterized by flanges and a web, where the web resists shear forces and the flanges carry the bending moment. H-beams have wider flanges than I-beams, making them heavier but stronger. I-beams are typically lighter and have tapered edges, making them ideal for certain applications. HEB beams are European standard wide flange H steel beams conforming to various standards like DIN 1025, Euronorm 53-62, and EN 10034:1993",
     links: "/Hbeam"
    },
    
      {
      image: "https://image.made-in-china.com/2f0j00UebTKDnsrczy/Z-Section-Steel-Z-Profiled-Purlin-XGZ-4-.webp",
       title: "Z Section",
      description: "The roll-formed Z-section is commonly used as a wall girt or roof purlin in structural systems. It is made from materials with thicknesses ranging from 16 ga (0.060 in) to 10 ga (0.135 in), and the standard section widths vary from 6” to 14”. Z-sections typically have custom hole punching, notching, and dimensioning capabilities. For example, a Z-section with a depth of 232mm and thickness of 1.8mm would be referred to as 232 Z 18, where 232 indicates the depth in millimetres, Z represents the profile type, and 18 indicates the material thickness in millimetres. Sleeves used with these sections are referenced similarly, with 'PS' indicating a standard sleeve and 'HEBS' indicating a heavy end bay sleeve. All Metsec Z-sections are made from pre-hot-dipped galvanized steel (G275 coating) with a minimum yield strength of 450 N/mm².",
   links: "/Zsection "
   
    },
       {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFgkdrwJbJjTOroOYQwepGcvWH4b6rsnB7Q&s",
       title: "Ms Angle",
      description: "MS Angles, also known as L-shaped structural steel, are represented by",
   links: "/MsAngle"
    },
      {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFgkdrwJbJjTOroOYQwepGcvWH4b6rsnB7Q&s",
       title: "MS Channel",
      description: "MS Angles, also known as L-shaped structural steel, are represented by",
   links: "/MsChannel"
   
    },
    //-----------
    
       
  ];

  return (
    <main>
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/1415177406/vector/metal-plate-banner-or-military-armor.jpg?s=612x612&w=0&k=20&c=87FNVTImycWLaHe_UnJ8GzNpScAYF_LL3AjlpT0B8nY=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust height as required
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              {/* Section Title */}
              <div className="section-tittle text-center mb-80 text-white">
                <h2
                  style={{
                    fontSize: "3rem", // Larger font size
                    fontWeight: "700", // Bold font weight
                    textTransform: "uppercase", // Make it all uppercase for emphasis
                    letterSpacing: "2px", // Increase letter spacing for better readability
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", // Soft text shadow for a clean effect
                  }}
                >
                  Our Products
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem", // Adjusted for better readability
                    color: "#f8f8f8", // Light color for contrast against the dark background
                    fontWeight: "400", // Lighter weight for description text
                    maxWidth: "600px", // Limit the width for the text block
                    margin: "0 auto", // Center the paragraph
                  }}
                >
                  Explore our premium quality steel products that cater to various construction and industrial needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section */}
      <div className="our-cases-area section-padding30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
              {/* Section Title */}
              <div className="section-tittle text-center mb-80">
                <span>Al Hadeed Steel Products</span>
                <h2>High-quality steel products for construction and industry.</h2>
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
    </main>
  );
};

export default Product;
