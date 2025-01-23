import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Summary from "./components/summary";
import Section2 from "./components/section2";
import ProjectCard from "./components/projectCard";
import Overlay from "./components/overlay";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import CertificationCard from "./components/certification";
import Achievements from "./components/achievements";
import Skills from "./components/Skills";

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [overlayData, setOverlayData] = useState({});

  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      title: "TravelEase",
      description: "Plan and book vacations seamlessly.",
      technologies: ["React", "Bootstrap", "Node.js", "MongoDB"],
      details:
        "TravelEase is a comprehensive platform that streamlines vacation planning and booking. It features an intuitive interface, personalized recommendations, and secure payment options.",
    },
    {
      title: "Expense Tracker",
      description: "Track your expenses effortlessly.",
      technologies: ["Python", "Flask", "SQLite"],
      details:
        "Expense Tracker is a simple yet powerful tool to manage and monitor your financial expenses. It offers detailed analytics and user-friendly dashboards.",
    },
    {
      title: "Sorting Visualizer",
      description: "Understand sorting algorithms visually.",
      technologies: ["React", "Canvas API", "CSS Animations"],
      details:
        "Sorting Visualizer helps users learn sorting algorithms with interactive and dynamic visualizations. It supports multiple sorting techniques.",
    },
    {
      title: "TravelEase",
      description: "Plan and book vacations seamlessly.",
      technologies: ["React", "Bootstrap", "Node.js", "MongoDB"],
      details:
        "TravelEase is a comprehensive platform that streamlines vacation planning and booking. It features an intuitive interface, personalized recommendations, and secure payment options.",
    },
    {
      title: "Expense Tracker",
      description: "Track your expenses effortlessly.",
      technologies: ["Python", "Flask", "SQLite"],
      details:
        "Expense Tracker is a simple yet powerful tool to manage and monitor your financial expenses. It offers detailed analytics and user-friendly dashboards.",
    },
    {
      title: "Sorting Visualizer",
      description: "Understand sorting algorithms visually.",
      technologies: ["React", "Canvas API", "CSS Animations"],
      details:
        "Sorting Visualizer helps users learn sorting algorithms with interactive and dynamic visualizations. It supports multiple sorting techniques.",
    },
  ];

  const certifications = [
    {
      courseName: "Full-Stack Web Development",
      mode: "Online",
      completionDate: "May 2024",
      certificateLink: "https://example.com/full-stack",
    },
    {
      courseName: "Data Science with Python",
      mode: "Classroom",
      completionDate: "April 2024",
      certificateLink: "https://example.com/data-science",
    },
    {
      courseName: "AWS Cloud Practitioner",
      mode: "Online",
      completionDate: "March 2024",
      certificateLink: "https://example.com/aws",
    },
  ];

  const handleShowAll = () => {
    setVisibleProjects(projects.length); // Set visible projects to show all
  };

  // Function to open the overlay
  const handleOverlayOpen = (project) => {
    setOverlayData(project);
    setIsOverlayVisible(true);
  };

  // Function to close the overlay
  const handleOverlayClose = () => {
    setIsOverlayVisible(false);
  };

  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divId) => {
    setHoveredDiv(divId);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  const getDivStyle = (divId) => ({
    width: hoveredDiv === divId ? "90%" : hoveredDiv ? "10%" : "50%",
    backgroundColor: divId === "certifications" ? "#f8f9fa" : "#e9ecef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    transition: "all 0.3s ease",
    position: "relative",
    height: "100%", // Ensures the vertical title spans the height of the container
  });

  const getVerticalTitleStyle = () => ({
    writingMode: "vertical-rl", // Rotates the text vertically
    textOrientation: "upright", // Keeps the text orientation readable
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Centers the text in the div
    fontSize: "18px", // Increases the font size
    fontWeight: "bold", // Makes the text bold
    color: "#333", // Adjusts the color for better visibility
    whiteSpace: "nowrap", // Prevents wrapping of the text
    textAlign: "center",
    letterSpacing: "2px", // Adds spacing between letters for an evenly spaced appearance
  });
  return (
    <>
      <Navbar />
      <Carousel />
      <Summary />
      <Section2 />
      <section
        className="about-me py-2 bg-light"
        id="projects"
        style={{
          height: "auto",
          border: "1px solid #dcdcdc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          scrollMargin: "80px",
        }}
      >
        <div>
          <h3 className="container mt-4" style={{ textAlign: "center" }}>
            Projects
          </h3>
        </div>

        <div className="container mt-4">
          <div className="row g-4 justify-content-center">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div className="col-md-4" key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  details={project.details}
                  openOverlay={() => handleOverlayOpen(project)} // Pass the open overlay function
                />
              </div>
            ))}
          </div>
        </div>
        {/* Button to show all projects */}
        {visibleProjects < projects.length && (
          <div className="mt-4">
            <button
              onClick={handleShowAll}
              className="btn btn-primary"
              style={{ display: "block", margin: "0 auto" }}
            >
              Show More Projects
            </button>
          </div>
        )}
      </section>
      <section
        className="about-me py-2 bg-light"
        id="achievement-section"
        style={{
          height: "600px",
          border: "1px solid #dcdcdc",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          scrollMargin: "80px",
          flexWrap: "wrap",
        }}
      >
        {/* Certifications */}
        <div
          id="certifications"
          style={getDivStyle("certifications")}
          onMouseEnter={() => handleMouseEnter("certifications")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredDiv === "certifications" || !hoveredDiv ? (
            <CertificationCard />
          ) : (
            <div style={getVerticalTitleStyle()}>Certifications</div>
          )}
        </div>

        {/* Achievements */}
        <div
          id="achievements"
          style={getDivStyle("achievements")}
          onMouseEnter={() => handleMouseEnter("achievements")}
          onMouseLeave={handleMouseLeave}
        >
          {hoveredDiv === "achievements" || !hoveredDiv ? (
            <Achievements />
          ) : (
            <div style={getVerticalTitleStyle()}>My Achievements</div>
          )}
        </div>
      </section>

      <>
      <Skills />
      </>

      <Footer />
      {/* Conditionally render the overlay */}
      {isOverlayVisible && (
        <Overlay
          title={overlayData.title}
          description={overlayData.details}
          technologies={overlayData.technologies}
          closeOverlay={handleOverlayClose}
        />
      )}
    </>
  );
}

export default App;
