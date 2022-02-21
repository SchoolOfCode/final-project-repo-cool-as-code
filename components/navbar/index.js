import Link from "next/link";
import Image from "next/image";
import css from "./navbar.module.css"
import Hamburger from "../hambugerMenu";

export default function Navbar() {
  return (
    <nav className={css.Navbar}>
     
      <Image src="/vercel.svg" width="50px" height="50px" alt="applogo"></Image>

<Hamburger/>     
      
    </nav>
  );
}
