import { React } from "react"
import { link } from "next/link"
import { Button } from "antd"
import { useState } from "react"

//API
import API from "../APIconfig/API"

export default function MtButton({ getMeal, mealTypes }) {
  const fetchRecipesByType = async (mealTypes) => {
    const response = await API.fetchRecipesByType(mealTypes)
    console.log(response)
  }

  function getMeal() {
    console.log("meal type:", mealTypes)
    fetchRecipesByType(mealTypes)
  }

  return (
    <Button onClick={getMeal} type="submit">
      {mealTypes}
    </Button>
  )
}
