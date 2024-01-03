import React from 'react';
import '../Assests/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const HomeFooter = () => {
  return (
    <div>
      <footer>
        <p>&copy; 2023 Your Trip. All rights reserved.</p>
        <div className="footer-content">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faPhone} /> Contact: +1 123 456 7890</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@yourTrip.com</p>
            <p><FontAwesomeIcon icon={faLock} /> <a href="/privacy-policy">Privacy Policy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;