import React from 'react';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';
import { useNavbar } from '../../../contexts/NavbarContext';

interface NavbarProps {
  onPageChange: (page: 'dashboard' | 'clients' | 'orders') => void;
  currentPage: 'dashboard' | 'clients' | 'orders';
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const { isOpen, toggleNavbar } = useNavbar();

  return (
    <>
      {/* Toggle button - only visible on mobile */}
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg lg:hidden"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Backdrop - only on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleNavbar}
        />
      )}

      {/* Sidebar - always visible on desktop, toggleable on mobile */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full bg-white dark:bg-gray-800 shadow-xl 
        transition-transform duration-300 ease-in-out w-64
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-white text-lg">📊</span>
            </span>
            CRM Application
          </h1>
        </div>
        
        <NavLinks onPageChange={onPageChange} currentPage={currentPage} />
      </aside>
    </>
  );
};

export default Navbar;