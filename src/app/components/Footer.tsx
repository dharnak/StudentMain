'use client';
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.foot}>
      © {year} StudentDashboard. All rights reserved.
    </footer>
  );
};

export default Footer;
