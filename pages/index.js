import Image from "next/image";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { useUser } from "@auth0/nextjs-auth0";

import LoginButton from "../components/LoginButton";

const BgImage = dynamic(
  () => import("../components/BackgroundImage/BackgroundImage.js"),
  {
    ssr: false,
  }
);

export default function Home() {
  // function changePage() {
  //   navigate("/createRecipe");
  // }
  const { user, error, isLoading } = useUser();
  // let navigate = useNavigate();
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
      {/* // <div className={styles.wrapper}> */}
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
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

      <div className="max-w-[500px] border-4 border-indigo-400 rounded-lg p-6 mx-auto text-3xl mt-16 font-bold text-indigo-700 text-center">
        {user && (
          <p className="mb-6">
            <Link href="/home">
              <a>Home</a>
            </Link>
            Welcome <span className="text-amber-600">{user.name}</span>
          </p>
        )}
        {!user && (
          <p>You are Not signed In, Please Sign In to view the Secret Pages.</p>
        )}
      </div>
      <BgImage />
    </>
  );
}
