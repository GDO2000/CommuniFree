import Image from "next/image"


export default function Navbar(){
    return(
    <nav className= 'navbar'>
        <ul>
            <li>
            <Image src='/Logo.png' alt = "Communifree logo" id="logo" width="80" height="80"/>
            </li>
            <li>
          <div className="nav-search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </li>
            <li>
            <Image src="/userprofile_image.png" alt = "User profile logo" id="profile-pic" width="80" height="80"/>
            </li>
        </ul>
    </nav>
    );
}