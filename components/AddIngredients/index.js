import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Icon } from "@mui/material";

function AddIngredients(props) {
	const { ingredients, setIngredients } = props;

	function handleFormChange(event, index) {
		let data = [...ingredients];
		data[index][event.target.name] = event.target.value;
		setIngredients(data);
	}

	function addIngredients() {
		let addIngredient = { quantity: "", measure: "", food: "" };
		setIngredients([...ingredients, addIngredient]);
	}

	function removeIngredients(index) {
		let data = [...ingredients];
		data.splice(index, 1);
		setIngredients(data);
	}

	return (
		<div>
			<p>INGREDIENTS:</p>
			{ingredients.map((ingredient, index) => {
				return (
					<div key={index}>
						<input
							name="quantity"
							type="number"
							min="0"
							placeholder="quantity"
							onChange={(event) => handleFormChange(event, index)}
							value={ingredient.quantity}
						/>
						<input
							name="measure"
							type="text"
							placeholder="measure"
							onChange={(event) => handleFormChange(event, index)}
							value={ingredient.measure}
						/>
						<input
							name="food"
							type="text"
							placeholder="food"
							onChange={(event) => handleFormChange(event, index)}
							value={ingredient.food}
						/>
						<ClearIcon onClick={() => removeIngredients(index)}>
							Remove
						</ClearIcon>
					</div>
				);
			})}
			<AddCircleOutlineIcon onClick={addIngredients} />
		</div>
	);
}

export default AddIngredients;
