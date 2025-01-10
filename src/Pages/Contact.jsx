import React, { useState,useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when this page loads
    }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const { name, email, contact, message } = formData;
  if (!name || !email || !contact || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }
    // EmailJS Function to send email
    emailjs
      .sendForm('service_3mt2twa', 'your_template_id', e.target, 'your_user_id')
      .then(
        (result) => {
          alert('Message Sent Successfully');
        },
        (error) => {
          alert('Error sending message: ', error.text);
        }
      );
  };

  const openLocation = () => {
    // Open Google Maps with the Plus Code location
    window.open("https://maps.app.goo.gl/BxH4W6VsmunstP1s7", "_blank");
  };

  return (
    <main>
     {/* Hero Section */}
      <section
        className="featured-job-area section-padding30 section-bg2"
        style={{
          backgroundImage: 'url(https://www.shadeout.pk/cdn/shop/files/ad.png?v=1711129861&width=1500)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',  // Adjust the height here
        }}
      >
        <div className="container">
          <div className="row justify-content">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              {/* Section Title */}
              <div className="section-tittle text-center mb-80">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Add content here */}
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
             
            </div>

             <div className="col-lg-2">
              
             </div>
            <div className="col-lg-8">
               <h2 className="contact-title">Get in Touch</h2>
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit}
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="contact"
                        id="contact"
                        type="number"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter Contact"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="button button-contactForm boxed-btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
             <div className="col-lg-2"></div>
          </div>
        </div>
      </section>

      {/* Map Card Section Above the Map with vol04 style */}
      <section className="map-section">
        <div className="container">
          <div className="row">
            <div className="col-4">
              {/* <h3>Our Fixed Location</h3> */}

              <div className="card" style={{
                  position: 'absolute',
                  top: '100px',
                  left: '10%',
                  backgroundColor: "rgba(67, 39, 39,2)",
                  zIndex: 1,
                  backgroundColor: 'white',
                  color: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  width: 'auto',
                }}>
                <p>Click below to view our location on Google Maps</p>
             
               <p style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '8px', fontSize: '18px', color: '#007bff' }}>
      📍 {/* Replace with an icon library like Font Awesome if needed */}

    </span>
    4, CP & Berar Society BMCHS Sharafabad, Karachi, Karachi City, Sindh, Pakistan
  </p>
                   <button 
                 className="btn btn-light"
                  // style={{ backgroundColor: 'white', color: 'blue', border: '1px solid white', padding: '10px 20px', borderRadius: '5px' }}
                  onClick={openLocation}
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Map iFrame */}
          <div className="row">
            <div className="col-12">
              <div className="map-responsive" style={{ position: 'relative', marginTop: '20px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.278239749484!2d74.38097301512953!3d31.56047877623143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919046a1b56d189%3A0x218eeb0f9885193d!2sNagan%20Chowrangi!5e0!3m2!1sen!2sin!4v1672535760927!5m2!1sen!2sin"
                  width="100%" height="450" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
