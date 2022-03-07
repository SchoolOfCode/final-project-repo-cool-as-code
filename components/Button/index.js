import React from "react"

import API from "../APIconfig/API"

const button = ({ id }) => {
  async function deleteRecipe() {
    console.log("delete")
    await API.deleteRecipe(id)
  }
  return (
    <div>
      <button onClick={() => deleteRecipe()} type="submit">
        Delete
      </button>
    </div>
  )
}

export default button
