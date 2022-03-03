import {
	FormControl,
	FormLabel,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";

import RecipeFormAddButton from "../RecipeFormAddButton";
import RecipeFormRemoveButton from "../RecipeFormRemoveButton";

//styling
import styles from "./styles.module.css";

function AddIngredients(props) {
	const { ingredients, setIngredients } = props;

	function handlePortionsChange(index, value) {
		let data = [...ingredients];
		data[index].quantity = value;
		setIngredients(data);
	}

	function handleMeasureChange(index, event) {
		console.log(event.target.value);
		let data = [...ingredients];
		data[index].measure = event.target.value;
		setIngredients(data);
	}

	function handleFoodChange(index, event) {
		console.log(event.target.value);
		let data = [...ingredients];
		data[index].food = event.target.value;
		setIngredients(data);
	}

	function addIngredients() {
		event.preventDefault();
		let addIngredient = { quantity: "", measure: "", food: "" };
		setIngredients([...ingredients, addIngredient]);
	}

	function removeIngredients(index) {
		event.preventDefault();
		let data = [...ingredients];
		data.splice(index, 1);
		setIngredients(data);
	}

	return (
		<div className={styles.container}>
			<div className={styles.recipeForm}>
				<FormControl>
					{ingredients.map((ingredient, index) => {
						return (
							<div key={index}>
								<FormLabel htmlFor="quantity">Quantity:</FormLabel>
								<NumberInput
									index={index}
									focusBorderColor="#fb8500"
									size="sm"
									maxW={20}
									defaultValue={0}
									min={0}
									onChange={(value) =>
										handlePortionsChange(
											index,
											value ? Number.parseInt(value) : 0
										)
									}
									value={ingredient.quantity}
								>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								<br />
								<Input
									index={index}
									focusBorderColor="#fb8500"
									type="text"
									placeholder="measure"
									// variant="flushed"
									onChange={(event) => handleMeasureChange(index, event)}
									value={ingredient.measure}
								/>
								<br />
								<br />
								<Input
									index={index}
									focusBorderColor="#fb8500"
									type="text"
									placeholder="food"
									// variant="flushed"
									onChange={(event) => handleFoodChange(index, event)}
									value={ingredient.food}
								/>
								<RecipeFormRemoveButton
									onClick={() => removeIngredients(index)}
								>
									Remove
								</RecipeFormRemoveButton>
							</div>
						);
					})}
					{/* <AddCircleOutlineIcon onClick={addIngredients} /> */}
					<RecipeFormAddButton onClick={addIngredients}>
						Add Ingredient
					</RecipeFormAddButton>
				</FormControl>
			</div>
		</div>
	);
}

export default AddIngredients;
