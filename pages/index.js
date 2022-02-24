import Image from "next/image";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";

import { Button } from "@nextui-org/react";
import LoginButton from "../components/LoginButton/LoginButton";
import { SubtitlesOutlined } from "@material-ui/icons";

const BgImage = dynamic(
	() => import("../components/BackgroundImage/BackgroundImage.js"),
	{
		ssr: false,
	}
);

export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<Image
					src="/image/foodstory_rev2.png"
					alt="Foodstory Logo"
					width="500%"
					height="500%"
				/>
				<LoginButton
					className={styles.landingButton}
					color="gradient"
					size="xl"
					clickable="true"
				>
					ENTER
				</LoginButton>
			</div>
			<BgImage />
		</>
	);
}
