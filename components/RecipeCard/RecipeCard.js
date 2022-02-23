// import React from "react";
// import { Card } from "antd";
// const { Meta } = Card;
// import Image from "next/image";
// import "./RecipeCard.module.css";
// //import "antd/dist/antd.css";

// //import { Card } from "antd";

// function RecipeCard() {
//   return (
//     <>
//       <Card
//         hoverable
//         style={{ width: 240 }}
//         cover={
//           <Image
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//             width="240px"
//             height="240px"
//             alt="example"
//           />
//         }
//       >
//         <Meta title="Europe Street beat" description="www.instagram.com" />
//       </Card>
//       ,
//       <div id="container" style="padding: 24px" />
//     </>
//   );
// }

import { Grid, Card, Row, Text } from "@nextui-org/react";

function RecipeCard() {
	return (
		<Grid.Container gap={2} justify="flex-start">
			<Grid xs={6} sm={3}>
				<Card hoverable clickable shadow>
					<Card.Body css={{ p: 0 }}>
						<Card.Image
							width="240px"
							height="240px"
							src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							alt="mytest"
						/>
					</Card.Body>
					<Card.Footer justify="flex-start">
						<Row
							wrap="wrap"
							justify="space-between"
							width="240px"
							height="240px"
						>
							<Text b>Breakfast</Text>
						</Row>
					</Card.Footer>
				</Card>
			</Grid>
		</Grid.Container>
	);
}
export default RecipeCard;
