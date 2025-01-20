// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import logo from "../img/logo/logo.jpeg";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const closeNavbar = () => {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarCollapse = document.querySelector('.navbar-collapse');
//     if (navbarCollapse.classList.contains('show')) {
//       navbarToggler.click(); // Programmatically toggle the navbar
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
//         backgroundColor: "#000", // Navbar background
//         color: "#fff", // Font color
//       }}>
//         {/* Logo */}
//         <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
//           <img
//             src={logo}
//             alt="Logo"
//             style={{
//               width: "150px",
//               height: "auto",
//             }}
//           />
//         </NavLink>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav" style={{ marginRight: "auto", marginLeft: "auto" }}>
//             <NavLink
//               className="nav-item nav-link"
//               to="/"
//               onClick={closeNavbar} // Close navbar on click
//               style={({ isActive }) => ({
//                 marginRight: "20px",
//                 color: isActive ? "white" : "",
//               })}
//             >
//               Home
//             </NavLink>

//             <NavLink
//               className="nav-item nav-link"
//               to="/product"
//               onClick={closeNavbar} // Close navbar on click
//               style={({ isActive }) => ({
//                 marginRight: "20px",
//                 color: isActive ? "white" : "",
//               })}
//             >
//               Product
//             </NavLink>

//             <NavLink
//               className="nav-item nav-link"
//               to="/standard"
//               onClick={closeNavbar} // Close navbar on click
//               style={({ isActive }) => ({
//                 marginRight: "20px",
//                 color: isActive ? "white" : "",
//               })}
//             >
//               Standard
//             </NavLink>

//             <NavLink
//               className="nav-item nav-link"
//               to="/calculator"
//               onClick={closeNavbar} // Close navbar on click
//               style={({ isActive }) => ({
//                 marginRight: "20px",
//                 color: isActive ? "white" : "",
//               })}
//             >
//               Calculator
//             </NavLink>

//             <NavLink
//               className="nav-item nav-link"
//               to="/about"
//               onClick={closeNavbar} // Close navbar on click
//               style={({ isActive }) => ({
//                 marginRight: "20px",
//                 color: isActive ? "white" : "",
//               })}
//             >
//               About Us
//             </NavLink>
//           </div>

//           {/* Add Button at the end */}
//           <button
//             className="btn btn-primary"
//             onClick={() => {
//               navigate('/contact');
//               closeNavbar(); // Close navbar on button click
//             }}
//             style={{
//               padding: "18px 36px",
//               backgroundColor: "#444",
//               color: "#fff",
//               borderRadius: "5px",
//               fontSize: "20px",
//               fontWeight: "bold",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Contact Us
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../img/logo/logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();

  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Programmatically toggle the navbar
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
        backgroundColor: "#000", // Navbar background
        color: "#fff", // Font color
      }}>
        {/* Logo */}
        <NavLink className="navbar-brand" to="/" onClick={() => { closeNavbar(); scrollToTop(); }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "150px",
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
            <NavLink
              className="nav-item nav-link"
              to="/"
              onClick={() => { closeNavbar(); scrollToTop(); }}
              style={({ isActive }) => ({
                marginRight: "20px",
                color: isActive ? "white" : "",
              })}
            >
              Home
            </NavLink>

            <NavLink
              className="nav-item nav-link"
              to="/product"
              onClick={() => { closeNavbar(); scrollToTop(); }}
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
              onClick={() => { closeNavbar(); scrollToTop(); }}
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
              onClick={() => { closeNavbar(); scrollToTop(); }}
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
              onClick={() => { closeNavbar(); scrollToTop(); }}
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
            onClick={() => {
              navigate('/contact');
              closeNavbar();
              scrollToTop();
            }}
            style={{
              padding: "18px 36px",
              backgroundColor: "#444",
              color: "#fff",
              borderRadius: "5px",
              fontSize: "20px",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              border: "none",
              cursor: "pointer",
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
