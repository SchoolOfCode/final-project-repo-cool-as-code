import React, { useState, useContext } from "react"

// chakra ui search bar
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

//useContext
import { pageWrapper } from "../../pages/_app"

//API fetch
import API from "../APIconfig/API"

function SearchBar() {
  let { state, setState } = useContext(pageWrapper)
  const [value, setValue] = useState("")
  const handleChange = (event) => setValue(event.target.value)

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

  const onClick = () => {
    fetchSearch(value)
    //console.log(state.searchMessage)
  }

  // useEffect(() => {
  //   console.log(value)
  //   value != "" && fetchSearch(value)
  // }, [value])

  return (
    <InputGroup size="lg" outlineColor="darkgrey">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input placeholder="Search Recipes" width="90%" onChange={handleChange} />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={onClick}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
