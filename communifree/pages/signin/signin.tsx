import { useState } from 'react';
import supabase from '../../../utils/supabaseClient';

const SignUp = () => {
  const [email, setEmail] = useState(''); // State variable to store the email input value
  const [password, setPassword] = useState(''); // State variable to store the password input value

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ // Function to sign up the user using Supabase
      email,
      password,
    });

    if (error) {
      console.error('Error signing up:', error.message); // Display an error message if sign-up fails
    } else {
      console.log('Sign-up successful!'); // Log a success message if sign-up is successful
      // Handle successful sign-up, e.g., redirect to another page
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignIn}>Sign Up</button>
    </div>
  );
};

export default SignUp;
