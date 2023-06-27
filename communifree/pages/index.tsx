import { useState, useEffect } from 'react';
// import supabase from '../../communifree/utils/supabaseClient'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {  ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession} from '../backend/db/session'
import { useRouter } from 'next/router';
import  './index.css'
import Image from "next/image"
import Head from 'next/head';


const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk')


export default function SignIn() {
 
  const { session, router } = useSession();

  

  if (!session) {
    return (
      <> 
      <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"/>
      </Head>
             <div id = 'signIn'>
             
                 <div id = 'header'> 

                 <Image src='/logosign.png' alt = "Communifree logo" id="logo" width="200" height="100"/>
                </div>
                 <div id="Auth">
                 <h1> Join the CommuniFree family!</h1>
                    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
                 </div> 
                 
             </div>
             <div id= "footer-container">
                <h2 id='title' > Our Mission...</h2><br></br>
                <div id="columns">
                      <div id="community">
                          <Image src= '/community1.png' width="150" height="120" alt="community logo"></Image>
                          <h3>Community</h3>
                          <p>As our name suggests, our goal is to build community connections in your local area. We are stronger together! </p>
                      </div>
                      <div id="cash">
                          <Image src= '/cash.png' width="120" height="120" alt="cash logo"></Image>
                          <h3>Save your cash!</h3>
                          <p>The produce you'll find on the CommuniFree app is free, and we're commited to keeping it that way!</p>
                      </div>
                      <div id="planet">
                        <Image src= '/planet.png' width="120" height="120" alt="planet logo"></Image>
                        <h3>Save the planet!</h3>
                        <p>Join the movement in reducing food waste and shaping a greener world for everyone</p>
                      </div>
                </div>
             </div>   
             </>
                            
  )} else {
    router.push('/feedpage');
  }
  }








