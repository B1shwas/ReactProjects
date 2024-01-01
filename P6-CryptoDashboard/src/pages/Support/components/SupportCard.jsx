import {
  Stack,
  Text,
  Flex,
  Icon,
  Box
} from "@chakra-ui/react";

const SupportCard = ({leftComponent,icon, text,textHead}) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack minW="400px">
        <Icon as={icon} color="p.purple" boxSize={6} />
        <Text as="h1" textStyle="h1" fontWeight="medium">
 {textHead}
        </Text>
        <Text fontSize="sm" color="black.60">
{text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
      {leftComponent}
      </Box>

    </Flex>
  );
};

export default SupportCard;
