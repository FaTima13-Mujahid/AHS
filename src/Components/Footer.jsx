import React from 'react'
import img1 from '../img/gallery/footer_bg.png'
import { Link } from 'react-router-dom'
import logo from "../img/logo/logo.jpeg";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-wrapper section-bg2"style={{ backgroundImage: `url(${img1})` }}
        >
            {/* <!-- Footer Top--> */}
            <div class="footer-area footer-padding">
                <div class="container">
                    <div class="row d-flex justify-content-between">
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="single-footer-caption mb-30">
                                <div class="footer-tittle">
                                    <div class="footer-logo mb-20">
                                       <a className="navbar-brand" href="/">
    <img
      src={logo} // Replace 'logo' with your actual logo import
      alt="Logo"
      style={{
        marginTop:"60px",
        width: "150px", // Adjust logo size if needed
        height: "auto",
      }}
    />
  </a>    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Contact Info</h4>
                                  <ul>
  <li>
    <p>
      Address: 4, CP & Berar Society BMCHS Sharafabad, Karachi, Karachi City, Sindh, Pakistan
    </p>
  </li>
  <li>
    <a href="tel:+923313711376">Phone: +92 331 3711376</a>
  </li>
  <li>
    <a href="mailto:ahs@gmail.com">Email: ahs@gmail.com</a>
  </li>
</ul>

                                </div>

                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
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
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Newsletter</h4>
                                    <div class="footer-pera footer-pera2">
                                    <p>Pioneering Innovation in Steel Manufacturing.</p>
                                </div>
                                {/* <!-- Form --> */}
                                <div class="footer-form" >
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                        method="get" class="subscribe_form relative mail_part">
                                            <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                            class="placeholder hide-on-focus" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = ' Email Address '" />
                                            <div class="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit"
                                                class="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt="" /></button>
                                            </div>
                                            <div class="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </footer> 
    </>
  )
}

export default Footer
