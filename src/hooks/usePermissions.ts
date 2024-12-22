import { useAuth } from '../contexts/AuthContext';
import { rolePermissions } from '../types/auth';

export const usePermissions = () => {
  const { user } = useAuth();
  
  if (!user) {
    return {
      canManageUsers: false,
      canManageClients: false,
      canViewReports: false,
      canManageContacts: false,
      canBulkUpload: false,
      canExportData: false,
      canDeleteData: false,
      canApproveOrders: false,
    };
  }

  return rolePermissions[user.role];
};