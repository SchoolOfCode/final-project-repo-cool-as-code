import React from "react";
import { useContext } from "react";
import API from "../APIconfig/API";
import { pageWrapper } from "../../pages/_app";

const showRecipe = ({ recipeId }) => {
  let { state, setState } = useContext(pageWrapper);

  const fetchRecipe = async (recipeId) => {
    const response = await API.fetchRecipe(recipeId);
    setState({
      ...state,
      apiData: response.payload,
      apiMessage: response.message,
    });
    console.log(state);
  };

  function getRecipe() {
    fetchRecipe(recipeId);
    Router.push("/search");
  }

  return (
    <div>
      <h1>Here is the recipe you were looking for</h1>
    </div>
  );
};

export default showRecipe;
