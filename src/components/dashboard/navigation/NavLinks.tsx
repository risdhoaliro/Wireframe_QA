import React from 'react';
import { LayoutDashboard, Users, ShoppingCart, Contact, User, UserPlus, Receipt } from 'lucide-react';
import NavLink from './NavLink';
import { useAuth } from '../../../contexts/AuthContext';
import { PageType } from '../Dashboard';

interface NavLinksProps {
  onPageChange: (page: PageType) => void;
  currentPage: PageType;
}

const NavLinks: React.FC<NavLinksProps> = ({ onPageChange, currentPage }) => {
  const { user } = useAuth();
  const isClientAdmin = user?.role === 'client_admin';

  return (
    <nav className="p-4 space-y-1">
      <NavLink
        href="#"
        icon={LayoutDashboard}
        label="Dashboard"
        active={currentPage === 'dashboard'}
        onClick={() => onPageChange('dashboard')}
      />
      
      {/* Show Clients link only for non-client-admin users */}
      {!isClientAdmin && (
        <NavLink
          href="#"
          icon={Users}
          label="Clients"
          active={currentPage === 'clients'}
          onClick={() => onPageChange('clients')}
        />
      )}

      {/* Show Team Members link only for client-admin users */}
      {isClientAdmin && (
        <NavLink
          href="#"
          icon={UserPlus}
          label="Team Members"
          active={currentPage === 'team'}
          onClick={() => onPageChange('team')}
        />
      )}

      <NavLink
        href="#"
        icon={ShoppingCart}
        label="Orders"
        active={currentPage === 'orders'}
        onClick={() => onPageChange('orders')}
        badge="99+"
      />
      
      <NavLink
        href="#"
        icon={Contact}
        label="Contacts"
        active={currentPage === 'contacts'}
        onClick={() => onPageChange('contacts')}
      />

      {/* Show Billing link only for client-admin users */}
      {isClientAdmin && (
        <NavLink
          href="#"
          icon={Receipt}
          label="Billing"
          active={currentPage === 'billing'}
          onClick={() => onPageChange('billing')}
        />
      )}
      
      <NavLink
        href="#"
        icon={User}
        label="My Account"
      />
    </nav>
  );
};

export default NavLinks;