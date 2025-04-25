import React from 'react';
import styles from '@/styles/pages/Architecture.module.scss';

const Architecture: React.FC = () => {
  return (
    <div className={styles.architecturePage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Mudra SSO Architecture</h1>
          <p className={styles.subtitle}>
            Understanding how Mudra SSO works under the hood
          </p>
        </section>

        <section className="section">
          <h2>System Architecture APIs</h2>
          <div className={styles.architectureDiagram}>
            <img src="/assets/architecture-diagram.svg" alt="Mudra SSO Architecture Diagram" />
          </div>
          <p>
            Mudra SSO follows a modern microservices architecture that enables scalability, resilience, and flexibility.
            The system consists of several key components that work together to provide a seamless authentication experience.
          </p>
        </section>

        <section className="section">
          <h2>Key Components</h2>
          <div className={styles.componentsGrid}>
            <div className={styles.componentCard}>
              <h3>Authentication Service</h3>
              <p>Handles user authentication requests, validates credentials, and issues JWT tokens.</p>
            </div>
            <div className={styles.componentCard}>
              <h3>Token Service</h3>
              <p>Manages token generation, validation, refresh, and revocation.</p>
            </div>
            <div className={styles.componentCard}>
              <h3>User Management Service</h3>
              <p>Handles user registration, profile management, and account settings.</p>
            </div>
            <div className={styles.componentCard}>
              <h3>Application Registry</h3>
              <p>Manages registered applications, client credentials, and redirect URIs.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Authentication Flow</h2>
          <div className={styles.flowSteps}>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>1</div>
              <div className={styles.flowStepContent}>
                <h3>User Initiates Login</h3>
                <p>User clicks the login button in your application, which redirects to the Mudra SSO login page.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>2</div>
              <div className={styles.flowStepContent}>
                <h3>Authentication</h3>
                <p>User enters credentials or uses social login. Mudra validates the credentials.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>3</div>
              <div className={styles.flowStepContent}>
                <h3>Token Generation</h3>
                <p>Upon successful authentication, Mudra generates JWT tokens (access token, refresh token).</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>4</div>
              <div className={styles.flowStepContent}>
                <h3>Redirect with Tokens</h3>
                <p>User is redirected back to your application with tokens or an authorization code.</p>
              </div>
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>5</div>
              <div className={styles.flowStepContent}>
                <h3>Token Validation</h3>
                <p>Your application validates the token and establishes a user session.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section">
          <h2>JWT Token Structure</h2>
          <p>
            Mudra SSO uses JSON Web Tokens (JWT) for secure authentication. A JWT consists of three parts: header, payload, and signature.
          </p>
          <CodeBlock
            language="json"
            title="JWT Token Structure"
            code={`
// Header
{
  "alg": "RS256",
  "typ": "JWT"
}

// Payload
{
  "sub": "1234567890",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "iat": 1516239022,
  "exp": 1516242622,
  "aud": "client_id",
  "iss": "https://mudra-sso.example.com"
}

// Signature
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
            `}
          />
          <div className={styles.tokenExplanation}>
            <h3>JWT Token Fields</h3>
            <ul>
              <li><strong>sub</strong>: Subject (user ID)</li>
              <li><strong>name</strong>: User's full name</li>
              <li><strong>email</strong>: User's email address</li>
              <li><strong>iat</strong>: Issued at (timestamp)</li>
              <li><strong>exp</strong>: Expiration time (timestamp)</li>
              <li><strong>aud</strong>: Audience (client ID)</li>
              <li><strong>iss</strong>: Issuer (Mudra SSO server URL)</li>
            </ul>
          </div>
        </section> */}

        <section className="section">
          <h2>Security Considerations</h2>
          <div className={styles.securityGrid}>
            <div className={styles.securityCard}>
              <h3>Token Storage</h3>
              <p>Store tokens securely using HTTP-only cookies or secure local storage mechanisms.</p>
            </div>
            <div className={styles.securityCard}>
              <h3>HTTPS</h3>
              <p>Always use HTTPS for all communications between your application and Mudra SSO.</p>
            </div>
            <div className={styles.securityCard}>
              <h3>Token Validation</h3>
              <p>Always validate tokens on your server before granting access to protected resources.</p>
            </div>
            <div className={styles.securityCard}>
              <h3>CSRF Protection</h3>
              <p>Implement CSRF tokens to prevent cross-site request forgery attacks.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture; 