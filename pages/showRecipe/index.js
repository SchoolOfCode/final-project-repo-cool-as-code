import React from "react";
import { useContext } from "react";
import API from "../../components/APIconfig/API";

import { pageWrapper } from "../../pages/_app";

const showRecipe = ({ props }) => {
  let { state, setState } = useContext(pageWrapper);
  const fetchRecipes = async (recipeId) => {
    const response = await API.fetchRecipe(recipeId);
    setState({
      ...state,
      apiData: response.payload,
      apiMessage: response.message,
    });
    console.log(state);
  };
  fetchRecipes();
  console.log(state);
  return (
    <div>
      <h1>Here is the recipe you were looking for</h1>
      {/* <div>
        {data.map((recipe) => (
          <>
            <p>{title}</p>
            <Image src={image} layout="fill" alt="Recipe Picture" />
            <p>{portions}</p>
            <p>{story}</p>
          </>
        ))}
      </div> */}
    </div>
  );
};

export default showRecipe;
