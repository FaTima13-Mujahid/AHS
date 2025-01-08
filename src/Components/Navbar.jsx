import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";  // Import NavLink instead of Link
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
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo} // Replace 'logo' with your actual logo import
            alt="Logo"
            style={{
              width: "150px", // Adjust logo size if needed
              height: "auto",
            }}
          />
        </NavLink>

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
            {/* Use NavLink instead of Link */}
            <NavLink
              className="nav-item nav-link"
              to="/"
              style={({ isActive }) => ({
                marginRight: "20px",
                color: isActive ? "white" : "", // Active link color set to white
              })}
            >
              Home
            </NavLink>

            <NavLink
              className="nav-item nav-link"
              to="/product"
              style={({ isActive }) => ({
                marginRight: "20px",
                color: isActive ? "white" : "",
              })}
            >
              Product
            </NavLink>

            <NavLink
              className="nav-item nav-link"
              to="/standard"
              style={({ isActive }) => ({
                marginRight: "20px",
                color: isActive ? "white" : "",
              })}
            >
              Standard
            </NavLink>

            <NavLink
              className="nav-item nav-link"
              to="/calculator"
              style={({ isActive }) => ({
                marginRight: "20px",
                color: isActive ? "white" : "",
              })}
            >
              Calculator
            </NavLink>

            <NavLink
              className="nav-item nav-link"
              to="/about"
              style={({ isActive }) => ({
                marginRight: "20px",
                color: isActive ? "white" : "",
              })}
            >
              About Us
            </NavLink>
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
