import React from 'react'
import './footer.css'
import marsLogo from '../../assets/Mars.svg'

const Footer = () => {
  return (
    <div className="mars__footer section__padding">
      <div className="mars__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others?</h1>
      </div>
      <div className="mars__footer-btn">
        <p>Join now!</p>
      </div>
      
      <div className="mars__footer-links">
        <div className="mars__footer-links_logo">
          <img src={marsLogo} alt="logo" />
          <p>All copyrights reserved</p>
        </div>
        <div className="mars__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contacts</p>
          <p>Counters</p>
          <p>XYZ</p>
        </div>
        <div className="mars__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="mars__footer-links_div">
          <h4>Get in touch</h4>
          <p>Address XYZ#12345</p>
          <p>+12 3456789</p>
          <p>xyz@email.com</p>
        </div>
      </div>
      <div className="mars__footer-copyright">
        <p>2023 MarsExp All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer