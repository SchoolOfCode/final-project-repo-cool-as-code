import React, { useEffect, useState } from "react";

import Button from "../Button";
import AddTags from "../AddTags";

import {
	FormControl,
	FormLabel,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Textarea,
	Text,
	Select,
} from "@chakra-ui/react";

//styling
import styles from "./styles.module.css";
import RecipeFormTabs from "../RecipeFormTabs";
import AddRecipePhoto from "../AddRecipePhoto";

function RecipeForm(props) {
	const { addNewRecipe } = props;

	const [title, setTitle] = useState("");
	const [portions, setPortions] = useState(0);
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

	function handleChangePortions(portions) {
		// console.log(portions);
		setPortions(portions);
	}

	function handleChangeStory(event) {
		setStory(event.target.value);
	}

	function handleChangeType(event) {
		// console.log(event.target.value);
		setType(event.target.value);
	}

	function handleChangeImage(event) {
		console.log("main recipe image button clicked");
		// setImage(event.target.value);
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
		// addNewRecipe(recipe);
		setTitle("");
		setPortions(0);
		setStory("");
		setTags([]);
		setType("Breakfast");
		setIngredients([{ quantity: "", measure: "", food: "" }]);
		setInstructions([{ instruction: "", image: "" }]);
		setImage("");
	}

	return (
		<div className={styles.createRecipe}>
			<div className={styles.recipeForm}>
				<FormControl className={styles.infoContainer}>
					<div className={styles.flexIcon}>
						<FormLabel htmlFor="title">Recipe:</FormLabel>
						<AddRecipePhoto
							className={styles.cameraIcon}
							onChange={handleChangeImage}
						/>
					</div>
					<Input
						focusBorderColor="#fb8500"
						id="title"
						type="text"
						placeholder="Enter the recipe title"
						variant="flushed"
						onChange={handleChangeTitle}
						value={title}
					/>
					<br />
					<br />
					<FormLabel htmlFor="story">Story:</FormLabel>
					<Textarea
						focusBorderColor="#fb8500"
						value={story}
						onChange={handleChangeStory}
						placeholder="What is the story behind this recipe?"
						size="sm"
					/>
					<br />
					<br />
					<div className={styles.inputsOne}>
						<FormLabel htmlFor="portions">Number of Servings:</FormLabel>
						<NumberInput
							focusBorderColor="#fb8500"
							size="sm"
							maxW={20}
							defaultValue={0}
							min={0}
							onChange={(value) =>
								handleChangePortions(value ? Number.parseInt(value) : 0)
							}
							value={portions}
						>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
						<br />
						<FormLabel htmlFor="type">Meal Type:</FormLabel>
						<Select
							focusBorderColor="#fb8500"
							placeholder="Select"
							onChange={handleChangeType}
						>
							{mealTypeOptions.map((mealTypeOption) => (
								<option key={mealTypeOption.key} value={mealTypeOption.value}>
									{mealTypeOption.label}
								</option>
							))}
						</Select>
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
					</div>
				</FormControl>
			</div>
			<br />
			<div className={styles.tabContainer}>
				<RecipeFormTabs
					ingredients={ingredients}
					setIngredients={setIngredients}
					instructions={instructions}
					setInstructions={setInstructions}
				/>
				<Button type="submit" onClick={handleSubmit} className={styles.button}>
					SAVE
				</Button>
			</div>
		</div>
	);
}

export default RecipeForm;
