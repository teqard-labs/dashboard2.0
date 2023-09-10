import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import LogoutModal from './partials/LogoutModal';
import './index.css';
import 'tailwindcss/tailwind.css';
import './css/style.css';
import './charts/ChartjsConfig';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  // State for the LogoutModal
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Function to open the LogoutModal
  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  // Function to close the LogoutModal
  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="/dashboard2.0/" element={<LoginPage />} />
          <Route path="/dashboard2.0/analytics" element={<Analytics />} />
          <Route path="/dashboard2.0/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2.0/signup" element={<SignupPage />} />
        </Route>
      </Routes>

      {/* Render LogoutModal conditionally */}
      {isLogoutModalOpen && (
        <LogoutModal closeModal={closeLogoutModal} />
      )}
    </div>
  );
}

export default App;
