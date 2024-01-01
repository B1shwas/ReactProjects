import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p={6} borderRadius="1rem" display="flex" gap="32px" flexGrow={1}>
      <HStack>
        <Text fontWeight="medium">
          You will receive response within 24 hours of time of submit.
        </Text>
      </HStack>
      <Stack>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Bishwash" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Deoju" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="name@gmail.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
      </Stack>
      <Checkbox defaultChecked>
        <Text fontSize="sm">
          I agree with
          <Box as="span" color="p.purple">
            {" "}
            Terms & Conditions.
          </Box>
        </Text>
      </Checkbox>
      <Stack>
        <Button colorScheme="gray">Send a Message</Button>
        <Button colorScheme="gray">Book a Meeting</Button>
      </Stack>
    </Card>
  );
};

export default ContactCard;
