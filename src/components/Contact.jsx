import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            Cafe <span>Nova</span>
          </h2>

          <p className="footer-description">
            Proudly Ethiopian. Bringing premium coffee experiences to the world
            through authenticity, craftsmanship, and heritage.
          </p>

          <div className="footer-socials">
            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaTwitter />
            </a>

            <a href="/">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#coffee">Coffee</a>
            </li>
            <li>
              <a href="#heritage">Heritage</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        {/* HELP */}
        <div className="footer-links">
          <h3>Help</h3>

          <ul>
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Shipping</a>
            </li>
            <li>
              <a href="/">Returns</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>

          <p>
            Subscribe for updates, premium coffee releases, and exclusive
            offers.
          </p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Cafe Nova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
