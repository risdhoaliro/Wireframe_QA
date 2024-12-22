import { User } from '../types/auth';

export const dummyUsers: User[] = [
  {
    id: '1',
    email: 'owner@mail.com',
    name: 'John Owner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: 'owner'
  },
  {
    id: '2',
    email: 'admin@mail.com',
    name: 'Sarah Admin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'client_admin'
  },
  {
    id: '3',
    email: 'manager@mail.com',
    name: 'Mike Manager',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'client_manager'
  },
  {
    id: '4',
    email: 'staff@mail.com',
    name: 'Lisa Staff',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    role: 'staff'
  }
];

export const validateCredentials = (email: string, _password: string): User | null => {
  // For demo purposes, any password will work
  const user = dummyUsers.find(u => u.email === email);
  return user || null;
};