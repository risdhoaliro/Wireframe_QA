import React from 'react';

const LoginFooter = () => {
  return (
    <div className="text-center mt-6">
      <p className="text-sm text-gray-600">
        No account yet?{' '}
        <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginFooter;