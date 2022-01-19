import React, { Fragment } from "react";
import { View, useColorScheme } from "react-native";
import { Box, Text } from "native-base";

type Props = {
  title: string;
  info: string | [];
};
type Studio = {
  id: number;
  name: String;
};

const DetailSubTitle = ({ title, info }: Props) => {
  const colorScheme = useColorScheme();
  let infoChange = null;

  if (Array.isArray(info)) {
    infoChange = info.map((item: Studio, index) => {
      return (
        <Fragment key={item.id}>
          <Text>{index ? "," : ""}</Text>
          <Text
            fontFamily={"mont-bold"}
            color={colorScheme === "dark" ? "#8e8e8e" : "#414141"}
            fontSize="sm"
            pl={1.5}
          >
            {item.name}
          </Text>
        </Fragment>
      );
    });

    if (!info.length) {
      infoChange = (
        <Text
          fontFamily={"mont-bold"}
          color={colorScheme === "dark" ? "#8e8e8e" : "#414141"}
          fontSize="sm"
          pl={1.5}
        >
          Unknown
        </Text>
      );
    }
  } else {
    infoChange = (
      <Text
        fontFamily={"mont-bold"}
        color={colorScheme === "dark" ? "#8e8e8e" : "#414141"}
        fontSize="sm"
        pl={1.5}
      >
        {info}
      </Text>
    );
  }

  return (
    <Box flexDirection="row">
      <Text
        mb={1}
        fontFamily={"mont-bold"}
        color={colorScheme === "dark" ? "#654582" : "#52376A"}
        fontSize="sm"
      >
        {title}
      </Text>
      {infoChange}
    </Box>
  );
};

export default DetailSubTitle;
