import { useContext } from "react"
import Router from "next/router"
import { useRouter } from "next/router"

//libraries
import { Input } from "antd"
import { AudioOutlined } from "@ant-design/icons"

//API
import API from "../APIconfig/API"

//Page Wrapper for useContext
import { pageWrapper } from "../../pages/_app"
import { css } from "@emotion/react"
import styles from "./SearchInput.module.css"
import { color, style } from "@mui/system"

const { Search } = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
)

function SearchInput() {
  //Use a copy of line below to put the results  on any other page
  let { state, setState } = useContext(pageWrapper)
  const router = useRouter()
  // console.log(state.apiData)

  const fetchRecipesSearch = async (searchTerm) => {
    try {
      //   set error & set Loading
      const response = await API.fetchRecipesSearch(searchTerm)

      setState({
        ...state,
        searchResult: response.payload,
        searchMessage: response.message,
      })
      console.log(state)
      if (router.pathname === "/search" || response.payload.length === 0) {
        return
      } else {
        Router.push("/search")
      }
    } catch (error) {
      //set error
    }
    //set loading
  }

  function onClick(searchTerm) {
    searchTerm != "" ? fetchRecipesSearch(searchTerm) : null
    //console.log(searchTerm)
  }

  return (
    <div className={styles.searchBox}>
      <h1 className={styles.title}>What Do You Fancy?</h1>
      <Search
        className={styles.input}
        placeholder="Search"
        allowClear
        onSearch={onClick}
        style={{ width: 300 }}
      />
    </div>
  )
}

export default SearchInput
