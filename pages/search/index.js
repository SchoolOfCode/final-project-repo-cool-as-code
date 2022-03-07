import React, { useContext } from "react"

//styling
import SearchStyling from "./SearchStyle.module.css"

//components
import RecipeCard from "../../components/RecipeCard"
import Grid from "../../components/Grid"
import SearchInput from "../../components/SearchInput"
import Header from "../../components/Header"

//useContext
import { pageWrapper } from "../_app"

const SearchResultsPage = () => {
  let { state, setState } = useContext(pageWrapper)

  return (
    <>
      <Header />
      <div className={SearchStyling.wrapper}>
        <SearchInput />
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
        ) : null}{" "}
      </div>
    </>
  )
}

export default SearchResultsPage
