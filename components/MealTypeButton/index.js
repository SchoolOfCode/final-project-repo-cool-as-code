import { useContext, React } from "react"

//styles
import styles from "./Button.module.css"

//API
import API from "../APIconfig/API"

//Page wrapper for useContext
import { pageWrapper } from "../../pages/_app"

export default function MtButton(props) {
  const { mealTypes, children } = props
  let { state, setState } = useContext(pageWrapper)

  const fetchRecipesByType = async (mealTypes) => {
    const response = await API.fetchRecipesByType(mealTypes)
    // console.log(mealTypes)
    setState({
      ...state,
      searchSuccess: response.success,
      searchResult: response.payload,
      searchMessage: response.message,
    })
    //console.log(response)
  }

  function getMeal() {
    fetchRecipesByType(mealTypes)
  }

  return (
    <button onClick={getMeal} type="submit" className={styles.button}>
      {children}
    </button>
  )
}
