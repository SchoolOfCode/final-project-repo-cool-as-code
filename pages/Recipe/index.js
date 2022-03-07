import React, { useEffect } from "react";
import { useContext, useState } from "react";
// import Image from "next/image";
import { pageWrapper } from "../_app";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import styles from "./styles.module.css";

//components
import RecipeDisplay from "../../components/RecipeDisplay";
import Template from "../template";
import RenderIngredients from "../../components/RenderIngredients";
import RenderInstructions from "../../components/RenderInstructions";
import RenderTags from "../../components/RenderTags";
import RenderStory from "../../components/RenderStory";

import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	Stack,
	Image,
} from "@chakra-ui/react";

//conditional statments to render the data
//To render :
//no.of servings
//meal types, tags
//render ingredients
//JSON parse the array to create an array of object
// map over each object within the array - concatenate the  quantity, measure and food into a string
// render each object on a line
//render instructions
//JSON parse the array to create an array of object
// map over each object within the array - add the step title (index value +1)
// render each instruction on a line
// render image too

const recipe = () => {
	let { state, setState } = useContext(pageWrapper);

	let recipe = state.apiData.filter(
		(item) => item.id === state.selectingRecipe.recipeId
	);

	useEffect(() => {
		if (recipe.length === 0) {
			returnHome();
		}
	}, []);

	function returnHome() {
		router.push("/home");
	}

	const router = useRouter();
	function setId() {
		setState({ ...state, selectingRecipe: { recipeId } });
		router.push("/recipe");
	}

	return (
		<div>
			{recipe.map((item, index) => (
				<div>
					<Header />
					<h1 className={styles.title}>{item.title}</h1>
					<div className={styles.createRecipe}>
						<div className={styles.recipeForm}>
							<div>
								<Stack spacing={3}>
									{item.image ? (
										<Image
											boxSize="100%"
											objectFit="cover"
											src={item.image}
											alt={item.title}
										/>
									) : (
										<></>
									)}
									<Text fontSize="2xl" className={styles.recipeName}>
										{item.title}
									</Text>
									<div className={styles.portionType}>
										<Text fontSize="md" className={styles.portion}>
											{item.portions === 1
												? "1 Serving"
												: `${item.portions} Servings`}
										</Text>
										<Text className={styles.type}>{item.type}</Text>
									</div>
									{item.tags.length !== 0 ? (
										<RenderTags tags={item.tags} />
									) : null}
								</Stack>
							</div>
						</div>
						<br />
						<div className={styles.tabContainer}>
							<Tabs className={styles.tabs} isFitted variant="enclosed">
								<TabList mb="1em">
									<Tab
										border="1px"
										bg="#ffe6c8"
										borderColor="#fbd3a2"
										_selected={{ color: "#023047", bg: "#fb8500" }}
										_active={{
											bg: "rgb(255, 226, 146)",
											transform: "scale(0.98)",
											borderColor: "#fb8500",
										}}
										_focus={{
											boxShadow:
												"0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
										}}
									>
										Ingredients
									</Tab>
									<Tab
										bg="#ffe6c8"
										borderColor="#fbd3a2"
										_selected={{ color: "#023047", bg: "#fb8500" }}
										_active={{
											bg: "rgb(255, 226, 146)",
											transform: "scale(0.98)",
											borderColor: "#fb8500",
										}}
										_focus={{
											boxShadow:
												"0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
										}}
									>
										Method
									</Tab>
									<Tab
										border="1px"
										bg="#ffe6c8"
										borderColor="#fbd3a2"
										_selected={{ color: "#023047", bg: "#fb8500" }}
										_active={{
											bg: "rgb(255, 226, 146)",
											transform: "scale(0.98)",
											borderColor: "#fb8500",
										}}
										_focus={{
											boxShadow:
												"0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
										}}
									>
										Story
									</Tab>
								</TabList>
								<TabPanels>
									<TabPanel>
										{item.ingredients.length !== 0 ? (
											<RenderIngredients ingredients={item.ingredients} />
										) : (
											<Text>
												You have not entered any ingredients for this recipe
											</Text>
										)}
									</TabPanel>
									<TabPanel>
										{item.instructions.length !== 0 ? (
											<RenderInstructions instructions={item.instructions} />
										) : (
											<Text>
												You have not entered the method for this recipe
											</Text>
										)}
									</TabPanel>
									<TabPanel>
										<RenderStory story={item.story} />
									</TabPanel>
								</TabPanels>
							</Tabs>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default recipe;
