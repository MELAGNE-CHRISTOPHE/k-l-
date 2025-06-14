import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/Auth/SplashScreen';
import SignupScreen from './pages/Auth/SignupScreen';
import LoginScreen from './pages/Auth/LoginScreen';
import './App.css'; // Keep global styles if any

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default App;
