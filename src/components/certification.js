import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      courseName: 'Full-Stack Web Development',
      mode: 'Online',
      completionDate: 'May 2024',
      certificateLink: 'https://example.com/full-stack',
    },
    {
      courseName: 'Data Science with Python',
      mode: 'Classroom',
      completionDate: 'April 2024',
      certificateLink: 'https://example.com/data-science',
    },
    {
      courseName: 'AWS Cloud Practitioner',
      mode: 'Online',
      completionDate: 'March 2024',
      certificateLink: 'https://example.com/aws',
    },
    {
      courseName: 'React Advanced Concepts',
      mode: 'Online',
      completionDate: 'February 2024',
      certificateLink: 'https://example.com/react',
    },
    {
      courseName: 'Machine Learning Basics',
      mode: 'Online',
      completionDate: 'January 2024',
      certificateLink: 'https://example.com/ml-basics',
    },
    {
        courseName: 'React Advanced Concepts',
        mode: 'Online',
        completionDate: 'February 2024',
        certificateLink: 'https://example.com/react',
      },
      {
        courseName: 'Machine Learning Basics',
        mode: 'Online',
        completionDate: 'January 2024',
        certificateLink: 'https://example.com/ml-basics',
      },
      {
        courseName: 'React Advanced Concepts',
        mode: 'Online',
        completionDate: 'February 2024',
        certificateLink: 'https://example.com/react',
      },
      {
        courseName: 'Machine Learning Basics',
        mode: 'Online',
        completionDate: 'January 2024',
        certificateLink: 'https://example.com/ml-basics',
      },
      {
          courseName: 'React Advanced Concepts',
          mode: 'Online',
          completionDate: 'February 2024',
          certificateLink: 'https://example.com/react',
        },
        {
          courseName: 'Machine Learning Basics',
          mode: 'Online',
          completionDate: 'January 2024',
          certificateLink: 'https://example.com/ml-basics',
        },
  ];

  return (
    <section className="certifications-container" id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certification-card-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <p className="title">{cert.courseName}</p>
            <p>Mode: {cert.mode}</p>
            <p>Completion Date: {cert.completionDate}</p>
            <a
              href={cert.link}
              className="certification-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
