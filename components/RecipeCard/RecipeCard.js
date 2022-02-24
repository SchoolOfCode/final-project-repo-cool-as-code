import React from "react"

//styles
import CardStyles from "./RecipeCard.module.css"

function RecipeCard({ image }) {
  return (
    <>
      <div className={CardStyles.flip_card}>
        <div className={CardStyles.flip_card_inner}>
          <div className={CardStyles.flip_card_front}>
            <img className={CardStyles.img} src={image} />
            <div className={CardStyles.infoContainer}>
              <p className={CardStyles.info}>Recipe Name</p>
            </div>
          </div>
          <div className={CardStyles.flip_card_back}>
            <h3 className={CardStyles.writting}>Best Dinner Ever</h3>
            <p className={CardStyles.writting}>Meals with friends</p>
            <p className={CardStyles.writting}>We loved that evening</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeCard
