//Configurations for FoodStory API
//Read more about the API: add link to API doc/read me

const API_URL = "https://soc-foodstory.herokuapp.com/";
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}recipes?search=`;

export { API_URL, API_KEY, SEARCH_BASE_URL };
