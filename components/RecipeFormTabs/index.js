import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import AddIngredients from "../AddIngredients";
import AddInstructions from "../AddInstructions";

//styling
import styles from "./styles.module.css";

function RecipeFormTabs(props) {
	const { ingredients, setIngredients, instructions, setInstructions } = props;

	return (
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
						boxShadow: "0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
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
						boxShadow: "0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
					}}
				>
					Method
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<AddIngredients
						ingredients={ingredients}
						setIngredients={setIngredients}
					/>
				</TabPanel>
				<TabPanel>
					<AddInstructions
						instructions={instructions}
						setInstructions={setInstructions}
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default RecipeFormTabs;
