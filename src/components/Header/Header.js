import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../../assets/images/Group.png';

function Header() {
  return (
    <div className="header d-flex justify-content-between align-items-center pt-4 pb-4">
      <div className="header__left d-flex align-items-center">
        <img
          src={logo}
          alt="Logo"
          className="header__left__logo"
          style={{ width: '22px', height: '22px', marginRight: '8px' }}
        />
        <p
          className="header__left__text mb-0 text-dark"
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Raleway, sans-serif',
          }}
        >
          Salvador Farias Torres
        </p>
      </div>
      <nav
        className="header__right d-flex justify-content-end align-items-center"
        style={{ gap: '32px' }}
      >
        <div className="header__right__buttons d-flex">
          {[{ label: 'About', to: 'about-section' },
            { label: 'Stacks', to: 'stacks-section' },
            { label: 'Education', to: 'education-section' },
            { label: 'Experience', to: 'projects-section' },
            { label: 'Contact', to: 'contact-section' },
          ].map(({ label, to }, index) => (
            <Link
              key={index}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              className="header__right__buttons__button"
            >
              {label}
            </Link>
          ))}
        </div>
        <a
          href="mailto:salvadorfarias2010@gmail.com"
          className="header__right__email"
        >
          salvadorfarias2010@gmail.com
        </a>
      </nav>
    </div>
  );
}

export default Header;