import React, { useEffect, useState } from "react";

import AddTags from "../AddTags";
import Camera from "../../components/Camera/Camera";

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
	Button,
} from "@chakra-ui/react";

//styling
import styles from "./styles.module.css";
import RecipeFormTabs from "../RecipeFormTabs";

function RecipeForm(props) {
	const { addNewRecipe } = props;

	const [title, setTitle] = useState("");
	const [portions, setPortions] = useState(0);
	const [story, setStory] = useState("");
	const [tags, setTags] = useState(["", ""]);
	const [type, setType] = useState("");
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
		{ key: 4, label: "Snack", value: "Snacks" },
		{ key: 5, label: "Dessert", value: "Dessert" },
		{ key: 6, label: "Drinks", value: "Drinks" },
	];

	// TAG
	const [dishType, setDishType] = useState("");

	const [cuisineType, setCuisineType] = useState("");

	const [health, setHealth] = useState([]);

	function handleChangeTitle(event) {
		setTitle(event.target.value);
	}

	function handleChangePortions(portions) {
		setPortions(portions);
	}

	function handleChangeStory(event) {
		setStory(event.target.value);
	}

	function handleChangeType(event) {
		setType(event.target.value);
	}

	useEffect(() => {
		setTags([dishType, cuisineType, ...health]);
	}, [dishType, cuisineType, health]);

	// [START] FUNCTIONS FOR IMAGE UPLOAD
	const [previewSource, setPreviewSource] = useState();
	const [previewSourceArr, setPreviewSourceArr] = useState([]);

	function handleSubmitFile() {
		console.log("main photo submitted");
		if (!previewSource) {
			handlePostFetch();
		} else {
			uploadImage(previewSource);
		}
	}

	async function uploadImage(base64EncodedImage) {
		try {
			const response = await fetch("/api/upload", {
				method: "POST",
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { "Content-type": "application/json" },
			});
			const data = await response.json();
			setImage(data.url);
		} catch (error) {
			console.log(error);
		}
	}

	// [END] FUNCTIONS FOR IMAGE UPLOAD

	function handleSubmitForm(event) {
		event.preventDefault();
		handleSubmitFile();
	}
	useEffect(() => {
		console.log("useEffect triggered", image);
		handlePostFetch();
	}, [image]);

	function handlePostFetch() {
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
	}

	// [END] FUNCTIONS FOR IMAGE UPLOAD

	return (
		<div className={styles.createRecipe}>
			<div className={styles.recipeForm}>
				<FormControl className={styles.infoContainer}>
					<div className={styles.flexIcon}>
						<FormLabel htmlFor="title">Recipe:</FormLabel>
						<Camera
							image={image}
							setImage={setImage}
							previewSource={previewSource}
							setPreviewSource={setPreviewSource}
							photo="main-image"
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
						isRequired
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
					previewSourceArr={previewSourceArr}
					setPreviewSourceArr={setPreviewSourceArr}
				/>
				<div className={styles.buttonDiv}>
					<Button
						border="1px"
						bg="orange.main"
						borderRadius="8px"
						borderColor="orange.main"
						color="blue.main"
						size="lg"
						_hover={{ bg: "orange.one" }}
						_active={{
							bg: "orange.one",
							transform: "scale(0.98)",
							borderColor: "orange.one",
						}}
						_focus={{
							boxShadow: "0 0 1px 2px orange.one, 0 1px 1px orange.main",
						}}
						onClick={handleSubmitForm}
					>
						SAVE
					</Button>
				</div>
			</div>
		</div>
	);
}

export default RecipeForm;
