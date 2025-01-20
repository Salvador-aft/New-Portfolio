import React from 'react';
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
        style={{ gap: '32px'}}
      >
        <div className="header__right__buttons d-flex">
          {["About", "Skills", "Education", "Projects"].map((label, index) => (
            <button
              key={index}
              className={`header__right__button btn ${index !== 3 ? 'mr-3' : ''}`}
              style={{
                fontSize: '16px',
                fontWeight: '100',
                fontFamily: 'Raleway, sans-serif',
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div 
          className="header__right__email" 
          style={{ fontSize: '16px', fontWeight: 'bold', fontFamily: 'Raleway, sans-serif', color: '#000' }}
        >
          salvadorfarias2010@gmail.com
        </div>
      </nav>
    </div>
  );
}

export default Header;