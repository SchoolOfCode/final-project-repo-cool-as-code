import React from "react";

//components
import Button from "../../components/Button";

const createRecipe = () => {
	async function addNewRecipe(recipe) {
		const response = await fetch(
			"https://recipe-soc-project.herokuapp.com/recipes",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(recipe),
			}
		);
		const data = await response.json();
		console.log(data);
	}
	return (
		<div>
			<h1>Create Recipe</h1>
			<Button addNewRecipe={addNewRecipe} />
		</div>
	);
};

export default createRecipe;
