import { API_URL, API_KEY, SEARCH_BASE_URL } from "../APIconfig/config";

const apiSettings = {
  fetchRecipes: async (searchTerm) => {
    const endpoint = searchTerm`${SEARCH_BASE_URL}${searchTerm}`;
    return await (await fetch(endpoint)).json();
  },
  fetchRecipe: async (recipeId) => {
    const endpoint = `${API_URL}recipes/${recipeId}`;
    return await (await fetch(endpoint)).json();
  },
};
export default apiSettings;
