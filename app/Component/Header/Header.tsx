import Link from "next/link";

function Header () {
    return(
      <div className="underline underline-offset-2 flex justify-center items-center pr-8 text-xl pt-4 pb-6">
        <ul>
      <span className="p-0"><a href = "/Home">Home</a></span>
      <span className="pl-12"><a href = "/Contact">Contact</a></span>
      <span className="pl-12"><a href = "/Services">Services</a></span>
      <span className="pl-12"><a href = "/About">About</a></span>
    </ul>
    </div>
    )
}

export default Header;