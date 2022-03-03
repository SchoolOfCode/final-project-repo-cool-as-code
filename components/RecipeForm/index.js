import React, { useEffect, useState } from "react";
import AddIngredients from "../AddIngredients";
import AddInstructions from "../AddInstructions";
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
		<form className={styles.container} action="">
			<div className={styles.recipeForm}>
				<FormControl>
					<FormLabel htmlFor="title">Recipe</FormLabel>
					<Input
						focusBorderColor="#fb8500"
						id="title"
						type="text"
						placeholder="Enter the recipe title"
						variant="flushed"
						onChange={handleChangeTitle}
						value={title}
					/>
					<Text mb="8px">Story</Text>
					<Textarea
						focusBorderColor="#fb8500"
						value={story}
						onChange={handleChangeStory}
						placeholder="What is the story behind this recipe?"
						size="sm"
					/>
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
							focusBorderColor="brand.primary"
							placeholder="Select"
							onChange={handleChangeType}
						>
							{mealTypeOptions.map((mealTypeOption) => (
								<option key={mealTypeOption.key} value={mealTypeOption.value}>
									{mealTypeOption.label}
								</option>
							))}
						</Select>
					</div>
				</FormControl>
			</div>
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
			<input
				type="text"
				placeholder="Recipe Image"
				onChange={handleChangeImage}
				value={image}
			/>
			<Button type="submit" onClick={handleSubmit} className={styles.button}>
				SAVE
			</Button>
		</form>
	);
}

export default RecipeForm;
