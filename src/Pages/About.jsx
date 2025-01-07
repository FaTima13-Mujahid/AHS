import React from "react";
import { useState } from "react";

const About = () => {
    const [hovered, setHovered] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "500px",
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
    transform: hovered ? "scale(1.1)" : "scale(1)",
  };
  return (
    <main>
      {/* Hero Section */}
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
          backgroundImage: 'url(https://www.shutterstock.com/image-photo/black-white-dark-gray-silver-600nw-2430513289.jpg)',
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
                  About Us
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

      {/* Services Section */}
 
      {/* About Foundation Section */}
      <section className="about-low-area section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <div className="about-caption mb-50">
           <div className="section-tittle mb-35">
  <span>About Al Hadeed Steel</span>
  <h2>Building the Future with Strength and Durability</h2>
</div>
<p>
  At Al Hadeed Steel, we are committed to providing top-quality steel solutions
  that empower industries and infrastructure. With a legacy of excellence and innovation, we deliver unmatched strength and reliability.
</p>
<p>
  Our mission is to set new benchmarks in the steel industry, ensuring customer satisfaction through superior products and dedicated service.
</p>

              </div>
              <a href="about.html" className="btn">
                About US
              </a>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <div className="about-font-img d-none d-lg-block">
                  {/* <img src="assets/img/gallery/about2.png" alt="" /> */}
                </div>
               <div
      style={containerStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="https://ahfed.org.iq/wp-content/uploads/2024/07/industry.webp"
        alt="Industry"
        style={imageStyle}
      />
    </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    



  


    
    </main>
  );
};

export default About;
