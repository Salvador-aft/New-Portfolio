import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode, faPython, faGit, faDocker, faBootstrap, faAws, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Stacks.css';

function Stacks() {
  const technologies = [
    { name: 'HTML 5', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Node JS', icon: faNode },
    { name: 'Python', icon: faPython },
    { name: 'Git', icon: faGit },
    { name: 'Docker', icon: faDocker },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'AWS', icon: faAws },
    { name: 'PostgreSQL', icon: faDatabase },
    { name: 'WordPress', icon: faWordpress },
  ];

  return (
    <section className="stacks">
      <h2>Stacks</h2>
      <div className="stacks-container">
        {technologies.map((tech, index) => (
          <article className="stack-item" key={index}>
            <div className="content">
              <FontAwesomeIcon icon={tech.icon} className="stack-icon" />
              <p>{tech.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stacks;