import { Box } from "@chakra-ui/react";

function RecipeFormAddButton(props) {
	const { children, onClick } = props;
	return (
		<Box
			onClick={onClick}
			as="button"
			height="24px"
			lineHeight="1.2"
			transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
			border="1px"
			px="8px"
			borderRadius="2px"
			fontSize="14px"
			fontWeight="semibold"
			bg="#ffb703"
			borderColor="#fb8500"
			color="#023047"
			_hover={{ bg: "rgb(255, 226, 146)" }}
			_active={{
				bg: "rgb(255, 226, 146)",
				transform: "scale(0.98)",
				borderColor: "#fb8500",
			}}
			_focus={{
				boxShadow: "0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
			}}
		>
			{children}
		</Box>
	);
}

export default RecipeFormAddButton;
