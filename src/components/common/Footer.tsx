import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/components/Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Mudra SSO</h3>
            <p>Secure, scalable Single Sign-On solution for modern applications.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Documentation</h3>
            <ul>
              <li><Link to="/overview">Overview</Link></li>
              <li><Link to="/architecture">Architecture</Link></li>
              <li><Link to="/prerequisites">Prerequisites</Link></li>
              <li><Link to="/integration">Integration Guide</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Resources</h3>
            <ul>
              <li><Link to="/api-playground">API Playground</Link></li>
              <li><Link to="/troubleshooting">Troubleshooting</Link></li>
              <li><a href="https://github.com/mudra-sso" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://mudra-sso.slack.com" target="_blank" rel="noopener noreferrer">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Mudra SSO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 