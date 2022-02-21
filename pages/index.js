import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <>
          <Navbar />
      <h1> Food Story </h1>
      <h3>User Login</h3>

      <Link href="/home">
        <a>Search</a>
      </Link>
      <br></br>
      <Link href="/createRecipe">
        <a>Create</a>
      </Link>
    </>
  );
}
