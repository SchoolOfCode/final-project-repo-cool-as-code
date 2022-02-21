import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <Image src="/vercel.svg" width="50px" height="50px" alt="applogo"></Image>

      <Link href="/search">
        <a>SearchBarIcon</a>
      </Link>
      <Link href="/home">
        <a>HamburgerMenuIcon</a>
      </Link>
    </nav>
  );
}
