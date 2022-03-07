import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

function RenderInstructions(props) {
  const { instructions } = props;

  let instructionsArr = instructions.map((instruction) =>
    JSON.parse(instruction)
  );

  return (
    <div>
      {instructionsArr.map((instruction, index) => (
        <div key={index}>
          <Text fontSize="xl">Step {index + 1}</Text>
          <Text>{instruction.instruction}</Text>
          {instruction.image ? (
            <Image
              boxSize="100%"
              objectFit="cover"
              src={instruction.image}
              alt={`image for step {index + 1}`}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
export default RenderInstructions;
