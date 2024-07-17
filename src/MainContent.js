import React, { useEffect, useState, useRef } from 'react';
import './MainContent.css';
import Typewriter from './Typewriter';
import profilePicture from './assets/photo1.webp';

const MainContent = React.forwardRef((props, ref) => {
  const [swipeActive, setSwipeActive] = useState(false);

  useEffect(() => {
    const video = document.getElementById('bg-video');
    if (video) {
      console.log('Video element found:', video);
      console.log('Video source:', video.currentSrc);
      video.oncanplay = () => {
        console.log('Video can play');
      };
      video.onerror = (e) => {
        console.log('Video error:', e);
      };
    } else {
      console.log('Video element not found');
    }
  }, []);

  const handleSwipe = () => {
    setSwipeActive(true);
  };

  const navigateToResume = () => {
    window.location.href = 'https://drive.google.com/file/d/14Y3mylBahzfMgrxlM35dBKjtjaMfxdTu/view?usp=sharing'; // Google Drive link to your resume
  };

  return (
    <div className={`main-container ${swipeActive ? 'swipe-active' : ''}`}>
      <div className="main-content">
        <video id="bg-video" autoPlay muted loop>
          <source src="/dp (3).mp4" type="video/mp4" />
        </video>
      </div>

      <div className="additional-content">
        <video id="second-video" autoPlay muted loop>
          <source src="/About (1).mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="profile-picture-container" onClick={navigateToResume}>
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <a href="https://your-chat-link.com" className="chat-button">Chat with me</a>
      </div>

      <div className="swipe-indicator" onClick={navigateToResume}>
        <div className="swipe-text">Click to know more</div>
        <div className="double-arrow">&#x2192;&#x2192;</div>
      </div>

      <div className="swipe-content">
        <video id="swipe-video" autoPlay muted loop>
          <source src="/vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="swipe-video-text">
          <h2>Explore More</h2>
          <p>Deep dive into more content.</p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details" ref={ref}>
        <h2>Contact Details:</h2>
        <div className="contact-info">
          <div className="info-item">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/email--v1.png" alt="Email Icon" />
            <span>deepikasandhya32@gmail.com</span>
          </div>
          <div className="info-item">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/phone.png" alt="Phone Icon" />
            <span>+91 6305712375</span>
          </div>
          <div className="info-item">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/marker.png" alt="Location Icon" />
            <span>Chennai, India</span>
          </div>
          <div className="info-item">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt="GitHub Icon" />
            <span>https://github.com/deepikaputta</span>
          </div>
          <div className="info-item">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png" alt="LinkedIn Icon" />
            <span>https://www.linkedin.com/in/putta-deepika-006a82234/</span>
          </div>
          <div className="info-item">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new.png" alt="Instagram Icon" />
            <span>https://www.instagram.com/puttadeepika005/</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainContent;


