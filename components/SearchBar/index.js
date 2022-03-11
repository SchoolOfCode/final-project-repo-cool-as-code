import React, { useState, useContext } from "react"

//style
import SBstyles from "./SearchBar.module.css"

// chakra ui search bar
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

//useContext
import { pageWrapper } from "../../pages/_app"

//API fetch
import API from "../APIconfig/API"

function SearchBar() {
  let { state, setState } = useContext(pageWrapper)
  const [value, setValue] = useState("")
  //const handleChange = (event) => setValue(event.target.value)

  const fetchSearch = async (value) => {
    const response = await API.fetchRecipesSearch(value)
    //console.log(response)
    response.message != "all recipes" &&
      setState({
        ...state,
        searchSuccess: response.success,
        searchResult: response.payload,
        searchMessage: response.message,
      })
  }

  // const onClick = () => {
  //   fetchSearch(value)
  //   //console.log(state.searchMessage)
  // }

  return (
    <InputGroup size="lg">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        placeholder="Search Recipes"
        outlineColor="darkgrey"
        width="90%"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            fetchSearch(value)
          }
        }}
      />
    </InputGroup>
  )
}

export default SearchBar
