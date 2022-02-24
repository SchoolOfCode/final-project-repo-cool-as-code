import Image from "next/image";
import styles from "./styles.module.css";

import { Button } from "@nextui-org/react";
import LoginButton from "../components/LoginButton/LoginButton";

export default function Home() {
	return (
		<>
			<Image
				className={styles.landingImage}
				src="/home.jpg"
				alt="Photo of Food"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
			{/* <Image
				className={styles.landingImage}
				src="/foodstory.jpg"
				alt="Photo of Food"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/> */}
			<LoginButton
				className={styles.landingButton}
				color="gradient"
				size="xl"
				clickable="true"
			>
				ENTER
			</LoginButton>
		</>
	);
}
