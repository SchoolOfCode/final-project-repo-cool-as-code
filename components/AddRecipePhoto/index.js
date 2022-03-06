import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import { Button } from "@chakra-ui/react";
//styling
import styles from "./styles.module.css";

function AddRecipePhoto(props) {
	const { onClick } = props;

	return (
		<Button colorScheme="blue" onClick={onClick}>
			Add Photo
			<PhotoCameraIcon className={styles.cameraIcon} />
		</Button>
	);
}

export default AddRecipePhoto;
