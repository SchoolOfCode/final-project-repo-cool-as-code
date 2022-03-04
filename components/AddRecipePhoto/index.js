import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

//styling
import styles from "./styles.module.css";

function AddRecipePhoto(props) {
	const { onClick } = props;

	return <PhotoCameraIcon className={styles.cameraIcon} onClick={onClick} />;
}

export default AddRecipePhoto;
