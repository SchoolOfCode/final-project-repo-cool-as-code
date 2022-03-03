import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import  Header from "../../components/Header"
import Camera from "../../components/Camera/Camera";
const createRecipe = () => {
  return (
    <div>
    <Header/>
      <div>Create Recipe</div>
      <Camera/>
    </div>
  );
};

export default createRecipe;
export const getServerSideProps = withPageAuthRequired();
