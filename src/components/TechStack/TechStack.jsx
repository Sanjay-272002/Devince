import React from 'react';
import './TechStack.css'; // Import the CSS file for styling
import { techStack } from './TechStackdata'

const TechStack = () => {
  return (

    <section className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-stack-grid">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-stack-item">
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default TechStack;
