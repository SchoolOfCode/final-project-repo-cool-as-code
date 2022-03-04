import React, { useState } from "react";
import styles from "./styles.module.css";

let dishTypeTags = [
	"Alcohol-Cocktail",
	"Biscuits and Cookies",
	"Bread",
	"Drinks",
	"Desserts",
	"Main course",
	"Pancake",
	"Salad",
	"Sandwiches",
	"Soup",
	"Starter",
];
let cuisineTypeTags = [
	"American",
	"Asian",
	"British",
	"Caribbean",
	"Central Europe",
	"Chinese",
	"Eastern Europe",
	"French",
	"Indian",
	"Italian",
	"Japanese",
	"Kosher",
	"Mediterranean",
	"Mexican",
	"Middle Eastern",
	"Nordic",
	"South American",
	"South East Asian",
];

function AddTags(props) {
	const {
		tags,
		setTags,
		dishType,
		setDishType,
		cuisineType,
		setCuisineType,
		health,
		setHealth,
	} = props;

	const [healthTags, setHealthTags] = useState([
		{ id: "1", tag: "Alcohol-Cocktail", isSelected: false },
		{ id: "2", tag: "Alcohol-Free", isSelected: false },
		{ id: "3", tag: "Dairy-Free", isSelected: false },
		{ id: "4", tag: "Gluten-Free", isSelected: false },
		{ id: "5", tag: "Kosher", isSelected: false },
		{ id: "6", tag: "Peanut-Free", isSelected: false },
		{ id: "7", tag: "Pescatarian", isSelected: false },
		{ id: "8", tag: "Vegan", isSelected: false },
		{ id: "9", tag: "Vegetarian", isSelected: false },
	]);

	function toggleSelect(id) {
		const updatedTags = [...healthTags].map((obj) => {
			if (obj.id === id) {
				obj.isSelected = !obj.isSelected;
			}
			return obj;
		});
		setHealthTags(updatedTags);
		filterSelectedHealthTags();
	}

	function filterSelectedHealthTags() {
		const selectedTags = [...healthTags].filter(
			(tag) => tag.isSelected === true
		);
		const selectedTagsArr = selectedTags.map((healthTag) => healthTag.tag);
		setHealth(selectedTagsArr);
	}

	function handleChangeDishType(event) {
		setDishType(event.target.value);
	}

	function handleChangeCuisineType(event) {
		setCuisineType(event.target.value);
	}

	return (
		<div>
			<select onChange={handleChangeDishType}>
				{dishTypeTags.map((dishTypeTag, index) => (
					<option key={index} value={dishTypeTag}>
						{dishTypeTag}
					</option>
				))}
			</select>

			<select onChange={handleChangeCuisineType}>
				{cuisineTypeTags.map((cuisineTypeTag, index) => (
					<option key={index} value={cuisineTypeTag}>
						{cuisineTypeTag}
					</option>
				))}
			</select>
			{healthTags.map((healthTag) => (
				<div key={healthTag.id}>
					<input
						id={healthTag.id}
						type="checkbox"
						value={healthTag.tag}
						className={styles.checkbox}
						onChange={() => toggleSelect(healthTag.id)}
					/>
					<label
						className={
							healthTag.isSelected ? styles.selected : styles.notSelected
						}
						htmlFor={healthTag.id}
					>
						{healthTag.tag}
					</label>
				</div>
			))}
		</div>
	);
}

export default AddTags;
