import React from "react";
import AddIngredients from "../../components/AddIngredients";
import AddInstructions from "../../components/AddInstructions";

//components
import RecipeForm from "../../components/RecipeForm";

const API_URL = process.env.API_URL;

const createRecipe = () => {
	async function addNewRecipe(recipe) {
		const response = await fetch(`${API_URL}/recipes`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(recipe),
		});
		const data = await response.json();
		console.log(data);
	}

	return (
		<div>
			<h1>Create Recipe</h1>
			<RecipeForm addNewRecipe={addNewRecipe} />
		</div>
	);
};

export default createRecipe;
