import { useState } from "react"

//libraries
import { Input } from "antd"
import { AudioOutlined } from "@ant-design/icons"

//API
import API from "../APIconfig/API"

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
  const [searchTerm, setSearchTerm] = useState("")

  const fetchRecipesSearch = async (searchTerm) => {
    try {
      //   set error & set Loading
      const response = await API.fetchRecipesSearch(searchTerm)
      console.log(response)
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
