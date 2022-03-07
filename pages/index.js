import Image from "next/image";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
//import { useRouter } from "next/router";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useUser } from "@auth0/nextjs-auth0";

import LoginButton from "../components/LoginButton";

const BgImage = dynamic(
  () => import("../components/BackgroundImage/BackgroundImage.js"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { error, isLoading } = useUser();

  // you can use the error and loading state to show an error message or a loading spinner while loading.
  if (isLoading) {
    return (
      <div className="text-5xl font-semibold text-center text-indigo-600">
        ...loading{" "}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-5xl font-semibold text-center text-indigo-600">
        {error.message}
      </div>
    );
  }

  return (
    <>
      <BgImage />
      <div className={styles.wrapper}>
       <FadeIn delay={2000} transitionDuration={3000}  >
        <Image
          src="/image/logo_dark.png"
          alt="Foodstory Logo"
          width="1491px"
          height="608px"
          className={styles.logo}
          priority={true}
        /></FadeIn>
        <FadeIn delay={4000} transitionDuration={3000} >
        <LoginButton
          className={styles.landingButton}
          color="primary"
          size="xl"
          clickable="true"
        >
          <Link href="/api/auth/login">
            <a>Login</a>
          </Link>
        </LoginButton>
          </FadeIn>
        <Link href="/api/auth/logout">
          <a id={styles.id}>Logout</a>
        </Link>

      <div></div>
      </div>
    
    </>
  );
}
