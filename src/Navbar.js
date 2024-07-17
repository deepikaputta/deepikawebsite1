import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = ({ contactRef }) => {
  const navigateToResume = () => {
    window.location.href = 'https://drive.google.com/file/d/14Y3mylBahzfMgrxlM35dBKjtjaMfxdTu/view?usp=sharing'; // Google Drive link to your resume
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="nav-buttons">
        <button className="btn profile-btn" onClick={navigateToResume}>My Profile</button>
        <button className="btn contact-btn" onClick={scrollToContact}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;


