import React from "react";
//import { useUser } from "@auth0/nextjs-auth0";
//import Image from "next/image";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Camera from "../../components/Camera/Camera";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

//styling
import css from "../home/Home.module.css";

//components
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";
import MtButton from "../../components/MealTypeButton";
import FeatureButton from "../../components/FeatureButton";

const Home = () => {
	return (
		<>
			<div>
				<Header />
				<SearchInput />
				<div className={css.background}>
					<div className={css.buttons}>
						<MtButton mealTypes="Breakfast">Breakfast</MtButton>

						<MtButton mealTypes="Lunch">Lunch</MtButton>

						<MtButton mealTypes="Dinner">Dinner</MtButton>

						<MtButton mealTypes="Snacks">Snacks</MtButton>

						<MtButton mealTypes="Dessert">Dessert</MtButton>

						<MtButton mealTypes="Drinks">Drinks</MtButton>
					</div>
					<FeatureButton />
					<FeatureButton />
					<FeatureButton />
					<FeatureButton />
					<Camera />
				</div>
			</div>
		</>
	);
};

export default Home;
//export const getServerSideProps = withPageAuthRequired();
