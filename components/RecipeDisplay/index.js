import React from "react"
import Image from "next/image"

//styles
import Display from "./RecipeDisplay.module.css"

// random comment -- please delete

function RecipeDisplay({ title, image, portions, story }) {
  return (
    <>
      <div>RecipeDisplay</div>
      <p>{title}</p>
      <Image src={image} width={500} height={500} alt="Recipe Picture" />
      <p>{portions}</p>
      <p>{story}</p>
    </>
  )
}

export default RecipeDisplay
