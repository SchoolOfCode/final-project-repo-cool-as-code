
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
//import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

//styling
import PageStyling from "../home/Home.module.css";

//components
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import MtButton from "../../components/MealTypeButton";
import FeatureButton from "../../components/FeatureButton";

const Home = () => {
  //const [nickName , setNickName] = useState("")
    const {user , error , isLoading} = useUser();
  const [nickName , setNickName] = useState("");
  const [subId , setSubId] = useState("");
    const [ userInfo , setUserInfo] =  useState({sub:"", nickName:""})

    

    async function postUser(nickName , subId){
 let response = await fetch('http://localhost:5002/users',{
	method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(use),

 })
 
  
    }
   


 
useEffect(()=>{
setUserInfo(user)



  },[user])


useEffect(()=>{

setSubId(userInfo)
setNickName(userInfo)


  },[userInfo])

 console.log(subId)
 console.log(nickName) 
 console.log(user)






  
  
  
   if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>
  
  
  return (
    <>
   
      <div>
        <Header />
        <h1>Home Page</h1>

        <SearchInput />
        <nav className={PageStyling.grid}>
          <MtButton onClick={() => getMeal} mealTypes="Breakfast" />
          <MtButton onClick={() => getMeal} mealTypes="Lunch" />
          <MtButton onClick={() => getMeal} mealTypes="Dinner" />
          <MtButton onClick={() => getMeal} mealTypes="Snack" />
          <FeatureButton />
          <FeatureButton />
          <FeatureButton />
          <FeatureButton />
        </nav>
      </div>
    </>
  );
};

export default Home;
export const getServerSideProps = withPageAuthRequired();
