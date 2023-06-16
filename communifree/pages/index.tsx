import Next from "next";
import Image from 'next/image'
import './index.css'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";

import Feed from "../components/FeedPage/Feed/Feed";
import Navbar from "../components/Navbar/Navbar";
import Filters from "../components/FeedPage/Filters/Filters";
import { createClient } from '@supabase/supabase-js'


export default function Home() {
  return (
  <>
    {/* Start of head section */}
    <head>
      {/* Preconnect to Google Fonts API */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      {/* Load the Montserrat font styles */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
    </head>

    {/* Start of main content */}
    <>
      {/* Header section */}
      <header>
        {/* Include the Navbar component */}
        <Navbar/>
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
          <Feed/>
        </div>
      </main>
    </>

  {/* Closing tags */}
  </>
  )
}

