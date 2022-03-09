import {
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Center,
	Spinner,
} from "@chakra-ui/react";

function DeleteRecipeButton(props) {
	const {
		setDeleteIsOpen,
		deleteIsOpen,
		cancelDeleteRef,
		onDeleteClose,
		recipeDelete,
		handleDeleteRecipe,
		item,
	} = props;

	return (
		<div>
			<Button
				border="1px"
				bg="orange.main"
				borderRadius="8px"
				borderColor="orange.main"
				color="blue.main"
				size="lg"
				_hover={{ bg: "orange.one" }}
				_active={{
					bg: "orange.one",
					transform: "scale(0.98)",
					borderColor: "orange.one",
				}}
				_focus={{
					boxShadow: "0 0 1px 2px orange.one, 0 1px 1px orange.main",
				}}
				onClick={() => setDeleteIsOpen(true)}
			>
				DELETE
			</Button>
			<AlertDialog
				isOpen={deleteIsOpen}
				leastDestructiveRef={cancelDeleteRef}
				onClose={onDeleteClose}
				isCentered
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Recipe
						</AlertDialogHeader>
						<AlertDialogBody>
							{!recipeDelete
								? "Are you sure? You can't undo this action afterwards."
								: "Recipe is being deleted."}
							<br />
							{recipeDelete ? (
								<Center>
									<Spinner size="lg" />
								</Center>
							) : null}
							<br />
						</AlertDialogBody>
						<AlertDialogFooter>
							{!recipeDelete ? (
								<Button ref={cancelDeleteRef} onClick={onDeleteClose}>
									Cancel
								</Button>
							) : null}

							{!recipeDelete ? (
								<Button
									colorScheme="red"
									onClick={() => {
										handleDeleteRecipe(item.id);
									}}
									ml={3}
								>
									Delete
								</Button>
							) : null}
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</div>
	);
}

export default DeleteRecipeButton;
