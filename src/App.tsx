import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Troubleshooting from './pages/Troubleshooting';
import './styles/global.scss';
import Apis from './pages/Apis';
import { ChatBot } from 'dissu-talks/src/components/ChatBot';

const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apis" element={<Apis />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/troubleshooting" element={<Troubleshooting />} />
              <Route path="*" element={<div className="container"><h1>Page Not Found</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
    <ChatBot
        directLlmConfig={{
          apiEndpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
          apiKey: import.meta.env.VITE_GEMINI_API_KEY || '', 
          headers: {
            "Content-Type": "application/json"
          },
          formatMessages: (messages, newMessage, context) => ({
            contents: [
              ...(context ? [{ role: "user", parts: [{ text: context }] }] : []),
              ...messages.map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
              })),
              { role: 'user', parts: [{ text: newMessage }] }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000
            }
          }),
          parseResponse: (data) => data.candidates[0].content.parts[0].text
        }}
        context="This is a chatbot that serves as a documentation and guide Mudra SSO Guide: Business Use Case Overview
          This application serves as a comprehensive documentation portal for Mudra SSO (Single Sign-On), a business authentication solution. From a business perspective:
          Core Purpose
          The Mudra SSO Guide is designed to help businesses and developers understand, implement, and troubleshoot a centralized authentication system that allows users to access multiple applications with a single set of credentials.
          Business Value Proposition
          Simplified Authentication: Provides businesses with a way to implement secure authentication across multiple applications without requiring users to maintain separate credentials.
          Developer Enablement: Offers clear documentation, API references, and integration guides to help technical teams implement the SSO solution with minimal friction.
          3. Security Enhancement: Promotes enterprise-grade security practices by centralizing user management and implementing industry-standard authentication protocols.
          Operational Efficiency: Reduces IT overhead by centralizing user management, permissions, and access controls in a single system.
          Target Audience
          The application targets:
          Technical decision-makers evaluating SSO solutions
          Developers implementing authentication systems
          IT administrators managing user access across multiple applications
          Business Use Cases
          The application specifically addresses:
          Enterprise Application Integration: Businesses with multiple internal applications needing unified authentication
          SaaS Product Authentication: Software companies wanting to provide secure access to their suite of products
          Partner Ecosystem Access: Organizations needing to provide controlled access to partners and vendors
          The Mudra SSO Guide serves as both a marketing tool to explain the value of the SSO solution and a technical resource to facilitate its implementation, ultimately helping businesses improve security while enhancing user experience."
        responseType="formal"
        position="bottom-right"
        welcomeMessage="Welcome! How may I help?"
        styling={{ widgetColor: "#4a6cf7", textColor: "#ffffff" }}
        theme="light"
        placeholderText="Ask your question..."
      />
    </>
  );
};

export default App;
