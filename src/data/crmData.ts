import { Customer, Deal, Activity } from '../types/crm';

export const customers: Customer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    status: 'active',
    revenue: 15000,
    lastContact: '2024-03-15',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen@techcorp.com',
    status: 'active',
    revenue: 28000,
    lastContact: '2024-03-14',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma.d@startup.io',
    status: 'pending',
    revenue: 5000,
    lastContact: '2024-03-10',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

export const deals: Deal[] = [
  {
    id: '1',
    title: 'Enterprise Software Solution',
    value: 75000,
    stage: 'negotiation',
    probability: 80,
    customer: '1'
  },
  {
    id: '2',
    title: 'Cloud Migration Project',
    value: 45000,
    stage: 'proposal',
    probability: 60,
    customer: '2'
  },
  {
    id: '3',
    title: 'Security Audit Package',
    value: 28000,
    stage: 'lead',
    probability: 40,
    customer: '3'
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    type: 'call',
    title: 'Follow-up Call with Sarah',
    date: '2024-03-16T10:00:00',
    customer: '1',
    completed: false
  },
  {
    id: '2',
    type: 'meeting',
    title: 'Product Demo for TechCorp',
    date: '2024-03-15T14:30:00',
    customer: '2',
    completed: true
  },
  {
    id: '3',
    type: 'email',
    title: 'Proposal Follow-up',
    date: '2024-03-15T09:00:00',
    customer: '3',
    completed: true
  }
];