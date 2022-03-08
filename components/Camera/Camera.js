import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function Camera(props) {
	const { photo, previewSource, setPreviewSource, image } = props;
	const [fileInput, setFileInputState] = useState("");

	function handleFileInputChange(e) {
		const file = e.target.files[0];
		previewFile(file);
	}

	function previewFile(file) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	}
	/*function moved to recipe form to help manage state
	function handleSubmitFile(e) {
		console.log("submitted");
		e.preventDefault();
		if (!previewSource) return;
		uploadImage(previewSource);
		console.log(response);
	}

	async function uploadImage(base64EncodedImage) {
		// console.log(base64EncodedImage)
		try {
			const response = await fetch("/api/upload", {
				method: "POST",
				body: JSON.stringify({ data: base64EncodedImage }),
				headers: { "Content-type": "application/json" },
			});
			console.log(await response.json());
			return setResponse(response);
		} catch (error) {
			console.log(error);
		}
	}
 */
	return (
		<>
			<form className="form">
				<label
					htmlFor={photo}
					className={
						previewSource || image ? styles.photoAdded : styles.addPhoto
					}
				>
					{previewSource || image ? "Change Photo" : "Add Photo"}
					<PhotoCameraIcon className={styles.cameraIcon} />
				</label>
				<input
					value={fileInput}
					type="file"
					id={photo}
					capture="enviroment"
					accept="image/*"
					onChange={handleFileInputChange}
					className={styles.formInput}
				></input>
				{/* <button className="btn" type="submit">
					Submit
				</button> */}
			</form>
			{/* {previewSource && (
				<Image src={previewSource} alt="food" width={300} height={300} />
			)} */}
		</>
	);
}

export default Camera;
