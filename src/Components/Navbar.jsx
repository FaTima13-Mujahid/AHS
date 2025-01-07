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
<div className="container-fluid">
  <div className="row d-flex justify-content-between align-items-center">
    <div className="header-info-left d-flex align-items-center">
      {/* Phone */}
      <ul className="d-flex m-0 p-0">
        <li className="mr-3">Phone: +92 331 3711376</li>
        <li className="mr-3">|</li> {/* Pipe separator */}
        <li className="mr-3">Email: ahs@gmail.com</li>
      </ul>

      {/* Social Icons */}
      <div className="header-social d-flex ml-3">
        <ul className="d-flex m-0 p-0">
          <li className="mr-3">
            <a
              href="https://www.linkedin.com/company/alhadeedsteel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" style={{ color: "#0077B5" }}></i>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="https://www.instagram.com/alhadeedsteel?igsh=MWlscmx1dnJqOWI0bA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" style={{ color: "#E1306C" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="header-info-right d-flex align-items-center">
      {/* Language Selection Dropdown */}
      <div className="language-dropdown mr-3">
        <form action="#">
          <div className="select-items">
            <select
              name="select"
              id="select1"
              className="language-select"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid #fff",
              }}
            >
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Arabic</option>
              <option value="">Hindi</option>
            </select>
          </div>
        </form>
      </div>

      {/* Pipe separator */}
      <div className="separator" style={{ margin: "0 10px", color: "#fff" }}>|</div>

      {/* Subscribe Button */}
      <ul className="contact-now ml-3">
        <li>
          <a
            href="#"
            className="subscribe"
            style={{
              color: "#fff",
              backgroundColor: "#444", // Dark button background
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Subscribe Now
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

<nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
  backgroundColor: "#000", // Navbar background
  color: "#fff", // Font color
}}>
  {/* Logo */}
  <a className="navbar-brand" href="/">
    <img
      src={logo} // Replace 'logo' with your actual logo import
      alt="Logo"
      style={{
        width: "150px", // Adjust logo size if needed
        height: "auto",
      }}
    />
  </a>
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
      <a className="nav-item nav-link active" href="#" style={{ marginRight: "20px" }}>
        Home <span className="sr-only">(current)</span>
      </a>
     
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
