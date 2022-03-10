import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Card, Grid, Row, Text ,Spacer , Button, Divider} from "@nextui-org/react";

//if no image exists
import errImg from "../../public/image/no_image.jpg";

//styles
import CardStyles from "./RecipeCard.module.css";
import { pageWrapper } from "../../pages/_app";

function RecipeCard({ recipeId, image, recipeName, title, p1, p2 }) {
  let { state, setState } = useContext(pageWrapper);
  const [imgSrc, setImgSrc] = useState(image);
  const router = useRouter();
  function setId() {
    setState({ ...state, selectingRecipe: { recipeId } });
    router.push("/Recipe");
  }
  const handleOnError = () => {
    // console.log("error on:", recipeId)
    setImgSrc(errImg);
  };
  return (
    <>
      {/* <div>
        <div className={CardStyles.flip_card}>
          <div className={CardStyles.flip_card_inner}>
            <div className={CardStyles.flip_card_front}>
              <div className={CardStyles.imageContainer}>
                <Image
                  src={imgSrc.length > 0 || imgSrc === null ? imgSrc : errImg}
                  layout="fill"
                  alt="Recipe Picture"
                  onError={handleOnError}
                />
              </div>
              <div className={CardStyles.infoContainer}>
                <p className={CardStyles.info}>{recipeName}</p>
              </div>
            </div>
            <div className={CardStyles.flip_card_back}>
              <h3 className={CardStyles.writing}>{title}</h3>
              <p className={CardStyles.writing}>Meal Type: {p1}" "</p>
              <p className={CardStyles.writing}>Tags: {p2}</p>
              <button onClick={() => setId()}>Show Recipe</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => ( */}
      {/* <Grid xs={6} sm={3} key={index}> */}
      <Card hoverable clickable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            objectFit="cover"
            src={imgSrc.length > 0 || imgSrc === null ? imgSrc : errImg}
            width="100%"
            height={250}
            alt={title}
          />


<Row justify="center" align="center">

            <Text h1 size={20}>{recipeName}</Text>
        
            </Row>
            <Divider/>
          
            <Spacer y={1}/>
    
            <Row justify="center" align="center">
            <Text color="orange" h3 size={20}>{p1}</Text>
            </Row>
         
           
            <Row justify="center" align="center">
            <Text h3 size={15}>{p2}</Text>
            </Row>
            <Spacer y={2}/>
            <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
              {title}
            </Text>
               <Divider/>
               <Spacer y={1}/>
            <Row justify="center" align="center">
         
            <Button onClick={()=>setId()} flat auto rounded css={{ color: 'White', bg: '#023047;' }}>Show Recipe</Button>
          </Row>
       
        </Card.Body>
        

        <Card.Footer justify="flex-start">
          
        </Card.Footer>
      </Card>
      {/* </Grid> */}
      {/* ))}
      </Grid.Container> */}
    </>
  );
}
export default RecipeCard;
