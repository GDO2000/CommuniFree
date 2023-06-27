import { useState, useEffect } from 'react';
// import supabase from '../../communifree/utils/supabaseClient'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {  ThemeSupa } from '@supabase/auth-ui-shared'
import { useRouter } from 'next/router'
import { useSession} from '../backend/db/session'
import  './index.css'


const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk')


export default function SignIn() {
 
  const { session, router } = useSession();

  

  if (!session) {
    return (
  <div id="Auth">
  <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  </div>
  )} else {
    router.push('/feedpage');
  }
}