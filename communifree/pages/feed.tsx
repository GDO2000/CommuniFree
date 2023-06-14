import Next from "next";
import Feed from '../components/FeedPage/Feed/Feed'
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import SearchBar from "../components/FeedPage/SearchBar";

export default function FeedPage(){

    return(

    <>
    <SearchBar/>
    <CreatePostButton/>
        <Feed/>
    </>
    )
}