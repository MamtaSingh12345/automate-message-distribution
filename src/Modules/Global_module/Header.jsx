import React from 'react';
import stylesH from "../../css/header.module.css";

const Header = () => {
  return (
    <nav className={stylesH.navbar}>
      <div className={stylesH.brand}>Messages Distribution</div>
      <div className={stylesH.navLinks}>
        <div className={stylesH.navItem}>Home</div>
        <div className={stylesH.navItem}>Login</div>
        <div className={stylesH.navItem}>Message</div>
        <div className={stylesH.navItem}>Contact</div>
      </div>
    </nav>
  );
}

export default Header;
