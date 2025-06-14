import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-xs p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Connexion</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email ou Numéro de téléphone"
            className="border p-2 rounded w-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="border p-2 rounded w-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Mot de passe oublié ?
          </Link>
        </p>
        <p className="mt-2 text-center">
          <Link to="/signup" className="text-sm text-blue-500 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Pas encore de compte ? S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
