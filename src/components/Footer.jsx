import { FaHome, FaBook, FaTools, FaGraduationCap, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Side - Profile & Quote */}
        <div className="footer-left">
          <img src="https://cdn.pixabay.com/photo/2024/06/01/09/02/young-man-8801863_1280.jpg   " alt="Profile" className="profile-img" />
          <h2 className="footer-title">Prem Dev</h2>
          <p className="footer-quote">
            "Programs must be written for people to read, and only incidentally for machines to execute."
            <br />— Harold Abelson
          </p>
        </div>

        {/* Right Side - Navigation & Social Icons */}
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#"><FaHome /> Home</a>
            <a href="#about"><FaBook /> About</a>
            <a href="#"><FaTools /> Services</a>
            <a href="#"><FaGraduationCap /> Education</a>
          </nav>

          <div className="social-icons">
            <a href="#" className="icon">
              <FaLinkedin />
            </a>
            <a href="#" className="icon">
              <FaTimes />
            </a>
            <a href="#" className="icon">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-copy">Copyright © 2025 Prem Dev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
