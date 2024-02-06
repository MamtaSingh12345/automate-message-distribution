// Footer.js

import React from 'react';
import stylesF from '../../css/footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={stylesF.footer}>
      <div className={stylesF.footerContent}>
        <div className={stylesF.footerSection}>
          <h5>About Us</h5>
          <p>This is Automate-Email-Messages distribution application.</p>
        </div>
        <div className={stylesF.footerSection}>
          <h5>Contact Us</h5>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={stylesF.footerSection}>
          <h5>Follow Us</h5>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;