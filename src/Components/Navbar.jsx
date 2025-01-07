import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../img/logo/logo.jpeg";

const Navbar = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');  // This will redirect to the Contact page
  };
  return (
    <>


<nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
  backgroundColor: "#000", // Navbar background
  color: "#fff", // Font color
}}>
  {/* Logo */}
  <Link className="navbar-brand" to="/">
    <img
      src={logo} // Replace 'logo' with your actual logo import
      alt="Logo"
      style={{
        width: "150px", // Adjust logo size if needed
        height: "auto",
      }}
    />
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" style={{ marginRight: "auto", marginLeft: "auto" }}>
      <Link className="nav-item nav-link active" to="/" style={{ marginRight: "20px" }}>
        Home <span className="sr-only">(current)</span>
      </Link>
     
      <Link className="nav-item nav-link" to="Product" style={{ marginRight: "20px" }}>
        Product
      </Link>
      {/* Dropdown
      <div className="nav-item dropdown" style={{ marginRight: "20px" }}>
        <a
          className="nav-link"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          More
        </a>
        <div
          className="dropdown-menu"
          aria-labelledby="navbarDropdown"
          style={{
            backgroundColor: "rgba(39, 39, 39,0.7)", // Transparent background
            color: "#fff", // White text color
          }}
        >
          <a className="dropdown-item" href="#" style={{ color: "#fff" }}>
            Action
          </a>
          <a className="dropdown-item" href="#" style={{ color: "#fff" }}>
            Another action
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" style={{ color: "#fff" }}>
            Something else here
          </a>
        </div>
      </div> */}
      {/* <a className="nav-item nav-link" href="#" style={{ marginRight: "30px" }}>
        Pricing
      </a>
      <a className="nav-item nav-link disabled" href="#" style={{ marginRight: "30px" }}>
        Disabled
      </a> */}
     
       <Link className="nav-item nav-link" to="Standard" style={{ marginRight: "20px" }}>
        Standard
      </Link>
       <Link className="nav-item nav-link" to="Calculator" style={{ marginRight: "20px" }}>
        Calculator
      </Link>
       <Link className="nav-item nav-link" to="About" style={{ marginRight: "20px" }}>
        About Us
      </Link>
    </div>
    {/* Add Button at the end */}
    <button
      className="btn btn-primary"
       onClick={handleClick}  // Trigger the navigation on button click
      style={{
        padding: "10px 20px", 
        backgroundColor: "#444", 
        color: "#fff", 
        borderRadius: "5px",
      }}
    >
      Contact Us
    </button>
  </div>
</nav>

    </>
  );
};

export default Navbar;
