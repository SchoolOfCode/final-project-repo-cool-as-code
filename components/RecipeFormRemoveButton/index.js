import { Box } from "@chakra-ui/react";

function RecipeFormRemoveButton(props) {
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
			bg="#bbeaf8"
			borderColor="#90dff7"
			color="#023047"
			_hover={{ bg: "#eefbff" }}
			_active={{
				bg: "#eefbff",
				transform: "scale(0.98)",
				borderColor: "#90dff7",
			}}
			_focus={{
				boxShadow: "0 0 1px 2px #90dff7, 0 1px 1px rgba(0, 0, 0, .15)",
			}}
		>
			{children}
		</Box>
	);
}

export default RecipeFormRemoveButton;
