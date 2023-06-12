import Image from "next/image"


export default function Navbar(){
    return(
    <nav>
        <ul>
            <li>
            <Image src='/Logo.png' alt = "Communifree logo" id="logo" width="80" height="80"/>
            </li>
            <li>
            <Image src="/userprofile_image.png" alt = "User profile logo" id="profile-pic" width="80" height="80"/>
            </li>
            <li>Log in</li>
        </ul>
    </nav>
    );
}