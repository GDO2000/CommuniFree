import { useState, useEffect } from 'react';
// import supabase from '../../communifree/utils/supabaseClient'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {  ThemeSupa } from '@supabase/auth-ui-shared'
import { useRouter } from 'next/router'
const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk')

export function useSession() {
    const [session, setSession] = useState(null);
    const router = useRouter();
  
    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
  
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
  
      return () => subscription.unsubscribe();
    }, []);
  
    return { session, router };
  }