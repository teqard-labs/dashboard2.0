import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import './index.css';
import 'tailwindcss/tailwind.css';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change


  return (
    <>
    
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/dashboard2.0/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard2.0/login" element={<LoginPage/>} />
        <Route exact path="/dashboard2.0/signup" element={<SignupPage/>} />
      </Routes>
    </>
  );
}

export default App;
