import { useContext, React } from "react";
import Router from "next/router";

import { Button } from "@chakra-ui/react";
//import { Button } from "antd"
import styles from "./Button.module.css";
//API
import API from "../APIconfig/API";

//Page wrapper for useContext
import { pageWrapper } from "../../pages/_app";

export default function MtButton(props) {
	const { mealTypes, children } = props;
	let { state, setState } = useContext(pageWrapper);

	const fetchRecipesByType = async (mealTypes) => {
		const response = await API.fetchRecipesByType(mealTypes);
		setState({
			...state,
			apiData: response.payload,
			apiMessage: response.message,
		});
		console.log(state);
	};

	function getMeal() {
		fetchRecipesByType(mealTypes);
		Router.push("/search");
	}

	return (
		<button onClick={getMeal} type="submit" className={styles.button}>
			{children}
		</button>
	);
}
