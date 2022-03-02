//add the heath tags -- multiple selection (e.g toggle)
//add dish type -- drop down
// cuisine type tag -- drop down
//choose value from tags array
let healthTags = [
  "Alcohol-Cocktail",
  "Alcohol-Free",
  "Dairy-Free",
  "Gluten-Free",
  "Kosher",
  "Peanut-Free",
  "Pecatarian",
  "Vegan",
  "Vegetarian",
];
let dishTypeTags = [
  "Alcohol-Cocktail",
  "Biscuits and Cookies",
  "Bread",
  "Drinks",
  "Desserts",
  "Main course",
  "Pancake",
  "Salad",
  "Sandwiches",
  "Soup",
  "Starter",
];
let cuisineTypeTags = [
  "American",
  "Asian",
  "British",
  "Caribbean",
  "Central Europe",
  "Chinese",
  "Eastern Europe",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Kosher",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "South American",
  "South East Asian",
];
import React from "react";

const AddTags = () => {
  return (
    <div>
      <select>
        {dishTypeTags.map((dishTypeTag, index) => (
          <option key={index} value={dishTypeTag}>
            {dishTypeTag}
          </option>
        ))}
      </select>

      <select>
        {cuisineTypeTags.map((cuisineTypeTag, index) => (
          <option key={index} value={cuisineTypeTag}>
            {cuisineTypeTag}
          </option>
        ))}
      </select>
      {healthTags.map((healthTag, index) => (
        <div key={index}>
          <input id={index} type="checkbox" value={healthTag} />
          <label htmlFor={index}>{healthTag}</label>
        </div>
      ))}
    </div>
  );
};

export default AddTags;
