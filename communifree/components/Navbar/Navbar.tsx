import Image from "next/image"
import SearchBar from "../feedPage/SearchBar/searchBar"
import Link from 'next/link'


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
            <Link href="/signin">
            <Image src="/SigninLogo.bmp" alt = "User profile logo" id="profile-pic" width="70" height="70"/>
            </Link>
            </li>
        </ul>
    </nav>
    );
}