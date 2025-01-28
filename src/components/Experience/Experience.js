import React from 'react';
import './Experience.css';
import portfolioImage from '../../assets/images/portfolio.jpg';
import animationProjectImage from '../../assets/images/animation-project.jpg';
import ecommerceProjectImage from '../../assets/images/ecommerce-project.jpg';
import miniEcommerceProjectImage from '../../assets/images/project-miniecommerce.png';
import streamingPlataformPojectImage from '../../assets/images/project-Aluraflix.png';

function Experience() {
  const experiences = [
    { image: portfolioImage, title: 'Portfolio Project', description: 'A personal portfolio website showcasing my projects and skills.', repository: 'https://github.com/Salvador-aft/Portfolio' },
    { image: animationProjectImage, title: 'Animation Project', description: 'An animation project demonstrating advanced CSS and JavaScript animations.', repository: 'https://github.com/Salvador-aft/Landing-Page---MinuteMaid' },
    { image: ecommerceProjectImage, title: 'E-commerce Project', description: 'A fully functional e-commerce website with a shopping cart and payment gateway integration.', repository: 'https://github.com/Salvador-aft/Ecommerce-project' },
    { image: miniEcommerceProjectImage, title: 'Mini E-Commerce Project', description: 'A compact e-commerce platform featuring a streamlined shopping experience, including a minimalistic product catalog and basic cart functionality.', repository: 'https://github.com/Salvador-aft/Mini-Ecommerce' },
    { image: streamingPlataformPojectImage, title: 'Streaming Platform Project', description: 'A video streaming platform designed to curate content from a specific YouTube channel, offering users an organized and intuitive way to explore videos by topic.', repository: 'https://github.com/Salvador-aft/streaming-plataform'}
  ];

  return (
    <section className="experience">
      <h2>My Experience</h2>
      {experiences.map((exp, index) => (
        <article
          key={index}
          className={`experience__item ${index % 2 === 0 ? 'normal' : 'reverse'}`}
        >
          <div className="experience__item__image-container">
            <img src={exp.image} alt={exp.title} className="experience__item__image-container__image" />
          </div>
          <div className="experience__item__content">
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            <a href={exp.repository} className="experience__item__content__repo-button" target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Experience;