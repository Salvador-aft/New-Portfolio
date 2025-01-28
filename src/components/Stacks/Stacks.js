import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNode, faPython, faDocker, faBootstrap, faAws, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Stacks.css';
import TensorFlowLogo from '../../assets/images/TensorFlow_logo.png';

function Stacks() {
  const technologies = [
    { name: 'HTML 5', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Node JS', icon: faNode },
    { name: 'Python', icon: faPython },
    { name: 'Docker', icon: faDocker },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'AWS', icon: faAws },
    { name: 'PostgreSQL', icon: faDatabase },
    { name: 'WordPress', icon: faWordpress },
    { name: 'TensorFlow', icon: null, image: TensorFlowLogo },
  ];

  return (
    <section className="stacks">
      <h2>Stacks</h2>
      <div className="stacks__container">
        {technologies.map((tech, index) => (
          <article className="stacks__container__item" key={index}>
            <div className="stacks__container__item__content">
              {tech.icon ? (
                <FontAwesomeIcon icon={tech.icon} className="stacks__container__item__content__stack-icon" />
              ) : (
                <img src={tech.image} alt={tech.name} className="stacks__container__item__content__stack-icon__stack-image" />
              )}
              <p>{tech.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stacks;