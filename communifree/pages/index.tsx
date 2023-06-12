import Next from "next";
import Image from 'next/image'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import Feed from "../components/FeedPage/Feed/Feed"
// import styles from './page.module.css'

export default function Home() {
  return (
    <div>
    <h1>CommuniFree was HERE</h1>
    <CreatePostButton/>
    <Feed/>
    </div>
  )
}
