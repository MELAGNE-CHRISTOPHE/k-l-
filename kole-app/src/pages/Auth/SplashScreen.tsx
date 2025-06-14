import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Logo Kôlê</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">VOTRE TRAJET, NOTRE MISSION</p>
    </div>
  );
};

export default SplashScreen;
