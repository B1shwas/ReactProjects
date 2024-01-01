import {
  Heading,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <Link to="/support">
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
