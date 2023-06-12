import Next from "next";
import Image from 'next/image'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import Feed from "../components/FeedPage/Feed/Feed"
// import styles from './page.module.css'
import Navbar from "../components/Navbar/Navbar";
import SignUp from "./signup/signup";
import SignIn from "./signin/signin"

export default function Home() {
  return (

    <div>
    <Navbar
    ></Navbar>
    <h1>CommuniFree</h1>
    <CreatePostButton/>
    <Feed/>
    </div>
  )
}

