import React from "react";
import MtButton from "/components/MealTypeButton/MealTypeButton.js";
import { useState, useEffect } from "react";
import css from "./search.module.css";
import RecipeCard from "/components/RecipeCard/RecipeCard";
export default function searchPage() {
	//const [recipeData, setRecipeData] = useState();
	//to create fetch request to get return value for the empty buttons

	async function getMealTypeRecipe(mealType) {}

	return (
		<>
			<h1>Search</h1>
			<nav className={css.grid}>
				<MtButton mealTypes="breakfast" />
				<MtButton mealTypes="lunch" />
				<MtButton mealTypes="dinner" />
				<MtButton mealTypes="snacks" />
			</nav>
			<RecipeCard />
		</>
	);
}
