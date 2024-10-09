import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Wellcome To My Website</h1>
      <nav>
       <ul>
         <li><Link href = "/Home_Page" target="-blank">Home</Link></li>
         <li><Link href = "/Contact_Page" target="-blank">Contact</Link></li>
         <li><Link href = "/Services_Page" target="-blank">Services</Link></li>
         <li><Link href = "/About_Page" target="-blank">About</Link></li>
       </ul>
      </nav> 
    </div>
  )
}
