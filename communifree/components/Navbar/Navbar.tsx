import Image from "next/image"


export default function Navbar(){
    return(
    <nav>
        <Image src='/Logo.png' alt = "Communifree logo"/>
        <Image src="/userprofile_image.png" alt = "User profile logo"/>
    </nav>
    )
}