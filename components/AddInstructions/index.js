import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Icon } from "@mui/material";

function AddInstructions(props) {
	const { instructions, setInstructions } = props;

	function handleFormChange(event, index) {
		let data = [...instructions];
		data[index][event.target.name] = event.target.value;
		setInstructions(data);
	}

	function addInstructions() {
		let addInstruction = { instruction: "", image: "" };
		setInstructions([...instructions, addInstruction]);
	}

	function removeInstructions(index) {
		let data = [...instructions];
		data.splice(index, 1);
		setInstructions(data);
	}

	return (
		<div>
			<p>METHOD:</p>
			{instructions.map((method, index) => {
				return (
					<div key={index}>
						<p>STEP {index + 1}:</p>
						<input
							name="instruction"
							type="text"
							min="0"
							placeholder="instruction"
							onChange={(event) => handleFormChange(event, index)}
							value={method.instruction}
						/>
						<input
							name="image"
							type="text"
							placeholder="image"
							onChange={(event) => handleFormChange(event, index)}
							value={method.image}
						/>
						<ClearIcon onClick={() => removeInstructions(index)}>
							Remove
						</ClearIcon>
					</div>
				);
			})}
			<AddCircleOutlineIcon onClick={addInstructions} />
		</div>
	);
}

export default AddInstructions;
