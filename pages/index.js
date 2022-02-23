import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header/Header.js";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import RecipeCard from "../components/RecipeCard";


export default function Home() {
  return (
    <>
<Header/>
    
      <h1> Food Story </h1>
      <h3>User Login</h3>
      <Navbar />
      <Link href="/home">
        <a>Search</a>
      </Link>
      <br></br>
      <Link href="/createRecipe">
        <a>Create</a>
      </Link>
      <RecipeCard />
    </>
  );
}
