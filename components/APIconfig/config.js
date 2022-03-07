//Configurations for FoodStory API
//Read more about the API: add link to API doc/read me

// const API_URL = "https://soc-foodstory.herokuapp.com/";
// const API_URL = "https://recipe-soc-project.herokuapp.com/"

const API_URL = process.env.API_URL

const SEARCH_BASE_URL = `${API_URL}/recipes?search=`
const TYPE_BASE_URL = `${API_URL}/recipes?type=`
const GET_ALL_URL = `${API_URL}/recipes`

export { GET_ALL_URL, SEARCH_BASE_URL, TYPE_BASE_URL }
