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

import styles from "./styles.module.css";

function RenderIngredients(props) {
  const { ingredients } = props;

  let ingredientsArr = ingredients.map((ingredient) => JSON.parse(ingredient));

  return (
    <div>
      {ingredientsArr.map((ingredient, index) => (
        <Text fontSize="xl" key={index} className={styles.ingredients}>
          {ingredient.quantity} {ingredient.measure} {ingredient.food}
        </Text>
      ))}
    </div>
  );
}
export default RenderIngredients;
