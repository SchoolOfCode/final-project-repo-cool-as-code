import React, { useContext } from "react";

//styling
import SearchStyling from "./SearchStyle.module.css";

//components
import RecipeCard from "../../components/RecipeCard";
import Grid from "../../components/Grid";
import SearchInput from "../../components/SearchInput";
import Header from "../../components/Header";

//useContext
import { pageWrapper } from "../_app";

const SearchResultsPage = () => {
  let { state, setState } = useContext(pageWrapper);

  return (
    <>
      <Header />
      <div className={SearchStyling.wrapper}>
        <SearchInput />
        <Grid header={`Search Results: ${state.apiMessage}`}>
          {console.log(state.apiData, state.apiMessage)}
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
  );
};

export default SearchResultsPage;
