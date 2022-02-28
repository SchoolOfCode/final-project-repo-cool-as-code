import React from "react"

//styling
import ButtonStyles from "./Button.module.css"

//API
import API from "../../components/APIconfig/API"

const post = { recipe: "test" }
const API_URL = "https://recipe-soc-project.herokuapp.com/recipes"

const Button = ({ onClick }) => {
  async function createPosts(post) {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
    const data = await response.json()
    console.log(data)
  }

  function onClick() {
    console.log("Hi")
    createPosts(post)
  }

  return (
    <>
      <button onClick={onClick} className={ButtonStyles.button}>
        Button
      </button>
    </>
  )
}

export default Button
