import Image from "next/image"
import styles from "./styles.module.css"
import dynamic from "next/dynamic"
import Link from "next/link"

import LoginButton from "../components/LoginButton/LoginButton"

const BgImage = dynamic(
  () => import("../components/BackgroundImage/BackgroundImage.js"),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Image
          src="/image/logo_dark.png"
          alt="Foodstory Logo"
          width="1491px"
          height="608px"
          className={styles.logo}
        />
        <LoginButton
          className={styles.landingButton}
          color="primary"
          size="xl"
          clickable="true"
        >
          <Link href="/home">
            <a>LOGIN</a>
          </Link>
        </LoginButton>
      </div>
      <BgImage />
    </>
  )
}
