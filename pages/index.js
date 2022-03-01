import Image from "next/image";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";
import Link from "next/link"
//import { useRouter } from "next/router";

import { useUser } from "@auth0/nextjs-auth0";


import LoginButton from "../components/LoginButton";



const BgImage = dynamic(
  () => import("../components/BackgroundImage/BackgroundImage.js"),
  {
    ssr: false,
  }
);


export default function Home() {

  
  
const { user, error, isLoading } = useUser();

 

console.log(user)





 

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
  
  <div className={styles.wrapper}> 
  
      <Image
        src="/image/logo_dark.png"
        alt="Foodstory Logo"
        width="1491px"
        height="608px"
        className={styles.logo}
        priority={true}
      />
      <LoginButton
        className={styles.landingButton}
        color="primary"
        size="xl"
        clickable="true"
      >
        <Link href="/api/auth/login">
           <a >Login</a> 
        </Link>
      </LoginButton>
    
      <Link href="/api/auth/logout"><a>Logout</a></Link>

     {/*  <div className="max-w-[500px] border-4 border-indigo-400 rounded-lg p-6 mx-auto text-3xl mt-16 font-bold text-indigo-700 text-center">
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
        )}*/}
      </div>
      <BgImage  />
    </>
  );
}
