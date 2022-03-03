import {
	FormControl,
	Text,
	FormLabel,
	Textarea,
	Input,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";

//styling
import styles from "./styles.module.css";
import RecipeFormAddButton from "../RecipeFormAddButton";
import RecipeFormRemoveButton from "../RecipeFormRemoveButton";

function AddInstructions(props) {
	const { instructions, setInstructions } = props;

	function handleInstructionChange(event, index) {
		let data = [...instructions];
		data[index].instruction = event.target.value;
		setInstructions(data);
	}

	function handleImageChange(event, index) {
		let data = [...instructions];
		data[index].image = event.target.value;
		setInstructions(data);
	}

	function addInstructions() {
		event.preventDefault();
		let addInstruction = { instruction: "", image: "" };
		setInstructions([...instructions, addInstruction]);
	}

	function removeInstructions(index) {
		event.preventDefault();
		let data = [...instructions];
		data.splice(index, 1);
		setInstructions(data);
	}

	return (
		<div className={styles.container}>
			<div className={styles.recipeForm}>
				<FormControl>
					{instructions.map((method, index) => {
						return (
							<div key={index}>
								<Text mb="8px">STEP {index + 1}</Text>
								<Textarea
									index={index}
									focusBorderColor="#fb8500"
									type="text"
									placeholder={`Instructions for step ${
										index + 1
									} of the recipe`}
									// variant="flushed"
									onChange={(value) => handleInstructionChange(value, index)}
									value={method.instruction}
								/>
								<br />
								<br />
								<Input
									index={index}
									focusBorderColor="#fb8500"
									type="text"
									placeholder="food"
									// variant="flushed"
									onChange={(event) => handleImageChange(event, index)}
									value={method.image}
								/>
								{/* <input
									name="image"
									type="text"
									placeholder="image"
									onChange={(event) => handleFormChange(event, index)}
									value={method.image}
								/> */}
								<RecipeFormRemoveButton
									onClick={() => removeInstructions(index)}
								>
									Remove
								</RecipeFormRemoveButton>
							</div>
						);
					})}

					<RecipeFormAddButton onClick={addInstructions}>
						Add Instruction
					</RecipeFormAddButton>
				</FormControl>
			</div>
		</div>
	);
}

export default AddInstructions;
