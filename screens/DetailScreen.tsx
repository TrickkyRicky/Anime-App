import React from "react";
import { useSelector } from "react-redux";
import { Heading, Text, HStack } from "native-base";
import { View, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DetailsCarousel from "../components/DetailsAnime/DetailsCarousel";
import DetailsInfo from "../components/DetailsAnime/DetailsInfo";

import { DetailNavProps } from "../types/types";
import { RootState } from "../store/index";

import * as Haptics from "expo-haptics";
// import FadingEdge from 'react-native-fading-edge';

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const DetailScreen = ({ navigation, route }: DetailNavProps) => {
  const animeDetails = {
    details: useSelector(
      (state: RootState) => state.Anime.animeDetails.details
    ),
    loader: useSelector(
      (state: RootState) => state.Anime.animeDetails.detailLoader
    ),
  };

  const { anime } = route.params;
  const spacing: number = 23;

  return (
    <View style={{ flex: 1, backgroundColor: "#52376A" }}>
      <AntDesign
        name="leftcircle"
        size={28}
        color="#825aa5"
        onPress={() => {
          navigation.goBack();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }}
        style={{
          padding: 12,
          position: "absolute",
          top: spacing * 2,
          left: spacing,
          zIndex: 2,
        }}
      />
      <DetailsCarousel
        animeDetails={animeDetails}
        height={screenHeight}
        width={screenWidth}
      />

      <DetailsInfo
        animeDetails={animeDetails}
        animeTitle={anime.title}
        width={screenWidth}
        height={screenHeight}
        spacing={spacing}
      />
    </View>
  );
};

export default DetailScreen;
