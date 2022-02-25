import { useContext, React } from "react"
import Router from "next/router"

import { Button } from "antd"
import { useState } from "react"

//Page wrapper for useContext
import { pageWrapper } from "../../pages/_app"
//API
import API from "../APIconfig/API"

export default function MtButton({ getMeal, mealTypes }) {
  let { state, setState } = useContext(pageWrapper)
  const fetchRecipesByType = async (mealTypes) => {
    const response = await API.fetchRecipesByType(mealTypes)
    setState({
      ...state,
      apiData: response.payload,
      apiMessage: response.message,
    })
    console.log(response)
  }

  function getMeal() {
    fetchRecipesByType(mealTypes)
    Router.push("/search")
  }

  return (
    <Button onClick={getMeal} type="submit">
      {mealTypes}
    </Button>
  )
}
