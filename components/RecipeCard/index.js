import React from "react";
import Image from "next/image";
import RecipeCardCSS from "./RecipeCard.module.css";
import "antd/dist/antd.css";

import { Card } from "antd";
const { Meta } = Card;

function RecipeCard() {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      ,
      <div id="container" style="padding: 24px" />
    </>
  );
}

export default RecipeCard;
