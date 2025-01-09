import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomSlider = () => {
  // State to keep track of the current slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array of image data
  const images = [
    {
      url: require("../img/gallery/homee.jpg"),
     
      title: "The Backbone of Industry, The Heart of Innovation.",
    },
    {
      url: "https://media.istockphoto.com/id/1390249924/photo/industrial-plant-for-the-production-of-sheet-metal-in-a-steel-mill-storage-of-sheet-rolls.jpg?s=612x612&w=0&k=20&c=9g5S8FB15_JvdCzRFDhzamHSd7pjz_0lTBCl4L66TGM=",
      title: "Strength in Every Steel Beam",
    },
    {
      url: "https://media.istockphoto.com/id/1344231216/photo/rolled-metal-warehouse-many-packs-of-metal-bars-on-the-shelves.jpg?s=612x612&w=0&k=20&c=NdBJpn98jT43UXxRMv-R1gVwynBq-2nQGmJVLx4bCxc=",
      title: "Quality Steel for Every Need",
    },
    
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="custom-slider-container">
      <div
        className="custom-slider"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: index === currentIndex ? 1 : 0,
              transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
              transition: "opacity 0.5s ease-in-out, transform 10s ease-in-out",
            }}
          >
            {/* Slide content */}
            <div
              className="slide-content"
              style={{ position: "absolute", bottom: "20%", left: "10%" }}
            >
              <h1
                style={{
                  color: "white",
                  fontSize: "40px",
                  fontWeight: "500",
                  backgroundColor: "rgba(39, 39, 39,0.7)",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  width: "340px", // Box ka width set kar diya
                  textAlign: "center", // Text ko center align kiya
                }}
              >
                {image.title}
              </h1>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="prev-btn"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            fontSize: "20px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          &#60;
        </button>
        <button
          onClick={nextSlide}
          className="next-btn"
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            fontSize: "20px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
