import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
import { API_URL, SEARCH_BASE_URL, TYPE_BASE_URL } from "../APIconfig/config"

const apiSettings = {
  fetchRecipesSearch: async (searchTerm) => {
    const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
    return await (await fetch(endpoint)).json()
  },
  fetchRecipesByType: async (type) => {
    console.log(`${TYPE_BASE_URL}${type}`)
    const endpoint = `${TYPE_BASE_URL}${type}`
    return await (await fetch(endpoint)).json()
  },
  fetchRecipe: async (recipeId) => {
    const endpoint = `${API_URL}recipes/${recipeId}`
    return await (await fetch(endpoint)).json()
  },
  createNewRecipe: async (dataToSend) => {
    const endpoint = await fetch(`${API_URL}recipes`, {
      method: "POST",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify(dataToSend),
    })
    return await (await fetch(endpoint)).json()
  },
  updateRecipe: async (dataToSend) => {
    const endpoint = await fetch(`${API_URL}recipes`, {
      method: "PUT",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify(dataToSend),
    })
    return await (await fetch(endpoint)).json()
  },
  // PUT - /recipes/recipe_id - updateRecipe
  //  DELETE - /recipes/recipe_id - deleteRecipe
}
export default apiSettings
