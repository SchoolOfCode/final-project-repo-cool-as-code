import React, { useState, useEffect, useRef, useContext } from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

import { pageWrapper } from "../../pages/_app"

function SearchBar({ setSearchTerm }) {
  let { state, setState } = useContext(pageWrapper)
  const [value, setValue] = useState("")
  const initial = useRef(true)
  const handleChange = (event) => setValue(event.target.value)

  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
  }, [setSearchTerm, value])

  return (
    <InputGroup display="flex" alignItems="center">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        display="flex"
        alignItems="center"
        placeholder="Search Recipes"
        size="md"
        width="90%"
        outlineColor="darkgrey"
        onChange={handleChange}
      />
    </InputGroup>
  )
}

export default SearchBar
