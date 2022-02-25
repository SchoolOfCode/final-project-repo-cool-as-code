import { Button } from "@nextui-org/react";

function LoginButton(props) {
	const { color, size, clickable, children } = props;

	return (
		<Button color={color} size={size} clickable={clickable}>
			{children}
		</Button>
	);
}

export default LoginButton;
