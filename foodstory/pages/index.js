import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
   <h1> Food Story</h1>
  <Link href='/CreateRecipePage'><a> Create Recipe</a> </Link>
    <Link href='/SearchRecipePage'><a> Search Recipe</a> </Link>
 


   </>
  )
}
