import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/pages/Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Secure Authentication Made Simple</h1>
            <p className={styles.heroSubtitle}>
              Mudra SSO provides a seamless Single Sign-On experience for your users across all your applications.
            </p>
            <div className={styles.heroCta}>
              <Link to="/integration" className="btn btn-primary">Start Integration</Link>
              <Link to="/apis-playground" className="btn btn-outline-primary">Try API</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
          <img src="/assets/hero-illustration.svg" alt="Mudra SSO Illustration" />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Mudra SSO?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Enhanced Security</h3>
              <p>Implement industry-standard security protocols with JWT-based authentication and authorization.</p>
            </div>
            {/* <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Improved User Experience</h3>
              <p>One-click access to all your applications with a single set of credentials.</p>
            </div> */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Centralized User Management</h3>
              <p>Manage user access, permissions, and roles from a single dashboard.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛠️</div>
              <h3>Easy Integration</h3>
              <p>Simple Apis and SDKs for quick implementation across various platforms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.getStarted}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Get Started in Minutes</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Register Your Application</h3>
              <p>Create a Mudra SSO account and register your application to get whitelisted.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Integrate the Apis</h3>
              <p>Add the Mudra Apis to your application for easy authentication and authorization.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Configure Authentication</h3>
              <p>Set up authentication flows and customize the login experience for your users.</p>
            </div>
          </div>
          {/* <div className={styles.getStartedCta}>
            <Link to="/prerequisites" className="btn btn-primary">View Prerequisites</Link>
          </div> */}
        </div>
      </section>

      {/* <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Trusted by Developers</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>"Implementing Mudra SSO cut our authentication development time by 70%. The documentation is clear and the API is intuitive."</p>
              <div className={styles.testimonialAuthor}>
                <strong>Sarah Chen</strong>
                <span>Lead Developer, TechCorp</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Our users love the seamless login experience across all our applications. Mudra SSO has significantly improved our user retention."</p>
              <div className={styles.testimonialAuthor}>
                <strong>Michael Rodriguez</strong>
                <span>CTO, AppWorks</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 