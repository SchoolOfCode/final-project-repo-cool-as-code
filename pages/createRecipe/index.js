import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const createRecipe = () => {
  return (
    <div>
      <h1>Create Recipe</h1>
    </div>
  );
};

export default createRecipe;
export const getServerSideProps = withPageAuthRequired();
