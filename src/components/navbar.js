import React, { Component } from "react";
import './Navbar.css'

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="profile.jpg" // Replace with your image URL
              alt="Profile"
              className="profile-img"
            />
            <div className="profile-info">
              <span className="profile-name">Sooraj Singh</span>
              <span className="icon-container">
                <i className="fas fa-phone"></i>
                <span className="tooltip">+917050229456</span>
              </span>
              <span className="icon-container">
                <i className="fas fa-envelope"></i>
                <span className="tooltip">soorajsingh968@gmail.com</span>
              </span>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto nav-items">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#about-me"
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#qualification">
                  Qualifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#achievement-section">
                  Achievements
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Download Resume
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Download
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Update
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
