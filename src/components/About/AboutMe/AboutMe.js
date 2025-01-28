import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
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
          <h3>
            Over two years of experience building websites from scratch using
            cutting-edge and in-demand technologies
          </h3>
        </div>
        <div className="about-me__content__buttons">
          <a
            href="https://github.com/Salvador-aft"
            target="_blank"
            rel="noopener noreferrer"
            className="about-me__content__buttons__button"
          >
            <FontAwesomeIcon icon={faGithub} className="about-me__content__buttons__button-icon" />
            <span className="about-me__content__buttons__button-text">Github</span>
            <img src={ArrowIcon} alt="Arrow Icon" className="about-me__content__buttons__arrow-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/salvador-agustin-farias-torres/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-me__content__buttons__button"
          >
            <FontAwesomeIcon icon={faLinkedin} className="about-me__content__buttons__button-icon" />
            <span className="about-me__content__buttons__button-text">Linkedin</span>
            <img src={ArrowIcon} alt="Arrow Icon" className="about-me__content__buttons__arrow-icon" />
          </a>
          <a
            href="https://x.com/salvador_aft"
            target="_blank"
            rel="noopener noreferrer"
            className="about-me__content__buttons__button"
          >
            <FontAwesomeIcon icon={faTwitter} className="about-me__content__buttons__button-icon" />
            <span className="about-me__content__buttons__button-text">Twitter</span>
            <img src={ArrowIcon} alt="Arrow Icon" className="about-me__content__buttons__arrow-icon" />
          </a>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="about-me__content__buttons__button"
          >
            <FontAwesomeIcon icon={faFile} className="about-me__content__buttons__button-icon" />
            <span className="about-me__content__buttons__button-text">Download CV</span>
            <img src={ArrowIcon} alt="Arrow Icon" className="about-me__content__buttons__arrow-icon" />
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