import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@/styles/components/Header.module.scss';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? styles.active : '';
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/assets/logo.svg" alt="Mudra SSO" />
          <span>Mudra SSO Guide</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={`${styles.navLink} ${isActive('/')}`}>Home</Link>
          <Link to="/apis" className={`${styles.navLink} ${isActive('/apis')}`}>Apis</Link>
          <Link to="/architecture" className={`${styles.navLink} ${isActive('/architecture')}`}>Architecture</Link>
          {/* <Link to="/troubleshooting" className={`${styles.navLink} ${isActive('/troubleshooting')}`}>Troubleshooting</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header; 