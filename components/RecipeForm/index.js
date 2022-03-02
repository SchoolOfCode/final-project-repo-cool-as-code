import React, { useEffect, useState } from "react";
import AddIngredients from "../AddIngredients";
import AddInstructions from "../AddInstructions";
import Button from "../Button";
import AddTags from "../AddTags";

//styling
import styles from "./styles.module.css";

function RecipeForm(props) {
	const { addNewRecipe } = props;

	const [title, setTitle] = useState("");
	const [portions, setPortions] = useState("");
	const [story, setStory] = useState("");
	const [tags, setTags] = useState(["Alcohol-Cocktail", "American"]);
	const [type, setType] = useState("Breakfast");
	const [ingredients, setIngredients] = useState([
		{ quantity: "", measure: "", food: "" },
	]);
	const [instructions, setInstructions] = useState([
		{ instruction: "", image: "" },
	]);
	const [image, setImage] = useState("");

	const mealTypeOptions = [
		{ key: 1, label: "Breakfast", value: "Breakfast" },
		{ key: 2, label: "Lunch", value: "Lunch" },
		{ key: 3, label: "Dinner", value: "Dinner" },
		{ key: 4, label: "Snack", value: "Snack" },
	];

	// TAG
	const [dishType, setDishType] = useState("Alcohol-Cocktail");

	const [cuisineType, setCuisineType] = useState("American");

	const [health, setHealth] = useState([]);

	function handleChangeTitle(event) {
		setTitle(event.target.value);
	}

	function handleChangePortions(event) {
		setPortions(event.target.value);
	}

	function handleChangeStory(event) {
		setStory(event.target.value);
	}

	function handleChangeType(event) {
		// console.log(event.target.value);
		setType(event.target.value);
	}

	function handleChangeImage(event) {
		setImage(event.target.value);
	}

	useEffect(() => {
		// console.log(dishType, cuisineType, health);
		setTags([dishType, cuisineType, ...health]);
	}, [dishType, cuisineType, health]);

	function handleSubmit(event) {
		event.preventDefault();
		// console.log(tags);
		const recipe = {
			title,
			portions,
			story,
			tags,
			type,
			image,
			ingredients,
			instructions,
		};
		console.log(recipe);
		addNewRecipe(recipe);
		setTitle("");
		setPortions("");
		setStory("");
		setTags([]);
		setType("Breakfast");
		setIngredients([{ quantity: "", measure: "", food: "" }]);
		setInstructions([{ instruction: "", image: "" }]);
		setImage("");
	}

	return (
		<form action="">
			<input
				type="text"
				placeholder="Recipe Name"
				maxLength="100"
				onChange={handleChangeTitle}
				value={title}
			/>
			<br />
			<input
				type="text"
				placeholder="Recipe Image"
				onChange={handleChangeImage}
				value={image}
			/>
			<br />
			<input
				type="number"
				min="0"
				placeholder="Number of Portions"
				onChange={handleChangePortions}
				value={portions}
			/>
			<br />
			<input
				type="text"
				placeholder="Story Behind the Recipe"
				onChange={handleChangeStory}
				value={story}
			/>
			<br />
			<select placeholder="select" onChange={handleChangeType}>
				{mealTypeOptions.map((mealTypeOption) => (
					<option key={mealTypeOption.key} value={mealTypeOption.value}>
						{mealTypeOption.label}
					</option>
				))}
			</select>
			<br />
			<AddIngredients
				ingredients={ingredients}
				setIngredients={setIngredients}
			/>
			<AddInstructions
				instructions={instructions}
				setInstructions={setInstructions}
			/>
			<p>Tags</p>
			<AddTags
				tags={tags}
				setTags={setTags}
				dishType={dishType}
				setDishType={setDishType}
				cuisineType={cuisineType}
				setCuisineType={setCuisineType}
				health={health}
				setHealth={setHealth}
			/>
			<Button type="submit" onClick={handleSubmit} className={styles.button}>
				SAVE
			</Button>
		</form>
	);
}

export default RecipeForm;
