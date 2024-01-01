import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";
const DashboardLayout = ({ title, children }) => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideNav />
      </Box>
      <SideDrawer onClose={onClose} isOpen={isOpen} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          maxW="70rem"
          mt="6"
          h="calc(100vh - 88px)"
          overflowX="hidden"
          overflowY="auto"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
