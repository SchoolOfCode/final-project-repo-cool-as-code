import React, { useEffect } from "react";
import { useContext, useState } from "react";
// import Image from "next/image";
import { pageWrapper } from "../_app";

import Header from "../../components/Header";
import styles from "./styles.module.css";

//components
import RecipeDisplay from "../../components/RecipeDisplay";
import Template from "../template";
import RenderIngredients from "../../components/RenderIngredients";
import RenderInstructions from "../../components/RenderInstructions";
import RenderTags from "../../components/RenderTags";

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

// data to test render

let item = {
  id: 18,
  title: "Vegetarian chilli",
  portions: 1,
  story:
    "The easiest chilli you'll ever make, with ready-to-eat grains, kidney beans in chilli sauce and summer veggies - it's 4 of your 5-a-day too!",
  tags: ["Balanced", "High-Fiber", "Main course"],
  type: "Dinner",
  ingredients: [
    '{"quantity":"tyjtyj","measure":"tyjtyj","food":"tyjtyj"}',
    '{"quantity":"tyjtyj","measure":"tyjtyj","food":"tyjtyjtyj"}',
    '{"quantity":"tyjtyjyt","measure":"tyjtyj","food":"tyjtyjyt"}',
  ],
  instructions: [
    '{"step":1,"instruction":"Heat oven to 200C/180C fan/ gas 6. Cook the vegetables in a casserole dish for 15 mins. Tip in the beans and tomatoes, season, and cook for another 10-15 mins until piping hot. Heat the pouch in the microwave on High for 1 min and serve with the chilli.","image":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-chilli-4a57c04.jpg?quality=90&webp=true&resize=375,341"}',
    "Heat oven to 200C/180C fan/ gas 6. Cook the vegetables in a casserole dish for 15 mins. Tip in the beans and tomatoes, season, and cook for another 10-15 mins until piping hot. Heat the pouch in the microwave on High for 1 min and serve with the chilli.",
  ],
  image:
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-chilli-4a57c04.jpg?quality=90&webp=true&resize=375,341",
};
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
  /* need to put this back 
  let { state, setState } = useContext(pageWrapper);

  let recipe = state.apiData.filter(
    (item) => item.id === state.selectingRecipe.recipeId
  );

  console.log(recipe);
*/
  // title={item.title}
  // image={item.image}
  // portions={item.portions}
  // story={item.story}

  return (
    <div>
      {/* {recipe.map((item, index) => (   return goes in here  ))} */}
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
                <Text>{item.title}</Text>
                <div className={styles.portionType}>
                  <Text fontSize="md`">
                    {item.portions === 1
                      ? "1 Serving"
                      : `${item.portions} Servings`}
                  </Text>
                  <Text>{item.type}</Text>
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
                <RenderIngredients />
                <TabPanel>
                  <RenderInstructions />
                </TabPanel>
                <TabPanel>{item.story}</TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default recipe;
