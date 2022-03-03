import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React, { useState } from "react";
import AddIngredients from "../../components/AddIngredients";
import AddInstructions from "../../components/AddInstructions";
import Header from "../../components/Header";

//components
import RecipeForm from "../../components/RecipeForm";

const API_URL = process.env.API_URL;

const CreateRecipe = () => {
	let [recipe, setRecipe] = useState([]);

	async function addNewRecipe(recipe) {
		const response = await fetch(`${API_URL}/recipes`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(recipe),
		});
		const data = await response.json();
		setRecipe(data);
	}

	return (
		<div>
			<Header />
			<h1>Create Recipe</h1>
			<RecipeForm addNewRecipe={addNewRecipe} />
		</div>
	);
};

export default CreateRecipe;
export const getServerSideProps = withPageAuthRequired();
