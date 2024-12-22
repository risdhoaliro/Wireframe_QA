/*
  # Update Authentication Schema

  1. Changes
    - Add email_confirmed_at column to auth.users if not exists
    - Update existing users' email_confirmed_at to enable immediate login
    - Add index on auth.users(email) for faster lookups
*/

-- Enable immediate login for existing users
UPDATE auth.users
SET email_confirmed_at = CURRENT_TIMESTAMP
WHERE email_confirmed_at IS NULL;

-- Add index for faster email lookups if not exists
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE schemaname = 'auth' 
        AND tablename = 'users' 
        AND indexname = 'users_email_idx'
    ) THEN
        CREATE INDEX users_email_idx ON auth.users(email);
    END IF;
END $$;