import {
  HStack,
  Icon,
  Stack,
  Text,
  Heading,
  Box,
  Center,
} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  }
  return (
    <Stack
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      height="100vh"
      bg="white"
    >
      <Box>
        <Heading as="h3" fontSize="20px" mt="56px" textAlign="center">
          @CRYPTO
        </Heading>
        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                px="4"
                py="3"
                color={isActiveLink(nav.link) ? "#171717" : "#797e82"}
                bg={isActiveLink(nav.link) ? "#f3f3f7" : "transparent"}
                borderRadius="10px"
                _hover={{
                  bg: "#F3F3F7",
                  fontWeight: "bold",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontWeight="medium">{nav.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="3" mt="6" mb="6">
        <Link to="/support">
          <HStack
            px="4"
            py="3"
            color={isActiveLink("/support") ? "#171717" : "#797e82"}
            bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"}
            borderRadius="10px"
            _hover={{
              bg: "#f3f3f7",
              fontWeight: "bold",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontWeight="medium">Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
