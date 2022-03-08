import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import FadeIn from "react-fade-in/lib/FadeIn";
import React, { useState } from "react";
import Header from "../../components/Header";
import { useContext } from "react";
import { pageWrapper } from "../../pages/_app";

//components
import RecipeEditForm from "../../components/RecipeEditForm";

//styling
import styles from "./styles.module.css";

const API_URL = process.env.API_URL;

const EditRecipe = () => {
	let { state, setState } = useContext(pageWrapper);

	let data = state.apiData.filter(
		(item) => item.id === state.selectingRecipe.recipeId
	)[0];

	let { title, portions, story, tags, type, ingredients, instructions, image } =
		data;

	let ingredientsArr = ingredients.map((ingredient) => JSON.parse(ingredient));

	let instructionsArr = instructions.map((instruction) =>
		JSON.parse(instruction)
	);

	let [recipe, setRecipe] = useState({
		dataTitle: title,
		dataPortions: portions,
		dataStory: story,
		dataTags: tags,
		dataType: type,
		dataIngredients: ingredientsArr,
		dataInstructions: instructionsArr,
		dataImage: image,
	});

	async function editRecipeInfo(recipe, id) {
		const response = await fetch(`${API_URL}/recipes/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(recipe),
		});
		const data = await response.json();
		console.log(data, "recipe updated");
		setRecipe(data);
	}

	return (
		<div>
			<Header />
			<FadeIn transitionDuration={500} delay={200}>
				<h1 className={styles.title}>Edit Recipe</h1>
			</FadeIn>
			<RecipeEditForm
				id={data.id}
				editRecipeInfo={editRecipeInfo}
				recipe={recipe}
			/>
		</div>
	);
};

export default EditRecipe;
export const getServerSideProps = withPageAuthRequired();
