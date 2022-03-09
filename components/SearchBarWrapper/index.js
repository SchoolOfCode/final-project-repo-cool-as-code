import React from "react"
import SearchBar from "../SearchBar"

//styles
import SBWstyle from "./SearchBarWrapper.module.css"

function SearchBarWrapper({ setSearchTerm }) {
  return (
    <div className={SBWstyle.Wrapper}>
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default SearchBarWrapper
