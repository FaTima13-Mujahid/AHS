import React from 'react';
import img1 from '../img/gallery/footer_bg.png';
import { Link } from 'react-router-dom';
import logo from "../img/logo/logo.jpeg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper section-bg2" style={{ backgroundImage: `url(${img1})` }}>
          {/* <!-- Footer Top--> */}
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-tittle">
                        <div className="footer-logo mb-20">
                          <a className="navbar-brand" href="/">
                            <img
                              src={logo} // Replace 'logo' with your actual logo import
                              alt="Logo"
                              style={{
                                marginTop: "60px",
                                width: "150px", // Adjust logo size if needed
                                height: "auto",
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <p>
                          Plot 15/90, Block-3, BMCHS, Near Ali Masjid, Karachi, Sindh, Pakistan.
                          </p>
                        </li>
                        <li>
                          <a href="tel:+923313711376">Phone: +92 331 3711376</a>
                        </li>
                        <li>
                          <a href="mailto:ahs@gmail.com">Email: info@alhadeedsteel.pk</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Important Link</h4>
                      <ul>
                        <li><Link to="About">About Us</Link></li>
                        <li><Link to="contact">Contact Us</Link></li>
                        <li><Link to="Product">Products</Link></li>
                        <li><Link to="Standard">Standard</Link></li>
                        <li><Link to="Calculator">Calculator</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Newsletter</h4>
                      <div className="footer-pera footer-pera2">
                        <p>Pioneering Innovation in Steel Manufacturing.</p>
                      </div>
                      {/* <!-- Form --> */}
                      <div className="footer-form">
                        <div id="mc_embed_signup">
                          <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            method="get" className="subscribe_form relative mail_part">
                            <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                              className="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                              onblur="this.placeholder = ' Email Address '" />
                            <div className="form-icon">
                              <button type="submit" name="submit" id="newsletter-submit"
                                className="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt="" /></button>
                            </div>
                            <div className="mt-10 info"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="footer-social-icons" style={{ marginTop: "30px", textAlign: "center" }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <i className="fab fa-facebook" style={{ fontSize: "24px", color: "#fff" }}></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "15px" }}>
                  <i className="fab fa-instagram" style={{ fontSize: "24px", color: "#fff" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
