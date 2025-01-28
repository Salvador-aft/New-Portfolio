import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      logo: require('../../assets/images/FreeCodeCamp-logo.png'),
      title: 'Learn to Code',
      date: '2023 - 2024',
    },
    {
      logo: require('../../assets/images/Alura-logo.png'),
      title: 'Oracle Next Education - Frontend',
      date: '2024 - 2025',
    },
    {
      logo: require('../../assets/images/UNAB-logo.jpg'),
      title: 'Technical Degree in Programming',
      date: '2025 - Present',
    },
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education__container">
        {educationData.map((item, index) => (
          <article className="education__container__education-item" key={index}>
            <div className="education__container__education-item__education-logo-container">
              <img src={item.logo} alt={item.title} className="education__container__education-item__education-logo-container__education-logo" />
            </div>
            <p className="education__container__education-item__education-title">{item.title}</p>
            <p className="education__container__education-item__education-title__education-date">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;