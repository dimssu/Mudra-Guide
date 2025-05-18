import React, { useState } from 'react';
import CodeBlock from '@/components/common/CodeBlock';
import styles from '@/styles/pages/Apis.module.scss';

type ApiKey = 'register' | 'login' | 'refresh-token' | 'logout' | 'verify-token';

const Apis: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<ApiKey>('register');
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopy = (text: string, api: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess(api);
        setTimeout(() => setCopySuccess(null), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  const apiEndpoints = {
    register: {
      title: 'Register',
      description: 'Register a new user account in the Mudra SSO system.',
      curl: `curl -X POST http://mudra.dimssu.com/mudra/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "securePassword123",
    "firstName": "John",
    "lastName": "Doe"
  }'`
    },
    login: {
      title: 'Login',
      description: 'Authenticate a user and receive access and refresh tokens.',
      curl: `curl -X POST http://mudra.dimssu.com/mudra/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "securePassword123"
  }'`
    },
    'refresh-token': {
      title: 'Refresh Token',
      description: 'Get a new access token using a valid refresh token.',
      curl: `curl -X POST http://mudra.dimssu.com/mudra/auth/refresh-token \\
  -H "Content-Type: application/json" \\
  -d '{
    "refreshToken": "YOUR_REFRESH_TOKEN"
  }'`
    },
    logout: {
      title: 'Logout',
      description: 'Invalidate the current session and revoke tokens.',
      curl: `curl -X POST http://mudra.dimssu.com/mudra/auth/logout \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`
    },
    'verify-token': {
      title: 'Verify Token',
      description: 'Validate an access token and get user information.',
      curl: `curl -X POST http://mudra.dimssu.com/mudra/auth/verify-token \\
  -H "Content-Type: application/json" \\
  -d '{
    "token": "YOUR_ACCESS_TOKEN"
  }'`
    }
  };

  return (
    <div className={styles.overviewPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Mudra SSO Integration Guide</h1>
          <p className={styles.subtitle}>
            Seamlessly integrate Single Sign-On authentication into your applications
          </p>
        </section>

        <section className="section">
          <h2>What is Mudra SSO?</h2>
          <p>
            Mudra SSO is a secure, scalable Single Sign-On solution that allows your users to access multiple applications
            with a single set of credentials. It supports various authentication protocols including OAuth 2.0, OpenID Connect,
            and SAML 2.0.
          </p>
        </section>

        {/* <section className="section">
          <h2>Key Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Multi-Protocol Support</h3>
              <p>Integrate with OAuth 2.0, OpenID Connect, and SAML 2.0</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Customizable Flows</h3>
              <p>Tailor the authentication experience to your application's needs</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Robust Security</h3>
              <p>Enterprise-grade security with MFA, anomaly detection, and more</p>
            </div>
            <div className={styles.featureCard}>
              <h3>User Management</h3>
              <p>Comprehensive user lifecycle management capabilities</p>
            </div>
          </div>
        </section> */}

        <section className="section">
          <h2>API Reference</h2>
          <p>
            Explore our API endpoints to integrate Mudra SSO into your application. 
            Select an endpoint from the menu to see example requests.
          </p>
          
          <div className={styles.apiContainer}>
            <div className={styles.apiMenu}>
              <h3>Endpoints</h3>
              <ul>
                {Object.entries(apiEndpoints).map(([key, api]) => (
                  <li 
                    key={key} 
                    className={selectedApi === key ? styles.active : ''}
                    onClick={() => setSelectedApi(key as ApiKey)}
                  >
                    {api.title}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.apiContent}>
              <h3>{apiEndpoints[selectedApi].title}</h3>
              <p>{apiEndpoints[selectedApi].description}</p>
              <div className={styles.codeBlockContainer}>
                <CodeBlock
                  language="bash"
                  title={`${apiEndpoints[selectedApi].title} API Request`}
                  code={apiEndpoints[selectedApi].curl}
                />
                <button 
                  className={styles.copyButton}
                  onClick={() => handleCopy(apiEndpoints[selectedApi].curl, selectedApi)}
                >
                  {copySuccess === selectedApi ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section">
          <h2>Next Steps</h2>
          <p>
            Ready to integrate Mudra SSO into your application? Check out our detailed integration guides:
          </p>
          <ul className={styles.nextStepsList}>
            <li>
              <a href="/integration">Step-by-Step Integration Guide</a>
            </li>
            <li>
              <a href="/apis-playground">Try the API in our Interactive Playground</a>
            </li>
            <li>
              <a href="/troubleshooting">Troubleshooting Common Issues</a>
            </li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default Apis; 