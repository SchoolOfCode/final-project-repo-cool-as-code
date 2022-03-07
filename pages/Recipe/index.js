import React, { useEffect, useRef } from "react";
import { useContext, useState } from "react";
// import Image from "next/image";
import { pageWrapper } from "../_app";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import styles from "./styles.module.css";

//components
import RenderIngredients from "../../components/RenderIngredients";
import RenderInstructions from "../../components/RenderInstructions";
import RenderTags from "../../components/RenderTags";
import RenderStory from "../../components/RenderStory";
import DeleteRecipeButton from "../../components/DeleteRecipeButton";

import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	Stack,
	Image,
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Center,
	Spinner,
} from "@chakra-ui/react";

/*
let item = {
	id: 72,
	title: "Easy carrot cake",
	portions: 10,
	story:
		"Top this classic carrot cake with moreish icing and chopped walnuts or pecans. Serve as a sweet treat with a cup of tea any time of the day.",
	tags: ["Desserts", "British", "Vegetarian"],
	type: "Dessert",
	ingredients: [
		'{"quantity":230,"measure":"ml ","food":"vegetable oil, plus extra for the tin"}',
		'{"quantity":100,"measure":"g","food":"natural yogurt"}',
		'{"quantity":4,"measure":"large","food":"eggs"}',
		'{"quantity":1,"measure":"tsp ","food":"vanilla extract"}',
	],
	instructions: [
		'{"instruction":"Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of two 20cm cake tins with baking parchment. Whisk the oil, yogurt, eggs, vanilla and zest in a jug. Mix the flour, sugar, cinnamon and nutmeg with a good pinch of salt in a bowl. Squeeze any lumps of sugar through your fingers, shaking the bowl a few times to bring the lumps to the surface.","image":""}',
		'{"instruction":"Add the wet ingredients to the dry, along with the carrots, raisins and half the nuts, if using. Mix well to combine, then divide between the tins.","image":""}',
		'{"instruction":"Bake for 25-30 mins or until a skewer inserted into the centre of the cake comes out clean. If any wet mixture clings to the skewer, return to the oven for 5 mins, then check again. Leave to cool in the tins.","image":""}',
		'{"instruction":"To make the icing, beat the butter and sugar together until smooth. Add half the soft cheese and beat again, then add the rest (adding it bit by bit prevents the icing from splitting). Remove the cakes from the tins and sandwich together with half the icing. Top with the remaining icing and scatter with the remaining walnuts. Will keep in the fridge for up to five days. Best eaten at room temperature.","image":""}',
	],
	image:
		"https://res.cloudinary.com/dia4he3t2/image/upload/v1646676636/kt8sgi00htgxbfroxzuu.webp",
};
*/

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

const API_URL = process.env.API_URL;

const recipe = () => {
	const router = useRouter();
	const [deleteIsOpen, setDeleteIsOpen] = useState(false);
	const onDeleteClose = () => setDeleteIsOpen(false);
	const cancelDeleteRef = useRef();

	const [recipeDelete, setRecipeDelete] = useState(false);

	async function handleDeleteRecipe(id) {
		setRecipeDelete(true);
		console.log("delete the recipe", id);
		const response = await fetch(`${API_URL}/recipes/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(),
		});
		const data = await response.json();
		console.log(data, "recipe deleted");
		onDeleteClose;
		router.push("/home");
	}

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

	function setId() {
		setState({ ...state, selectingRecipe: { recipeId } });
		router.push("/recipe");
	}

	return (
		<div>
			{recipe.map((item, index) => (
				<div key={index}>
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
							<div className={styles.buttonsContainer}>
								<div className={styles.buttonDiv}>
									<DeleteRecipeButton
										setDeleteIsOpen={setDeleteIsOpen}
										deleteIsOpen={deleteIsOpen}
										cancelDeleteRef={cancelDeleteRef}
										onDeleteClose={onDeleteClose}
										recipeDelete={recipeDelete}
										handleDeleteRecipe={handleDeleteRecipe}
										item={item}
									/>
								</div>
								<div className={styles.buttonDiv}>
									<Button
										border="1px"
										bg="orange.main"
										borderRadius="8px"
										borderColor="orange.main"
										color="blue.main"
										size="lg"
										_hover={{ bg: "orange.one" }}
										_active={{
											bg: "orange.one",
											transform: "scale(0.98)",
											borderColor: "orange.one",
										}}
										_focus={{
											boxShadow:
												"0 0 1px 2px orange.one, 0 1px 1px orange.main",
										}}
									>
										EDIT
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default recipe;
