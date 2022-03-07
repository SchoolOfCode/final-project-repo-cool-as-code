import {
  API_URL,
  SEARCH_BASE_URL,
  TYPE_BASE_URL,
  GET_ALL_URL,
} from "../APIconfig/config"

const apiSettings = {
  fetchRecipesSearch: async (searchTerm) => {
    const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
    return await (await fetch(endpoint)).json()
  },
  fetchRecipesByType: async (type) => {
    //console.log(`${TYPE_BASE_URL}${type}`);
    const endpoint = `${TYPE_BASE_URL}${type}`
    return await (await fetch(endpoint)).json()
  },
  fetchAllRecipes: async () => {
    const endpoint = `${GET_ALL_URL}`
    return await (await fetch(endpoint)).json()
  },
  fetchRecipe: async (recipeId) => {
    const endpoint = `${API_URL}recipes/${recipeId}`
    return await (await fetch(endpoint)).json()
  },
  updateRecipe: async (dataToSend) => {
    const endpoint = await fetch(`${API_URL}recipes`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
    return await (await fetch(endpoint)).json()
  },
  //  DELETE - /recipes/recipe_id - deleteRecipe
}
export default apiSettings
