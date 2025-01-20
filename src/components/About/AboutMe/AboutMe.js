import React from 'react';
import './AboutMe.css';
import ProfilePhoto from '../../../assets/images/Foto CV con Fondo.png';
import ArrowIcon from '../../../assets/images/Arrow.png';
import CV from '../../../assets/documents/CV-en-Salvador-Farias-Torres.pdf';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <div className="about-me__content__title">
          <h1>Hi, I'm Salvador, a full stack web developer</h1>
        </div>
        <div className="about-me__content__description">
          <h3>Years of experience building websites from the ground up using the most versatile and in-demand technologies</h3>
        </div>
        <div className="about-me__content__buttons">
          <a 
            href="https://github.com/Salvador-aft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-me__content__button"
          >
            Github
            <img src={ArrowIcon} alt="Arrow Icon" className="button-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/salvador-agustin-farias-torres/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-me__content__button"
          >
            Linkedin
            <img src={ArrowIcon} alt="Arrow Icon" className="button-icon" />
          </a>
          <a 
            href="https://x.com/salvador_aft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-me__content__button"
          >
            Twitter
            <img src={ArrowIcon} alt="Arrow Icon" className="button-icon" />
          </a>
          <a 
            href={CV} 
            target="_blank" 
            rel="noopener noreferrer"
            className="about-me__content__button"
          >
            Download CV
            <img src={ArrowIcon} alt="Arrow Icon" className="button-icon" />
          </a>
        </div>
      </div>
      <div className="about-me__photo">
        <img 
          src={ProfilePhoto}
          alt="Salvador Farias Torres" 
          className="about-me__photo__image" 
        />
      </div>
    </section>
  );
}

export default AboutMe;