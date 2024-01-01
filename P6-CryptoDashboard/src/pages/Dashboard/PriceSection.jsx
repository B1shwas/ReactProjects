import React from "react";
import { CustomCard } from "../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:55 PM", "8:00 PM", "8:20 PM", "8:50 PM", "9:10 PM "];

  return (
    <CustomCard p="24px">
      <Flex justify="space-between" align="flex-start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm" fontWeight="medium">Current Price</Text>
            {""}
          </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              ₹ 26,670.25
            </Text>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>
            </HStack>
            {""}
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiOutlinePlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                fontSize="sm"
                p="6px"
                borderRadius="4"
                key={tab}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.png" mt="3rem" mb="16px" />
            <HStack justify="space-between">
              {timestamps.map((time) => (
                <Text key={time} fontSize="sm" color="black.80">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;


