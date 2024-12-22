import { db } from './db';
import { users } from './db/schema';
import { eq } from 'drizzle-orm';
import type { User } from '../types/auth';

export async function validateUser(email: string, password: string): Promise<User | null> {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      name: user.name || '',
      avatar: user.avatarUrl || '',
      role: user.role as User['role']
    };
  } catch (error) {
    console.error('Error validating user:', error);
    return null;
  }
}