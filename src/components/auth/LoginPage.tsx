import React from 'react';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image placeholder */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-100">
        <div className="h-full flex items-center justify-center">
          <div className="w-64 h-64 border-4 border-gray-300 flex items-center justify-center">
            <span className="text-6xl">×</span>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <LoginForm onSignUpClick={handleSignUpClick} />
      </div>
    </div>
  );
};

export default LoginPage;