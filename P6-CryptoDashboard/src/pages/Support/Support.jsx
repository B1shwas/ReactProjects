import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import InfoCard from "../Dashboard/InfoCard";
import { Stack, Flex } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Flex justify="center" mb="10px">
        <Stack gap="80px">
          <SupportCard
            leftComponent={<ContactCard />}
            text="        Have a question or just want to know more? Feel free to reach out to
          us."
            textHead="Contact Us"
            icon={IoMdMail}
          />
          <SupportCard
            text="Don’t have time to wait for the answer? Chat with us now."
            textHead="Live Chat"
            icon={LuMessageCircle}
            leftComponent={
              <InfoCard
                tagText="Chatbot"
                text="Chat with us now"
                imgURL="/block.png"
                inverted
              />
            }
          />
        </Stack>
      </Flex>
    </DashboardLayout>
  );
};

export default Support;
