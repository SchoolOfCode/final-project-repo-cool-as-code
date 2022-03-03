import React from "react"

//styling
import tabStyles from "./Tab.module.css"

const Tab = ({ ingredients, method }) => {
  return (
    <div>
      <div className={tabStyles.ingredients}>
        {/* need to make the ingredient pop list items */}
        <h2>Ingredients</h2>
        <p>{ingredients}</p>
      </div>

      <div className={tabStyles.method}>
        {/* make it a list of a component with an icon at the right */}
        <h2>Method</h2>
        <p>{method}</p>
      </div>
    </div>
  )
}

export default Tab
