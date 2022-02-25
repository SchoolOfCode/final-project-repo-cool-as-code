import Header from "../components/Header/Header.js"
import RecipeCard from "../components/RecipeCard/RecipeCard"

export default function Home() {
  //First page local host
  return (
    <>
      <Header />
      <h1> Food Story </h1>
      <h3>User Login</h3>
      <RecipeCard />
    </>
  )
}
