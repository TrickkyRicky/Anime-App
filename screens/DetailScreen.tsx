import React from "react";
import { Button } from "native-base";
import { View, Text, Dimensions, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { navList, ListingItem } from "./Anime/TopAiringAnime";

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

type previousScreenProps = StackNavigationProp<navList, "Details">;
type Props = {
  navigation: previousScreenProps;
  route: { params: { anime: ListingItem["item"]["node"] } };
};

const DetailScreen = ({ navigation, route }: Props) => {
  const { anime } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <SharedElement id={anime?.id}> */}
      <Image
        source={{ uri: anime?.main_picture?.medium }}
        style={{
          width: screenWidth * 0.5,
          height: screenHeight * 0.4,
        }}
        resizeMode="cover"
      />
      {/* </SharedElement> */}

      <Button onPress={() => navigation.goBack()}>Click me to go back</Button>
    </View>
  );
};

export default DetailScreen;
