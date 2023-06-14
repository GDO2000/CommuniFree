import Image from "next/image"
import SearchBar from "../FeedPage/SearchBar"


export default function Navbar(){
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
            <Image src="/user.png" alt = "User profile logo" id="profile-pic" width="60" height="60"/>
            </li>
        </ul>
    </nav>
    );
}