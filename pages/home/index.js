import React from "react"

//styling
import PageStyling from "../home/Home.module.css"

//components
import Header from "../../components/Header"
import SearchInput from "../../components/SearchInput"
import MtButton from "../../components/MealTypeButton"
import FeatureButton from "../../components/FeatureButton"

const Home = () => {
  return (
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
  )
}

export default Home
