import Image from "next/image"
import SearchBar from "../FeedPage/SearchBar/searchBar";
import Link from 'next/link'
import "./Navbar.css"
import {useSession, setSession} from '../../backend/db/session'
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import supabase from "../../utils/supabaseClient";



export default function Navbar(){
    let { session, router } = useSession();
    
    function handleIconClick(){
        if (!session){
            router.push('/signin')


        }

    }

    async function signOut(){
        await supabase.auth.signOut()



    }
    
    return(
    <nav className= 'navbar'>
        <ul>
            <li>
            <Image src='/Logo.png' alt = "Communifree logo" id="logo" width="150" height="80"/>
            </li>
            <li>
              <SearchBar/>
            </li>
            <li>
            <Image  onClick={handleIconClick} src="/SigninLogo.bmp" alt = "User profile logo" id="profile-pic" width="70" height="70"/>
            {session && <button id="signOutButton" onClick={signOut}>Sign out</button>}
            </li>
        </ul>
    </nav>
    );
}