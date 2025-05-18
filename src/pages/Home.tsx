import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaUsers, FaCogs, FaSyncAlt } from 'react-icons/fa';
import styles from '@/styles/pages/Home.module.scss';

const featureList = [
  {
    icon: <FaLock className={styles.featureIcon} />, 
    title: 'Enhanced Security',
    desc: 'Implement industry-standard security protocols with JWT-based authentication and authorization.'
  },
  // {
  //   icon: <FaSyncAlt className={styles.featureIcon} />,
  //   title: 'Centralized User Management',
  //   desc: 'Manage user access, permissions, and roles from a single dashboard.'
  // },
  {
    icon: <FaCogs className={styles.featureIcon} />,
    title: 'Easy Integration',
    desc: 'Simple APIs and SDKs for quick implementation across various platforms.'
  },
  {
    icon: <FaUsers className={styles.featureIcon} />,
    title: 'Seamless User Experience',
    desc: 'One-click access to all your applications with a single set of credentials.'
  }
];

const testimonials = [
  {
    quote: 'Implementing Mudra SSO cut our authentication development time by 70%. The documentation is clear and the API is intuitive.',
    author: 'Sarah Chen',
    role: 'Lead Developer, TechCorp'
  },
  {
    quote: 'Our users love the seamless login experience across all our applications. Mudra SSO has significantly improved our user retention.',
    author: 'Michael Rodriguez',
    role: 'CTO, AppWorks'
  }
];

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.tagline}>Enterprise-Grade SSO for Modern Applications</span>
            <h1>Secure Authentication Made Simple</h1>
            <p className={styles.heroSubtitle}>
              Mudra SSO provides a seamless Single Sign-On experience for your users across all your applications.
            </p>
            <div className={styles.heroCta}>
              <Link to="/apis" className="btn btn-primary">Start Integration</Link>
              <Link to="/architecture" className="btn btn-outline-primary">Learn More</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/assets/hero-illustration.svg" alt="Mudra SSO Illustration" className={styles.animatedHeroImg} />
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Mudra SSO?</h2>
          <div className={styles.featureGrid}>
            {featureList.map((f, i) => (
              <div className={styles.featureCard} key={i}>
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
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
              <h3>Integrate the APIs</h3>
              <p>Add the Mudra APIs to your application for easy authentication and authorization.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Configure Authentication</h3>
              <p>Set up authentication flows and customize the login experience for your users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.testimonials}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Trusted by Developers</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div className={styles.testimonialCard} key={i}>
                <p>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 