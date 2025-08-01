import React, { Component } from "react";

class Summary extends Component {
  state = {};
  render() {
    return (
      <section
        className="about-me py-2 bg-light"
        id="about-me"
        style={{
          height: "500px",
          border: "1px solid #dcdcdc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          scrollMargin: "80px"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Photo Section */}
            <div className="col-md-4 text-center">
              <img
                src="profile.jpg"
                alt="Sooraj Singh"
                className="img-fluid rounded-circle sadow-lg"
                style={{
                  width: "300px",  // Width and height should be equal for a perfect circle
                  height: "300px", // Set the same height to make it a circle
                  objectFit: "cover",
                  borderRadius: "50%", // This will make the image circular
                }}
              />
            </div>

            {/* Summary Section */}
            <div className="col-md-8">
              <h2 className="text-primary">About Me</h2>
              <p className="lead">
                Hi, I'm <strong>Sooraj Singh</strong>, a passionate developer
                with expertise in web development, cloud computing, and DevOps.
                I love creating meaningful projects that solve real-world
                problems and have a keen interest in learning new technologies.
              </p>
              <p>
                I believe in continuous learning and am always eager to enhance
                my skills. In my spare time, I enjoy contributing to open-source
                projects, exploring new frameworks, and mentoring others in
                coding.
              </p>
              <a href="#Skills" className="btn btn-primary">
                View My Skills
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Summary;
