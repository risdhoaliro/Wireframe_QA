// import React from 'react';
import { Building2 } from 'lucide-react';

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <Building2 className="w-12 h-12 mx-auto text-gray-700" />
      <p className="mt-2 text-gray-600">Please enter your credentials to access your account</p>
    </div>
  );
};

export default LoginHeader;