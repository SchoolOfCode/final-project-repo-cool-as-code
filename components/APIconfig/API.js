import { API_URL, SEARCH_BASE_URL } from "../APIconfig/config";

const apiSettings = {
	fetchRecipes: async (searchTerm) => {
		const endpoint = `${SEARCH_BASE_URL}${searchTerm}`;
		return await (await fetch(endpoint)).json();
	},
	fetchRecipe: async (recipeId) => {
		const endpoint = `${API_URL}recipes/${recipeId}`;
		return await (await fetch(endpoint)).json();
	},
};
export default apiSettings;
