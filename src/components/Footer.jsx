import { FaHome, FaBook, FaChartBar, FaCode, FaProjectDiagram, FaAward, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container" id="footer">
      <div className="footer-content">
        {/* Left Side - Profile & Quote */}
        <div className="footer-left">
          <img src="https://cdn.pixabay.com/photo/2024/06/01/09/02/young-man-8801863_1280.jpg   " alt="Profile" className="profile-img" />
          <h2 className="footer-title">Premnath.M</h2>
          <p className="footer-quote">
            "Programs must be written for people to read, and only incidentally for machines to execute."
            <br />— Harold Abelson
          </p>
        </div>

        {/* Right Side - Navigation & Social Icons */}
        <div className="footer-right">
        <nav className="footer-nav">
          <a href="#home"><FaHome /> Home</a>
          <a href="#about"><FaBook /> About</a>
          <a href="#statistics"><FaChartBar /> Statistics</a>
          <a href="#skills"><FaCode /> Skills</a>
          <a href="#projects"><FaProjectDiagram /> Projects</a>
          <a href="#certificate"><FaAward /> Certificate</a>
        </nav>

          <div className="social-icons">
            <a href="#" className="icon">
              <FaLinkedin />
            </a>
            <a href="#" className="icon">
              <FaGithub />
            </a>
            <a href="#" className="icon">
              <RiTwitterXFill />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-copy">Copyright © 2025 Premnath.M. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
