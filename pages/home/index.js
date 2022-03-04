import React from "react";
//import { useUser } from "@auth0/nextjs-auth0";
//import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

//styling
import css from "../home/Home.module.css";

//components
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import MtButton from "../../components/MealTypeButton";
import FeatureButton from "../../components/FeatureButton";

const Home = () => {


  return (
    <>
      <div>
        <Header />
       
        <SearchInput />
        <div className={css.centerLabel}>
        <h2 className={css.label}>Search for a meal type below</h2>
</div>

        <nav className={css.grid}>
          <MtButton onClick={() => getMeal} mealTypes="Breakfast" />
          <MtButton onClick={() => getMeal} mealTypes="Lunch" />
          <MtButton onClick={() => getMeal} mealTypes="Dinner" />
          <MtButton onClick={() => getMeal} mealTypes="Snack" />
 </nav>

          <FeatureButton />
          <FeatureButton />
          <FeatureButton />
          <FeatureButton />
         
       
        
      </div>
    </>
  );

};

export default Home;
export const getServerSideProps = withPageAuthRequired();
