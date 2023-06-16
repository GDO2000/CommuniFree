import { useState } from 'react';
import supabase from '../../communifree/utils/supabaseClient'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {  ThemeSupa } from '@supabase/auth-ui-shared'




export default function SignIn() {
  return(
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
    />
  )
}

