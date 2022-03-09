import React, { useState, useEffect, useContext } from "react"
//import { useUser } from "@auth0/nextjs-auth0";
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
  let [initial, setInitial] = useState(false)
  let [results, setResults] = useState(false)

  //useEffect for fecthing All recipes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.fetchAllRecipes()
        setState({
          ...state,
          apiData: response.payload,
          apiMessage: response.message,
        })
        setInitial(response.payload)
      } catch (error) {
        //set error
      }
    }
    fetchData()
  }, [])

  // useEffect for Search functionality
  useEffect(() => {
    //console.log(results, state.searchResult)
    setResults(state.searchResult)
    //console.log("check state results:", state, "check results:", results)
  }, [state.searchMessage])

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
          <MtButton mealTypes="Snack">Snacks</MtButton>
          <MtButton mealTypes="Dessert">Dessert</MtButton>
          <MtButton mealTypes="Drinks">Drinks</MtButton>
        </div>
        {/* The logic for below needs work */}
        {results &&
          (console.log(!state.searchMessage.length),
          (
            <Grid
              header={`${results.length} Search Results: ${state.searchMessage}`}
            >
              {console.log(state.searchResult, state.searchMessage)}
              {results.length > 0 &&
                results.map((item, index) => (
                  <RecipeCard
                    key={index}
                    recipeId={item.id}
                    image={item.image}
                    recipeName={item.title}
                    title={item.story}
                    p1={item.type}
                    p2={item.tags}
                  />
                ))}
            </Grid>
          ))}

        {/* {initial != undefined && console.log(state.apiData, initial)} */}

        {initial && (
          <Grid header={`Your Recipes ${""} `}>
            {initial.length > 0 &&
              initial.map((item, index) => {
                // console.log(item.id)
                return (
                  <RecipeCard
                    key={index}
                    recipeId={item.id}
                    image={item.image}
                    recipeName={item.title}
                    title={item.story}
                    p1={item.type}
                    p2={item.tags}
                  />
                )
              })}
          </Grid>
        )}
      </div>
    </>
  )
}

export default Home
//export const getServerSideProps = withPageAuthRequired();
