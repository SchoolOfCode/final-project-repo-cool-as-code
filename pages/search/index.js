import React from "react"

//styling
import "antd/dist/antd.css"

//components
import RecipeCard from "/components/RecipeCard/RecipeCard.js"
import Grid from "/components/Grid/Grid.js"
import SearchBar from "/components/SearchBar/SearchBar"

const Arr = [
  "https://media.istockphoto.com/photos/people-laughing-at-dinner-table-picture-id1181396290?k=20&m=1181396290&s=612x612&w=0&h=HuHaBwesWsMnlZeoBOMqsa_xbo6H0nc3Vfa2CN_We2g=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WXgA7BWwKq7f8CwtJmvPpiYk3LsAey0dZw&usqp=CAU",
]

const SearchResultsPage = () => {
  let searchTerm = "Results for: Breakfast"
  return (
    <>
      <h1>Search Page</h1>
      <SearchBar />
      <Grid header={searchTerm}>
        {Arr.map((i) => (
          <RecipeCard key={i} image={i} />
        ))}
      </Grid>
    </>
  )
}

export default SearchResultsPage
