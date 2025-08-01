import React, { useEffect } from "react";
import "./Overlay.css";

const Overlay = ({
  title = "Default Project Title",
  description = "Add a brief description about the project.",
  technologies = [],
  imageSrc = "https://via.placeholder.com/100",
  extraInfo = "Add any extra information here.",
  closeOverlay,
}) => {
  // Disable scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = ""; // Re-enable scroll when modal is closed
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="overlay-wrapper">
        {/* Title Bar */}
        <div className="title-bar">{title}</div>

        {/* Main Content */}
        <div className="content">
          {/* Description Box */}
          <div className="description">
            <h4>Description</h4>
            <p>{description}</p>

            {/* Image Box */}
            <div className="image-box">
              <img src={imageSrc} alt="Project" />
            </div>
          </div>

          {/* Tech Info Box */}
          <div className="tech-info">
            <h4>Technologies</h4>
            <ul>
              {technologies.length > 0 ? (
                technologies.map((tech, index) => <li key={index}>{tech}</li>)
              ) : (
                <li>No technologies listed.</li>
              )}
            </ul>
          </div>
        </div>

        {/* Extra Info */}
        <div className="extra-info">{extraInfo}</div>

        {/* Close Button */}
        <button className="close-button" onClick={closeOverlay}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Overlay;
