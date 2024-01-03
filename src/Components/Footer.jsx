import React from 'react';
import '../Assests/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const HomeFooter = () => {
  return (
    <div>
      <footer>
        <p>&copy; 2023 Your Trip. All rights reserved.</p>
        <div className="footer-content">
          <div className="social-icons">
            <Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Link>
            <Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></Link>
          </div>
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faPhone} /> Contact: +1 123 456 7890</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@yourTrip.com</p>
            <p><FontAwesomeIcon icon={faLock} /> <Link to="/privacy-policy">Privacy Policy</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;