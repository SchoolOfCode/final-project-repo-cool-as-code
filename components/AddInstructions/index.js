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

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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
		// let data = [...instructions];
		// data[index].image = event.target.value;
		// setInstructions(data);
		console.log(index, "camera icon clicked");
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
							<div key={index} className={styles.instructionItem}>
								<div className={styles.rowOne}>
									<div className={styles.step}>
										<Text mb="8px">STEP {index + 1}</Text>
										<PhotoCameraIcon
											className={styles.cameraIcon}
											onClick={(event) => handleImageChange(event, index)}
										/>
									</div>
									<RecipeFormRemoveButton
										onClick={() => removeInstructions(index)}
									>
										Remove
									</RecipeFormRemoveButton>
								</div>
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
							</div>
						);
					})}
					<RecipeFormAddButton
						className={styles.addButton}
						onClick={addInstructions}
					>
						Add Instruction
					</RecipeFormAddButton>
				</FormControl>
			</div>
		</div>
	);
}

export default AddInstructions;
