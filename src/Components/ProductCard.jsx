import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, description, links }) => {
  const navigate = useNavigate();

  const imageStyle = {
    height: "200px", // Fixed height
    width: "100%", // Full width of the container
    objectFit: "cover", // Ensures the image fits without distortion
    borderRadius: "8px", // Optional: Add rounded corners to the image
  };

  const handleReadMore = () => {
    navigate(links); // Navigate to the provided link
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-6" style={{ textAlign: "center" }}>
      <div className="single-cases mb-40">
        <div className="cases-img">
          <img src={image} alt={title} style={imageStyle} />
        </div>
        <div className="cases-caption">
          <h3>
            <a href="#">{title}</a>
          </h3>
          <p>{description.slice(0, 100)}...</p> {/* Show preview of the description */}
          <button className="btn mt-3" onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
