import React, { useEffect } from "react";
import { useContext, useState } from "react";
import Image from "next/image";
import { pageWrapper } from "../_app";

//components
import RecipeDisplay from "../../components/RecipeDisplay";
import Template from "../template";

const recipe = () => {
  let { state, setState } = useContext(pageWrapper);

  let recipe = state.apiData.filter(
    (item) => item.id === state.selectingRecipe.recipeId
  );

  console.log(recipe);

  return (
    <div>
      <h1>Here is the recipe you were looking for</h1>

      {recipe.map((item, index) => (
        <>
          <Template title={item.title} />
          {/* <RecipeDisplay
            title={item.title}
            image={item.image}
            portions={item.portions}
            story={item.story}
          /> */}
        </>
      ))}
    </div>
  );
};

export default recipe;
