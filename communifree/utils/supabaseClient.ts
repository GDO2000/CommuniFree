import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Retrieve the Supabase URL from environment variable, or assign an empty string if not defined
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';

// Retrieve the Supabase key from environment variable, or assign an empty string if not defined
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

// Create a Supabase client instance using the URL and key
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Export the Supabase client instance as the default export of the module
export default supabase;
