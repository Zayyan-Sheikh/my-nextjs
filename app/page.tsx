import Image from "next/image";
import Link from "next/link";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className = "bg-stone-600 text-white text-6xl py-8 flex justify-center items-center pr-8 mx-60">This Is Hero Section</div>
      <div  className = "flex justify-center items-center pr-8 bg-stone-600 text-white mx-60">Wellcome To Our Website</div>
      <div  className = "flex justify-center items-center pr-8 py-12 text-2xl">About Us</div>
      <Footer></Footer>
    </div>
  )
}
