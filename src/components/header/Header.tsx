import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <nav className={styles.nav}>
        <Link to="/" className={styles.active}>
          Home
        </Link>
        <Link to="/about">About Us</Link>
        <Link to="/resources">Our Learning Resources</Link>
        <Link to="/success">Success Stories</Link>
      </nav>
      <div className={styles.separate}></div>
      <Link to="/contact" className={styles.button}>
        Contact Us
      </Link>
    </div>
  );
};
