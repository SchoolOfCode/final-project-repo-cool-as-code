import React, { useState, useEffect, useContext } from "react"
import { useUser } from "@auth0/nextjs-auth0"

import { pageWrapper } from "../_app"
import FadeIn from "react-fade-in/lib/FadeIn"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"

import { Grid } from "@nextui-org/react"

//styling
import css from "../home/Home.module.css"

//components
import Header from "../../components/Header"
import MtButton from "../../components/MealTypeButton"

//import Grid from "../../components/Grid";

import RecipeCard from "../../components/RecipeCard"

//API
import API from "../../components/APIconfig/API"
import SearchBarWrapper from "../../components/SearchBarWrapper"

const Home = () => {
  let { state, setState } = useContext(pageWrapper)
  let [initial, setInitial] = useState(false)
  let [results, setResults] = useState(false)

  //useUser from Auth) to get user
  const { user, error, isLoading } = useUser()

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
    setResults(state.searchResult)
    //console.log(state.searchMessage)
  }, [state.searchMessage])

  return (
    <>
      <Header />
      <FadeIn transitionDuration={500} delay={200}>
        <h1 className={css.title}>What do you fancy?</h1>
      </FadeIn>
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
        {state.searchMessage != "" && (
          <>
            <div
              className={css.heading}
            >{`${results.length} Search results ${state.searchMessage}`}</div>

            <Grid.Container gap={2} justify="flex-start">
              {/* {console.log(state.searchResult, state.searchMessage)} */}
              {results.length > 0 &&
                results.map((item, index) => (
                  <Grid xs={12} sm={3} key={index}>
                    <RecipeCard
                      key={index}
                      recipeId={item.id}
                      image={item.image}
                      recipeName={item.title}
                      // title={item.story}
                      p1={item.type}
                      p2={item.tags}
                    />
                  </Grid>
                ))}
            </Grid.Container>
          </>
        )}

        <div className={css.heading}>Your Recipes</div>
        {initial && (
          <Grid.Container gap={2} justify="flex-start" display="flex:">
            {initial.length > 0 &&
              initial.map((item, index) => {
                return (
                  <Grid xs={12} sm={3} key={index}>
                    <RecipeCard
                      key={index}
                      recipeId={item.id}
                      image={item.image}
                      recipeName={item.title}
                      p1={item.type}
                      p2={item.tags}
                    />
                  </Grid>
                )
              })}
          </Grid.Container>
        )}
      </div>
    </>
  )
}

export default Home
//export const getServerSideProps = withPageAuthRequired();
