import React from "react"

//styling
import PageStyling from "./HomeStyle.module.css"
import "antd/dist/antd.css"

//components
import Header from "../../components/Header/Header.js"
import SearchBar from "../../components/SearchBar"
import MtButton from "../../components/MealTypeButton/MealTypeButton"
import FeatureButton from "../../components/FeatureButton/FeatureButton.js"

const SearchPage = () => {
  // async function getMealTypeRecipe(mealType)

  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <SearchBar />
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
  )
}

export default SearchPage
