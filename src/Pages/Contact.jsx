import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when this page loads
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

    // Validation to ensure no fields are empty
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('All fields are required!');
      return;
    }

    // EmailJS Function to send email
    emailjs
      .sendForm(
        'service_ca4bj9m', // Service ID
        'template_0e0flcw', // Template ID
        e.target, // Form element
        'Qs3rDdFVTcYAp1BRM' // Public Key
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        },
        (error) => {
          alert(`Error sending message: ${error.text}`);
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
          backgroundImage:
            'url(https://www.shadeout.pk/cdn/shop/files/ad.png?v=1711129861&width=1500)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        <div className="container">
          <div className="row justify-content">
            <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
              <div className="section-tittle text-center mb-80">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
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
                        name="subject"
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter Subject"
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
    </main>
  );
};

export default Contact;
