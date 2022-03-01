import React, { useState } from "react";

//styling
import ButtonStyles from "./Button.module.css";

//API
// import API from "../../components/APIconfig/API";

const API_URL = "https://recipe-soc-project.herokuapp.com/recipes";

function Button(props) {
	const { addNewRecipe } = props;

	const [title, setTitle] = useState("");
	const [portions, setPortions] = useState("");
	const [story, setStory] = useState("");
	const [tags, setTags] = useState([]);
	const [type, setType] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);
	const [image, setImage] = useState("");

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
		setType(event.target.value);
	}

	function handleChangeIngredients(event) {
		setIngredients(event.target.value);
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
			ingredients,
			instructions,
			image,
		};
		console.log(recipe);
		addNewRecipe(recipe);
		resetState();
	}

	function resetState() {
		setTitle("");
		setPortions("");
		setStory("");
		setTags([]);
		setType("");
		setIngredients([]);
		setInstructions([]);
		setImage("");
	}

	return (
		<form action="">
			<input
				type="text"
				placeholder="Recipe Name"
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
			<input type="text" placeholder="Enter Tags" onChange={handleChangeTags} />
			<br />
			<input type="text" placeholder="Enter Type" onChange={handleChangeType} />
			<br />
			<input
				type="text"
				placeholder="Enter Ingredients"
				onChange={handleChangeIngredients}
			/>
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
			<button
				type="submit"
				onClick={handleSubmit}
				className={ButtonStyles.button}
			>
				SAVE
			</button>
		</form>
	);
}

export default Button;
