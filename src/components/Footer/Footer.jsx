import React from 'react';
import './style.scss';

const Footer = () => (
  <div className="footer">
    <div className="contact">
      <ul>
        <li>Phone: +250789277275</li>
        <li>Email: info@readit.info</li>
        <li>Address: KG 15 Av</li>
      </ul>
    </div>
    <div className="copyright">
      <h3>© 2017 ReadIt. All rights reserved | Design by Titans Devs</h3>
      <p>“Save the World by Sharing a Part of Your Brain!”</p>
    </div>
    <div className="links">
      <ul>
        <ul>Help</ul>
        <ul>Privacy</ul>
        <ul>Terms</ul>
        <ul>Careers</ul>
      </ul>
    </div>
  </div>
);

export default Footer;
