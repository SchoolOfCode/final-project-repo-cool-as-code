import React from "react"

//styles
import CardStyles from "./RecipeCard.module.css"

function RecipeCard({ image, recipeName, title, p1, p2 }) {
  return (
    <>
      <div className={CardStyles.flip_card}>
        <div className={CardStyles.flip_card_inner}>
          <div className={CardStyles.flip_card_front}>
            <img className={CardStyles.img} src={image} />
            <div className={CardStyles.infoContainer}>
              <p className={CardStyles.info}>{recipeName}</p>
            </div>
          </div>
          <div className={CardStyles.flip_card_back}>
            <h3 className={CardStyles.writting}>{title}</h3>
            <p className={CardStyles.writting}>Meal Type: {p1}</p>
            <p className={CardStyles.writting}>Tags: {p2}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeCard
