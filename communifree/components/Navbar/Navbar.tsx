import Image from "next/image"
import SearchBar from "../FeedPage/SearchBar/searchBar";
import Link from 'next/link'
import "./Navbar.css"
import {useSession} from '../../backend/db/session'
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import supabase from "../../utils/supabaseClient";
import CreatePostButton from "../FeedPage/CreateNewPostButton/CreateNewPostButton";




export default function Navbar({setSearch, handleClick,setPosts, }){
    const { session, router } = useSession();

    
    function handleIconClick(){
        if (!session){
            router.push('/signin')


        }

    }

    async function signOut(){
        await supabase.auth.signOut()
        await router.push("/")



    }
    
    return(
    <nav className= 'navbar'>
        <ul>
            <div className="leftNav">
            <li>
            <img src='/logo.png' alt = "Communifree logo" id="logo" width="150" height="80"/>
            </li>
            <li>
              <SearchBar handleClick={handleClick}  setPosts={setPosts} setSearch={setSearch}/>
            </li>
            </div>
            <div className='rightNav'>
            <li>
              <CreatePostButton/>
            </li>
            <li>
            <img  onClick={handleIconClick} src="/ProfilePic.png" alt = "User profile logo" id="profile-pic" width="70" height="70"/>
            {session && <button id="signOutButton" onClick={signOut}>Sign out</button>}
            </li>
            </div>
        </ul>
    </nav>
    );
}
