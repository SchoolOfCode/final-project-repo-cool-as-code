import React, { useEffect, useContext } from "react";
//import { useUser } from "@auth0/nextjs-auth0";
//import Image from "next/image";
import { pageWrapper } from "../_app";

//import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

//styling
import css from "../home/Home.module.css";

//components
import Header from "../../components/Header";
import MtButton from "../../components/MealTypeButton";
import SearchInput from "../../components/SearchInput";

//API
import API from "../../components/APIconfig/API";
import SearchBarWrapper from "../../components/SearchBarWrapper";

const Home = () => {
  let { state, setState } = useContext(pageWrapper);

  const fetchData = async () => {
    try {
      const response = await API.fetchAllRecipes();
      console.log(response);
      setState({
        apiData: response.payload,
        apiMessage: response.message,
      });
    } catch (error) {
      //set error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Header />
        {/* <SearchInput /> */}
        <SearchBarWrapper />
        <div className={css.background}>
          <div className={css.buttons}>
            <MtButton mealTypes="Breakfast">Breakfast</MtButton>

            <MtButton mealTypes="Lunch">Lunch</MtButton>

            <MtButton mealTypes="Dinner">Dinner</MtButton>

            <MtButton mealTypes="Snacks">Snacks</MtButton>

            <MtButton mealTypes="Dessert">Dessert</MtButton>

            <MtButton mealTypes="Drinks">Drinks</MtButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
//export const getServerSideProps = withPageAuthRequired();
