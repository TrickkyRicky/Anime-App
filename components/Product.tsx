import React from "react";
import { Text, VStack } from "native-base";
import { Dimensions, Image, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface ProductProps {
  title: string;
  image: string;
}

const Product = ({ title, image }: ProductProps) => {
  return (
    <View>
      {/* <VStack alignItems="center" px={1} style={{ width: "100%" }}> */}
      <Image
        source={{
          uri: image,
        }}
        style={{
          borderRadius: 15,
          width: "100%",
          height: 250,
          resizeMode: "cover",
        }}
      />

      <Text
        color="#fff"
        fontWeight={500}
        fontFamily={"mont"}
        fontSize="lg"
        numberOfLines={2}
        mb={3}
      >
        {title}
      </Text>
      {/* </VStack> */}
    </View>
  );
};

export default Product;
