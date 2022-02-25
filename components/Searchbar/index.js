import { useContext, useState } from "react"

//libraries
import { Input } from "antd"
import { AudioOutlined } from "@ant-design/icons"

//API
import API from "../APIconfig/API"
import { pageWrapper } from "../../pages/_app"

const { Search } = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
)

function SearchBar() {
  //Use a copy of line 24 to put the results  on any other page
  let { state, setState } = useContext(pageWrapper)
  console.log(state.apiData)

  const fetchRecipesSearch = async (searchTerm) => {
    try {
      //   set error & set Loading
      const response = await API.fetchRecipesSearch(searchTerm)

      console.log(response)

      setState({ ...state, apiData: response.payload })
    } catch (error) {
      //set error
    }
    //set loading
  }

  function onClick(searchTerm) {
    fetchRecipesSearch(searchTerm)
  }

  return (
    <div>
      <Search
        placeholder="What do you fancy?"
        allowClear
        onSearch={onClick}
        style={{ width: 200 }}
      />
    </div>
  )
}

export default SearchBar
