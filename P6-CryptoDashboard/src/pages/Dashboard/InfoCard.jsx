import React from "react";
import { CustomCard } from "../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgURL, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgImage={imgURL}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
      p="24px"
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius="full "
      >
        {tagText}
      </Tag>
      <Text
        textStyle="h5"
        mt={4}
        fontWeight="medium"
        color={inverted ? "white" : "black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
