import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div className="footer-heading">
          <p className="footer-eyebrow">COME VISIT US</p>

          <h2>
            We'd love to
            <br />
            <em>see you.</em>
          </h2>
        </div>

        <div className="footer-details">
          <div className="footer-column">
            <h3>Location</h3>
            <p>Blend Salon & Spa</p>
            <p>208 2nd Ave SE</p>
            <p>Sidney, MT</p>
          </div>

          <div className="footer-column">
            <h3>Hours</h3>
            <p>Monday – Friday</p>
            <p>9:00 AM – 5:00 PM</p>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <a href="tel:+14064334247">
              (406) 433-4247
            </a>

            <a href="mailto:youremail@example.com">
              Your email address
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <span className="footer-brand-main">BLEND</span>
          <span className="footer-brand-sub">SALON & SPA</span>
        </div>

        <div className="social-links">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Blend Salon & Spa
        </p>
      </div>
    </footer>
  );
};

export default Footer;