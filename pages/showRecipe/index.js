import React, { useEffect } from "react";
import { useContext, useState } from "react";
//import API from "../../components/APIconfig/API";
import Image from "next/image";

import { pageWrapper } from "../../pages/_app";

const showRecipe = () => {
  let { state, setState } = useContext(pageWrapper);
  const [data, setData] = useState({});
  // const fetchRecipes = async (recipeId) => {
  //   const response = await API.fetchRecipe(recipeId);
  //   setState({
  //     ...state,
  //     apiData: response.payload,
  //     apiMessage: response.message,
  //   });
  //console.log(state);

  //fetchRecipes();

  let recipe = state.apiData.filter(
    (item) => item.id === state.selectingRecipe.recipeId
  );
  useEffect(() => {
    setData(recipe);
  }, []);
  console.log(data);

  //setRecipe(recipe);
  return (
    <div>
      <h1>Here is the recipe you were looking for</h1>

      <>
        <p>{data.title}</p>
        {/* <Image src={recipe.image} layout="fill" alt="Recipe Picture" /> */}
        <p>{data.portions}</p>
        <p>{data.story}</p>
      </>
    </div>
  );
};

export default showRecipe;
