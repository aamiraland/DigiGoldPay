import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address */}
        <div className="footer-item">
          <FaMapMarkerAlt className="footer-icon" />
          <p>Pune, Maharashtra, India</p>
        </div>

        {/* Phone */}
        <div className="footer-item">
          <FaPhone className="footer-icon" />
          <p>+91 9175150787</p>
        </div>

        {/* Email */}
        <div className="footer-item">
          <MdEmail className="footer-icon" />
          <p>aamiraland@gmail.com / aamir49251@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
