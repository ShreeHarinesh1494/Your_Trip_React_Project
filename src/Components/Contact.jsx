import React from "react";
import "../Assests/css/Contact.css";
import { Link } from "react-router-dom";
import img1 from '../Assests/images/your-trip-high-resolution-logo.jpeg'
const Contact = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-corner"></div>
        <div className="nav-options">
          <h1>Contact Us</h1>
          <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
        </div>
      </nav>
      <div class="circle-imgs">
                <img src={img1} alt="YourTrip Image"/>
            </div>
      <div className="head">
        <h1>Your Trip</h1>
        <p>
          We value your inquiries and feedback at "Your Trip" and are committed
          to providing you with excellent service. Whether you have questions
          about trip planning, need assistance with our application, or want to
          share your travel experiences with us, we're here to help.
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="contacts-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-home"></i>
              </div>

              <div class="contact-info-content">
                {/* <h4>Address</h4> */}
                <p>
                  4671 Sugar Camp Road,
                  <br /> Owatonna, Minnesota, <br />
                  55060
                </p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-phone"></i>
              </div>

              <div class="contact-info-content">
                {/* <h4>Phone</h4> */}
                <p>+1 123 456 7890</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>

              <div class="contact-info-content">
                {/* <h4>Email</h4> */}
                <p>info@yourTrip.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
