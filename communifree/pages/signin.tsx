import { useState, useEffect } from 'react';
// import supabase from '../../communifree/utils/supabaseClient'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {  ThemeSupa } from '@supabase/auth-ui-shared'
import { useRouter } from 'next/router'
import { useSession} from '../backend/db/session'
import  './signin.css'
import Image from "next/image"


const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk')


export default function SignIn() {
 
  const { session, router } = useSession();

  

  if (!session) {
    return (
             <div id = 'signIn'>
                 <div id = 'header'> 

                 <Image src='/Logo.png' alt = "Communifree logo" id="logo" width="150" height="80"/>
                 
                 </div>
                 <div id="Auth">
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
                 </div>
                 <div id = 'footer'></div>
             </div>
                            
  
  






  )} else {
    router.push('/');
  }
  }

