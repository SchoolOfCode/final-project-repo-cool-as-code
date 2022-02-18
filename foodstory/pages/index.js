import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
   <h1> Food Story</h1>
   <a href='/CreateRecipePage'> Create Recipe </a>
   <a href='/SearchRecipePage'> Search Recipe </a>
   </>
  )
}
