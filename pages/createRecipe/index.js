import React, { useState } from "react";
import AddIngredients from "../../components/AddIngredients";
import AddInstructions from "../../components/AddInstructions";

//components
import RecipeForm from "../../components/RecipeForm";

const API_URL = process.env.API_URL;

const CreateRecipe = () => {
	let [recipe, setRecipe] = useState([]);

	async function addNewRecipe(recipe) {
		const response = await fetch("http://localhost:5000/recipes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(recipe),
		});
		const data = await response.json();
		setRecipe(data);
	}

	return (
		<div>
			<h1>Create Recipe</h1>
			<RecipeForm addNewRecipe={addNewRecipe} />
		</div>
	);
};

export default CreateRecipe;
