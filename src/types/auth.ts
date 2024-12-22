export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: UserRole;
}

export type UserRole = 'owner' | 'client_admin' | 'client_manager' | 'staff';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface RolePermissions {
  canManageUsers: boolean;
  canManageClients: boolean;
  canViewReports: boolean;
  canManageContacts: boolean;
  canBulkUpload: boolean;
  canExportData: boolean;
  canDeleteData: boolean;
  canApproveOrders: boolean;
}

export const rolePermissions: Record<UserRole, RolePermissions> = {
  owner: {
    canManageUsers: true,
    canManageClients: true,
    canViewReports: true,
    canManageContacts: true,
    canBulkUpload: true,
    canExportData: true,
    canDeleteData: true,
    canApproveOrders: true,
  },
  client_admin: {
    canManageUsers: true,
    canManageClients: false,
    canViewReports: true,
    canManageContacts: true,
    canBulkUpload: true,
    canExportData: true,
    canDeleteData: false,
    canApproveOrders: true,
  },
  client_manager: {
    canManageUsers: false,
    canManageClients: false,
    canViewReports: true,
    canManageContacts: true,
    canBulkUpload: true,
    canExportData: true,
    canDeleteData: false,
    canApproveOrders: false,
  },
  staff: {
    canManageUsers: false,
    canManageClients: false,
    canViewReports: false,
    canManageContacts: true,
    canBulkUpload: false,
    canExportData: false,
    canDeleteData: false,
    canApproveOrders: false,
  },
};