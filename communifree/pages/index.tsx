import Next from "next";
import Image from 'next/image'
import './index.css'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import FeedPage from '../components/FeedPage/Feed/Feed'
import '../components/Navbar/Navbar.css'
import Navbar from "../components/Navbar/Navbar";
import Filters from '../components/FeedPage/Filters/Filters'

export default function Home() {
  return (
  <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
    </head>
    <>
      <header>
      <Navbar/>
      </header>
      <main>
      <div>
      <Filters/>
      </div>
      <div className='buttonAndFeed'>
      <CreatePostButton/>
      <FeedPage/>
      </div>
      </main>
    </>
    </>
  )
}
