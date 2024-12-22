/*
  # Add initial users with proper auth setup

  1. Changes
    - Create auth users first using Supabase auth.users table
    - Insert corresponding profile records with matching IDs
    - Set up initial users:
      - owner@mail.com (owner)
      - admin@mail.com (client_admin)
      - manager@mail.com (client_manager)
      - staff@mail.com (staff)

  2. Security
    - Maintains referential integrity between auth.users and profiles
    - Uses proper password hashing for auth users
    - Preserves existing RLS policies
*/

-- Helper function to create users
CREATE OR REPLACE FUNCTION create_user_with_profile(
  user_email text,
  user_name text,
  user_avatar text,
  user_role user_role
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_user_id uuid;
BEGIN
  -- Insert into auth.users if not exists
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  )
  SELECT
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    user_email,
    crypt('password123', gen_salt('bf')), -- Default password, should be changed on first login
    NOW(),
    NOW(),
    NOW(),
    '{"provider": "email", "providers": ["email"]}',
    format('{"name": "%s"}', user_name)::jsonb,
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  WHERE NOT EXISTS (
    SELECT 1 FROM auth.users WHERE email = user_email
  )
  RETURNING id INTO new_user_id;

  -- Get user id if user already exists
  IF new_user_id IS NULL THEN
    SELECT id INTO new_user_id FROM auth.users WHERE email = user_email;
  END IF;

  -- Insert or update profile
  INSERT INTO public.profiles (id, email, name, avatar_url, role)
  VALUES (new_user_id, user_email, user_name, user_avatar, user_role)
  ON CONFLICT (id) DO UPDATE
  SET 
    name = EXCLUDED.name,
    avatar_url = EXCLUDED.avatar_url,
    role = EXCLUDED.role;
END;
$$;

-- Create initial users
SELECT create_user_with_profile(
  'owner@mail.com',
  'John Owner',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  'owner'::user_role
);

SELECT create_user_with_profile(
  'admin@mail.com',
  'Sarah Admin',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  'client_admin'::user_role
);

SELECT create_user_with_profile(
  'manager@mail.com',
  'Mike Manager',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  'client_manager'::user_role
);

SELECT create_user_with_profile(
  'staff@mail.com',
  'Lisa Staff',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  'staff'::user_role
);

-- Clean up
DROP FUNCTION create_user_with_profile;