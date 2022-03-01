import React, { useState } from "react";
import AddIngredients from "../AddIngredients";
import Button from "../Button";

//styling
import styles from "./styles.module.css";

function RecipeForm(props) {
	const { addNewRecipe } = props;

	const [title, setTitle] = useState("");
	const [portions, setPortions] = useState("");
	const [story, setStory] = useState("");
	const [tags, setTags] = useState([]);
	const [type, setType] = useState("");

	const [instructions, setInstructions] = useState([]);
	const [image, setImage] = useState("");

	const mealTypeOptions = [
		{ key: 1, label: "Breakfast", value: "Breakfast" },
		{ key: 2, label: "Lunch", value: "Lunch" },
		{ key: 3, label: "Dinner", value: "Dinner" },
		{ key: 4, label: "Snack", value: "Snack" },
	];

	function handleChangeTitle(event) {
		setTitle(event.target.value);
	}

	function handleChangePortions(event) {
		setPortions(event.target.value);
	}

	function handleChangeStory(event) {
		setStory(event.target.value);
	}

	function handleChangeTags(event) {
		setTags(event.target.value);
	}

	function handleChangeType(event) {
		console.log(event.target.value);
		setType(event.target.value);
	}

	function handleChangeInstructions(event) {
		setInstructions(event.target.value);
	}

	function handleChangeImage(event) {
		setImage(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const recipe = {
			title,
			portions,
			story,
			tags,
			type,
			instructions,
			image,
		};
		console.log(recipe);
		// addNewRecipe(recipe);
		resetState();
	}

	function resetState() {
		setTitle("");
		setPortions("");
		setStory("");
		setTags([]);
		setType("");
		setInstructions([]);
		setImage("");
	}

	return (
		<form action="">
			<input
				type="text"
				placeholder="Recipe Name"
				maxLength="100"
				onChange={handleChangeTitle}
			/>
			<br />
			<input
				type="number"
				min="0"
				placeholder="Number of Portions"
				onChange={handleChangePortions}
			/>
			<br />
			<input
				type="text"
				placeholder="Story Behind the Recipe"
				onChange={handleChangeStory}
			/>
			<br />
			<input
				type="text"
				placeholder="Enter the tags"
				onChange={handleChangeTags}
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
			<input
				type="text"
				placeholder="Enter Instructions"
				onChange={handleChangeInstructions}
			/>
			<br />
			<input
				type="text"
				placeholder="Enter Image"
				onChange={handleChangeImage}
			/>
			<Button type="submit" onClick={handleSubmit} className={styles.button}>
				SAVE
			</Button>
		</form>
	);
}

export default RecipeForm;
