import React, { useEffect, useContext } from "react"
//import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image"
import { pageWrapper } from "../_app"

import { withPageAuthRequired } from "@auth0/nextjs-auth0"

//styling
import css from "../home/Home.module.css"

//components
import Header from "../../components/Header"
import MtButton from "../../components/MealTypeButton"
import Grid from "../../components/Grid"
import RecipeCard from "../../components/RecipeCard"

//API
import API from "../../components/APIconfig/API"
import SearchBarWrapper from "../../components/SearchBarWrapper"

const Home = () => {
  let { state, setState } = useContext(pageWrapper)

  const fetchData = async () => {
    try {
      const response = await API.fetchAllRecipes()
      console.log(response)
      setState({
        state,
        apiData: response.payload,
        apiMessage: response.message,
      })
      console.log(state)
    } catch (error) {
      //set error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
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
        {typeof state.searchResult != "undefined" ? (
          <Grid header={`Search Results: ${state.searchMessage}`}>
            {console.log(state.searchResult, state.searchMessage)}
            {state.searchResult.length > 0
              ? state.searchResult.map((item, index) => (
                  <RecipeCard
                    key={index}
                    recipeId={item.id}
                    image={item.image}
                    recipeName={item.title}
                    title={item.story}
                    p1={item.type}
                    p2={item.tags}
                  />
                ))
              : null}
          </Grid>
        ) : null}
        <Grid header={`Your Recipes ${""} `}>
          {state.apiData.length > 0
            ? state.apiData.map((item, index) => (
                <RecipeCard
                  key={index}
                  recipeId={item.id}
                  image={item.image}
                  recipeName={item.title}
                  title={item.story}
                  p1={item.type}
                  p2={item.tags}
                />
              ))
            : null}
        </Grid>
      </div>
    </>
  )
}

export default Home
//export const getServerSideProps = withPageAuthRequired();
