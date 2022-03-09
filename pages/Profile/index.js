import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "../../components/Header";
import { Grid, Card, Col, Text } from "@nextui-org/react";

export default function Profile() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		user && (
			<>
				<Header />
				<div>
					<img src={user.picture} alt={user.name} />
					<h2>{user.name}</h2>
					<p>{user.nickname}</p>
					<p>{user.email}</p>
					<p>{user.sub}</p>
				</div>
				<Grid xs={12} sm={4}>
					<Card cover>
						<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
							<Col>
								<Text
									size={12}
									weight="bold"
									transform="uppercase"
									color="#ffffffAA"
								>
									Welcome {user.name}
								</Text>
								<Text h4 color="white">
									{user.email}
								</Text>
							</Col>
						</Card.Header>
						<Card.Image
							src={user.picture}
							height={240}
							width="100%"
							alt={user.name}
						/>
					</Card>
				</Grid>
				;
			</>
		)
	);
}
