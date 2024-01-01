import React, { Fragment } from "react";
import { CustomCard } from "../../chakra/CustomCard";
import { Flex, Icon, Stack, Text, Divider, Button } from "@chakra-ui/react";
import { BsCurrencyRupee, BsCurrencyBitcoin } from "react-icons/bs";

const Transactions = () => {
  const transactions = [
    {
      icon: BsCurrencyRupee,
      date: "2022-06-09 7:06 PM",
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      id: "1",
      isSecAmount: false,
    },
    {
      icon: BsCurrencyBitcoin,
      date: "2022-05-27 12:32 PM",
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      id: "2",
      isSecAmount: true,
      secAmount: "+ $81,123.10",
    },
    {
      icon: BsCurrencyRupee,
      date: "2022-06-09 7:06 PM",
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      id: "3",
      isSecAmount: false,
    },
  ];
  return (
    <CustomCard h="full" p="24px">
      <Text fontSize="sm" color="black.80" mb={6} fontWeight="medium">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap={4}>
              <Flex
                justify="center"
                align="center"
                boxSize={10}
                bg="black.5"
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Flex>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.date}
                  </Text>
                </Stack>
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.amount}</Text>
                  {transaction.isSecAmount && (
                    <Text fontSize="sm" color="black.40" textAlign="end">
                      {transaction.secAmount}
                    </Text>
                  )}
                </Stack>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt={12}>
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
