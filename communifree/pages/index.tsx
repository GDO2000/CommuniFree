import Next from "next"; 
import Image from 'next/image'
import './index.css'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Dispatch, SetStateAction } from 'react';

import Feed from "../components/FeedPage/Feed/Feed";
import '../components/Navbar/Navbar.css';
import Navbar from "../components/Navbar/Navbar";
import Filters from '../components/FeedPage/Filters/Filters'


import { useState, useEffect } from 'react'
  import { createClient } from '@supabase/supabase-js'
  import { Auth } from '@supabase/auth-ui-react'
  import { ThemeSupa } from '@supabase/auth-ui-shared'

  const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk')
  interface Post {
    [key: string]: string | number; // Adjust the types based on your actual data structure
  }
interface Props {
  handleClick: () => Post[];
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Home(){
   const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");
    const [fetchError, setFetchError] = useState<string | null>("");

    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const { data, error } = await supabase.from("post_info").select();
  
          if (error) {
            throw new Error("Could not fetch any posts");
          }
  
          setPosts(data || []);
          setFilteredPosts(data || []);
        } catch (error) {
          console.log(error);
          setFetchError("Could not fetch any posts");
        }
      };
  
      fetchPosts();
    }, []);
  function handleClick(): Array<Post>{
    const returnArray: Post[] = posts.filter((post) => {
      const postValues = Object.values(post).map((value) => {
        if (value !== null && value !== undefined) {
          return value.toString().toLowerCase();
        }
        return '';
      });
      const searchTerm = search.toLowerCase();
      return postValues.some((value) => value.includes(searchTerm));
    });
    setFilteredPosts(returnArray)
    return returnArray
}
  return(
    <>
     <head>
    {/* Preconnect to Google Fonts API */}
    {/* Load the Montserrat font styles */}
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
  </head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>

  {/* Start of main content */}
  <>
    {/* Header section */}
    <header>
      {/* Include the Navbar component */}
      <Navbar handleClick={handleClick}  setPosts={setPosts} setSearch={setSearch as Dispatch<SetStateAction<string>>}/>
    </header>

    {/* Main section */}
    <main>
      <div>
        {/* Include the Filters component */}
        <Filters/>
      </div>

      <div className='buttonAndFeed'>
        {/* Include the CreatePostButton component */}
        <CreatePostButton/>
        {/* Include the FeedPage component */}
        <Feed handleClick={handleClick}  setPosts={setPosts} posts={filteredPosts} setSearch={setSearch}/>
      </div>
    </main>
  </>
  </>
  )
  }
