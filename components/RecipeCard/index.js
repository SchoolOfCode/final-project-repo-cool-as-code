import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//styles
import CardStyles from "./RecipeCard.module.css";

function RecipeCard({ image, recipeName, title, p1, p2 }) {
  const router = useRouter();
  return (
    <>
      <div>
        <div className={CardStyles.flip_card}>
          <div className={CardStyles.flip_card_inner}>
            <div className={CardStyles.flip_card_front}>
              <div className={CardStyles.imageContainer}>
                <Image src={image} layout="fill" alt="Recipe Picture" />
              </div>
              <div className={CardStyles.infoContainer}>
                <p className={CardStyles.info}>{recipeName}</p>
              </div>
            </div>
            <div className={CardStyles.flip_card_back}>
              <h3 className={CardStyles.writing}>{title}</h3>
              <p className={CardStyles.writing}>Meal Type: {p1}</p>
              <p className={CardStyles.writing}>Tags: {p2}</p>
              <button onClick={() => router.push("/showRecipe")}>
                Show Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecipeCard;
