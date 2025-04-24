import React from 'react';
import CodeBlock from '@/components/common/CodeBlock';
import styles from '@/styles/pages/Overview.module.scss';

const Overview: React.FC = () => {
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

        <section className="section">
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
        </section>

        <section className="section">
          <h2>Quick Start</h2>
          <p>
            To get started with Mudra SSO, you'll need to register your application and obtain client credentials.
            Here's a simple example of authenticating a user with OAuth 2.0:
          </p>
          
          <CodeBlock
            language="javascript"
            title="OAuth 2.0 Authentication Example"
            code={`
// Initialize the Mudra SSO client
const mudraClient = new MudraSSO({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'https://your-app.com/callback'
});

// Redirect to the Mudra authorization endpoint
function login() {
  const authUrl = mudraClient.getAuthorizationUrl({
    scope: 'openid profile email',
    state: generateRandomState()
  });
  window.location.href = authUrl;
}

// Handle the callback after authentication
async function handleCallback(code) {
  try {
    const tokens = await mudraClient.exchangeCodeForTokens(code);
    // Store tokens securely
    localStorage.setItem('access_token', tokens.access_token);
    
    // Get user info
    const userInfo = await mudraClient.getUserInfo(tokens.access_token);
    console.log('User logged in:', userInfo);
  } catch (error) {
    console.error('Authentication error:', error);
  }
}
            `}
          />
        </section>

        <section className="section">
          <h2>Next Steps</h2>
          <p>
            Ready to integrate Mudra SSO into your application? Check out our detailed integration guides:
          </p>
          <ul className={styles.nextStepsList}>
            <li>
              <a href="/integration">Step-by-Step Integration Guide</a>
            </li>
            <li>
              <a href="/api-playground">Try the API in our Interactive Playground</a>
            </li>
            <li>
              <a href="/troubleshooting">Troubleshooting Common Issues</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Overview; 