import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import StatsCards from './stats/StatsCards';
import SalesPerformance from './stats/SalesPerformance';
import ContactsDistribution from './stats/ContactsDistribution';
import ContactsCharacteristics from './stats/ContactsCharacteristics';
import SubscribersDemography from './stats/SubscribersDemography';
import SubscribersSector from './stats/SubscribersSector';
import SubscribersByCountry from './stats/SubscribersByCountry';
import TopSubscribers from './stats/TopSubscribers';
import Navbar from './navigation/Navbar';
import { NavbarProvider } from '../../contexts/NavbarContext';
import ClientsPage from '../clients/ClientsPage';
import OrdersPage from '../orders/OrdersPage';
import ContactsPage from '../contacts/ContactsPage';
import TeamMemberPage from '../team/TeamMemberPage';
import BillingPage from '../billing/BillingPage';

export type PageType = 'dashboard' | 'clients' | 'team' | 'orders' | 'contacts' | 'billing';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <>
            <StatsCards />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <SalesPerformance />
              <ContactsDistribution />
              <ContactsCharacteristics />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <SubscribersDemography />
              <SubscribersSector />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <SubscribersByCountry />
              <TopSubscribers />
            </div>
          </>
        );
      case 'clients':
        return <ClientsPage />;
      case 'team':
        return <TeamMemberPage />;
      case 'orders':
        return <OrdersPage />;
      case 'contacts':
        return <ContactsPage />;
      case 'billing':
        return <BillingPage />;
      default:
        return null;
    }
  };

  return (
    <NavbarProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
        <div className="lg:ml-64 transition-all duration-300">
          <DashboardHeader />
          <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderPage()}
          </main>
        </div>
      </div>
    </NavbarProvider>
  );
};

export default Dashboard;