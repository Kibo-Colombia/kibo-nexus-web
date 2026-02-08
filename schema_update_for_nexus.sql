-- ============================================
-- SHARED PROFILES MIGRATION (CFO + Nexus)
-- Run this in your Supabase SQL Editor to support both apps
-- ============================================

-- 1. Add columns required by Nexus to the existing profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS username text UNIQUE,
ADD COLUMN IF NOT EXISTS full_name text,
ADD COLUMN IF NOT EXISTS avatar_url text,
ADD COLUMN IF NOT EXISTS website text,
-- Ensure username length constraint if not exists
DROP CONSTRAINT IF EXISTS username_length;

ALTER TABLE public.profiles
ADD CONSTRAINT username_length CHECK (char_length(username) >= 3);


-- 2. Update the handle_new_user trigger to support both apps
--    This ensures that whether a user signs up from CFO or Nexus,
--    their profile is created correctly with all available data.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    -- CFO uses display_name, Nexus uses full_name. We populate both.
    display_name,
    full_name,
    avatar_url,
    username
  )
  VALUES (
    NEW.id,
    NEW.email,
    -- Try to get display_name, fallback to full_name, then empty string
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', ''),
    -- Try to get full_name, fallback to display_name, then empty string
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'display_name', ''),
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'username'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Ensure the trigger is active
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 4. Enable RLS (Should already be enabled, but just in case)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 5. Ensure policies exist for public access (Nexus requirement)
--    The CFO app might not have had public read access.
--    We add it safely.
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'profiles' AND policyname = 'Public profiles are viewable by everyone.'
    ) THEN
        CREATE POLICY "Public profiles are viewable by everyone." 
        ON profiles FOR SELECT USING (true);
    END IF;
END
$$;
