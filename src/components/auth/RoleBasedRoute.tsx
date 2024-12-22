import React from 'react';
import { usePermissions } from '../../hooks/usePermissions';

interface RoleBasedRouteProps {
  children: React.ReactNode;
  requiredPermission: keyof ReturnType<typeof usePermissions>;
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ 
  children, 
  requiredPermission 
}) => {
  const permissions = usePermissions();

  if (!permissions[requiredPermission]) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Access Denied
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          You don't have permission to access this feature.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default RoleBasedRoute;