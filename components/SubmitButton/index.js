import { Button } from "@chakra-ui/react";

function SubmitButton(props) {
	const { children, onClick } = props;

	return;

	<Button onClick={onClick} colorScheme="teal" size="lg">
		{children}
	</Button>;
}

export default SubmitButton;
