import React from 'react';

import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-pink-200 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <button  onClick={() => navigate('/')} className="rounded-2xl px-6 py-2 text-lg btn btn-primary">
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;