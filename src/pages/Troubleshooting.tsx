import React from 'react';
import styles from '@/styles/pages/Troubleshooting.module.scss';

const Troubleshooting: React.FC = () => {
  return (
    <div className={styles.troubleshootingPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Troubleshooting</h1>
          <p className={styles.subtitle}>
            Common issues and solutions for Mudra SSO integration
          </p>
        </section>

        <section className="section">
          <h2>Coming Soon</h2>
          <p>
            The troubleshooting guide is currently under development. Please check back soon for solutions to common issues you might encounter when integrating Mudra SSO.
          </p>
          <p>
            In the meantime, you can explore the <a href="/overview">Overview</a> and <a href="/architecture">Architecture</a> sections to understand how Mudra SSO works.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Troubleshooting; 