import React from "react";

// Assuming you might use FontAwesome icons, ensure it's set up in your project
// (e.g., via CDN in public/index.html or npm package)

function Footer() {
  return (
    <footer id="footer">
      {" "}
      {/* Moved id here for the anchor link */}
      <div className="footer-wrapper">
        {/* Logo and About Us Section */}
        <div className="footer-section logo-about">
          <img
            src="/images/Logo.jpeg"
            alt="RIT Note Hub Logo"
            className="footer-logo"
          />
          <p>
            R.I.T Note Hub is your one-stop platform to access notes, resources,
            and materials for every semester. Empower your learning journey with
            ease.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            {/* Use React Router <Link> components here for SPA navigation */}
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Notes</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          {/* Add FontAwesome icons if available */}
          <p>
            <i className="fas fa-envelope"></i> support@ritnotehub.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 123 456 7890
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> RIT University, City,
            India
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to receive the latest notes, updates, and resources.</p>
          {/* Handle form submission with React state and onSubmit handler */}
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscription submitted!");
            }}
          >
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      {/* Google Form Section */}
      <div className="contact-form-section" id="help">
        <h3>Get in Touch</h3>
        <p>Use the form below to send us your queries or messages:</p>
        <iframe
          src="https://forms.gle/omNqrQPEWoTEfipA6"
          width="100%"
          height="600px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ borderRadius: "10px", overflow: "hidden" }} // Inline style needs double braces
          title="Contact Form" // Added title for accessibility
        >
          Loading…
        </iframe>
      </div>
      {/* Social Media & Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          {/* Add FontAwesome icons if available */}
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2024 R.I.T Note Hub | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
