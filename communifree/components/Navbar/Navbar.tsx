import Image from "next/image"


export default function Navbar(){
    return(
    <nav className= 'navbar'>
        <ul>
            <li>
            <Image src='/logo.png' alt = "Communifree logo" id="logo" width="150" height="80"/>
            </li>
            <li>
          <div className="nav-search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </li>
            <li>
            <Image src="/user.png" alt = "User profile logo" id="profile-pic" width="60" height="60"/>
            </li>
        </ul>
    </nav>
    );
}