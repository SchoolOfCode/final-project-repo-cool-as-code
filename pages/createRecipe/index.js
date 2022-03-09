import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import FadeIn from "react-fade-in/lib/FadeIn";
import React, { useState } from "react";
import Header from "../../components/Header";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";

//components
import RecipeForm from "../../components/RecipeForm";

//styling
import styles from "./styles.module.css";

const API_URL = process.env.API_URL;

const CreateRecipe = () => {
	let [recipe, setRecipe] = useState({
		dataTitle: "",
		dataPortions: 1,
		dataStory: "",
		dataTags: [""],
		dataType: "",
		dataIngredients: [{ quantity: "", measure: "", food: "" }],
		dataInstructions: [{ instruction: "", image: "" }],
		dataImage: "",
	});

	const router = useRouter();
	async function addNewRecipe(recipe) {
		const response = await fetch(`${API_URL}/recipes`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(recipe),
		});
		const data = await response.json();
		console.log(data, "recipe added");
		setRecipe(data);
		router.push("/home");
	}

	return (
		<div>
			<Header />
			<FadeIn transitionDuration={500} delay={200}>
				<h1 className={styles.title}>Add Recipe</h1>
			</FadeIn>
			<RecipeForm addNewRecipe={addNewRecipe} recipe={recipe} />
		</div>
	);
};

export default CreateRecipe;
export const getServerSideProps = withPageAuthRequired();
