import Next from "next";
import CreatePostButton from "../components/FeedPage/CreateNewPostButton/CreateNewPostButton";
import SearchBar from "../components/FeedPage/SearchBar";

export default function Feed(){

    return(
    <>
    <SearchBar/>
    <CreatePostButton/>
    </>
    )
}