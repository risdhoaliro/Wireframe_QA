export interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  revenue: number;
  lastContact: string;
  avatar: string;
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: 'lead' | 'proposal' | 'negotiation' | 'closed';
  probability: number;
  customer: string;
}

export interface Activity {
  id: string;
  type: 'call' | 'email' | 'meeting';
  title: string;
  date: string;
  customer: string;
  completed: boolean;
}