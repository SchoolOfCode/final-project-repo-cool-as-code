import { useState } from "react";

function AddIngredients() {
	const [ingredients, setIngredients] = useState([
		{ quantity: "", measure: "", food: "" },
	]);

	function handleFormChange(event, index) {
		let data = [...ingredients];
		data[index][event.target.name] = event.target.value;
		setIngredients(data);
	}

	function addIngredients() {
		let addIngredient = { quantity: "", measure: "", food: "" };
		console.log(ingredients);
		setIngredients([...ingredients, addIngredient]);
	}

	function removeIngredients(index) {
		let data = [...ingredients];
		console.log(data);
		data.splice(index, 1);
		setIngredients(data);
	}

	return (
		<div>
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
						<button onClick={() => removeIngredients(index)}>Remove</button>
					</div>
				);
			})}
			<button onClick={addIngredients}>ADD</button>
		</div>
	);
}

export default AddIngredients;
