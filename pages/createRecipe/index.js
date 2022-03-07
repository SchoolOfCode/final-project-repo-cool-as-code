import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import FadeIn from "react-fade-in/lib/FadeIn";
import React, { useState } from "react";
import AddIngredients from "../../components/AddIngredients";
import AddInstructions from "../../components/AddInstructions";
import Button from "../../components/SubmitButton";
import Header from "../../components/Header";

//components
import RecipeForm from "../../components/RecipeForm";

//styling
import styles from "./styles.module.css";

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
			<FadeIn  transitionDuration={500} delay={200}>
			<h1 className={styles.title}>Create Recipe</h1>
			</FadeIn>
			<RecipeForm addNewRecipe={addNewRecipe} />
		</div>
	);
};

export default CreateRecipe;
export const getServerSideProps = withPageAuthRequired();
