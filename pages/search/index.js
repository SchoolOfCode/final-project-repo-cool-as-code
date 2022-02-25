import React, { useContext, useState } from "react"

//styling
import "antd/dist/antd.css"
import SearchStyling from "./Search.module.css"

//components
import RecipeCard from "/components/RecipeCard/RecipeCard.js"
import Grid from "/components/Grid/Grid.js"
import SearchBar from "./../../components/Searchbar/index.js"
import Header from "../../components/Header/Header.js"

//useContext
import { pageWrapper } from "../_app"

const SearchResultsPage = () => {
  let { state, setState } = useContext(pageWrapper)

  return (
    <>
      <Header />
      <div className={SearchStyling.wrapper}>
        <SearchBar />
        <Grid header={`Search Results: ${state.apiMessage}`}>
          {console.log(state.apiData, state.apiMessage)}
          {state.apiData.length > 0
            ? state.apiData.map((item, index) => (
                <RecipeCard
                  key={index}
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

export default SearchResultsPage
// we want to check if the state is undef  if it is undefined  we dont want to map anything
