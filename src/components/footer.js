import React, { Component } from "react";
import './Footer.css'; // Import the external CSS

class Footer extends Component {
  state = {};
  render() {
    return (
      <section className="footer-section py-4 bg-light" style={{ borderTop: "1px solid #dcdcdc" }}>
        <div className="footer-card text-center">
          <div className="card-body">
            <h5 className="card-title">Thank You for Visiting!</h5>
            <p className="card-text">
              I appreciate your time exploring my portfolio. Feel free to reach out to me if you have any questions!
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sooraj-singh-7677s/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Sooraj1384" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="soorajsingh968@gmail.com" className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2024 Sooraj Singh. All rights reserved.</p>
        </div>
      </section>
    );
  }
}

export default Footer;
