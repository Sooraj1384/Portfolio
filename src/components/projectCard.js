import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from "./overlay"; // Import the overlay component
import "./ProjectCard.css"; // External CSS for the card

const ProjectCard = ({ title, description, technologies, details }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      {/* Project Card */}
      <div
        className="project-card card mx-auto"
        onClick={toggleOverlay}
        style={{ cursor: "pointer" }}
      >
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-light">
          <button className="btn btn-outline-primary">View Details</button>
        </div>
      </div>

      {/* Show Overlay when the state is true */}
      {showOverlay && (
        <Overlay
          title={title}
          description={details}
          technologies={technologies}
          closeOverlay={toggleOverlay}
        />
      )}
    </>
  );
};

export default ProjectCard;
