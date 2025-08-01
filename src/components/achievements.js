import React from "react";
import './Achievements.css'; // Import the external CSS file for achievements

const Achievements = () => {
  const achievements = [
    {
      title: "Certificate of Excellence",
      description: "Awarded for outstanding performance in Data Science.",
      link: "https://example.com/certificate1",
      progress: 85, // Progress bar value (can be percentage)
    },
    {
      title: "Best Developer Award",
      description: "Recognized for exceptional software development skills.",
      link: "https://example.com/certificate2",
      progress: 70,
    },
    {
      title: "Employee of the Year",
      description: "Awarded for exceptional work throughout the year.",
      link: "https://example.com/certificate3",
      progress: 90,
    },
    {
      title: "Hackathon Winner",
      description: "Won the national coding hackathon.",
      link: "https://example.com/certificate4",
      progress: 60,
    },
    {
        title: "Employee of the Year",
        description: "Awarded for exceptional work throughout the year.",
        link: "https://example.com/certificate3",
        progress: 90,
      },
      {
        title: "Hackathon Winner",
        description: "Won the national coding hackathon.",
        link: "https://example.com/certificate4",
        progress: 60,
      },
      {
        title: "Employee of the Year",
        description: "Awarded for exceptional work throughout the year.",
        link: "https://example.com/certificate3",
        progress: 90,
      },
      {
        title: "Hackathon Winner",
        description: "Won the national coding hackathon.",
        link: "https://example.com/certificate4",
        progress: 60,
      },
      {
          title: "Employee of the Year",
          description: "Awarded for exceptional work throughout the year.",
          link: "https://example.com/certificate3",
          progress: 90,
        },
        {
          title: "Hackathon Winner",
          description: "Won the national coding hackathon.",
          link: "https://example.com/certificate4",
          progress: 60,
        },
        {
            title: "Employee of the Year",
            description: "Awarded for exceptional work throughout the year.",
            link: "https://example.com/certificate3",
            progress: 90,
          },
          {
            title: "Hackathon Winner",
            description: "Won the national coding hackathon.",
            link: "https://example.com/certificate4",
            progress: 60,
          },
          {
              title: "Employee of the Year",
              description: "Awarded for exceptional work throughout the year.",
              link: "https://example.com/certificate3",
              progress: 90,
            },
            {
              title: "Hackathon Winner",
              description: "Won the national coding hackathon.",
              link: "https://example.com/certificate4",
              progress: 60,
            },
  ];

  return (
    <section className="achievements-container" id="achievements">
      <h2 className="achievements-title">My Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <h4>{achievement.title}</h4>
            <p>{achievement.description}</p>
            <a
              href={achievement.link}
              className="achievement-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
            <div className="achievement-bar">
              <div
                className="achievement-progress"
                style={{ width: `${achievement.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
