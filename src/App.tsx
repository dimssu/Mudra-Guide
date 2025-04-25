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

const App: React.FC = () => {
  return (
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
  );
};

export default App;
