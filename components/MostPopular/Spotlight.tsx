import React from "react";
import {
  Dimensions,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Text } from "native-base";
import { useDispatch } from "react-redux";
import { ListingItem, TopAirNavProps } from "../../types/types";
import * as Animatable from "react-native-animatable";
import * as Haptics from "expo-haptics";

interface SpotlightProps {
  anime: {
    id: number;
    main_picture: {
      large: string;
      medium: string;
    };
    title: string;
  };
  nav: TopAirNavProps;
  getDetails: (data: number) => void;
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Spotlight = ({ anime, nav, getDetails }: SpotlightProps) => {
  const dispatch = useDispatch();
  return (
    <Animatable.View animation="fadeInUp" delay={1000}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ width: "100%" }}
        onPress={() => {
          dispatch(getDetails(anime.id));
          nav.navigate("Details", { anime });
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }}
      >
        <Image
          source={{
            uri: anime?.main_picture?.large,
          }}
          style={{
            borderRadius: 10,
            width: screenWidth,
            height: 170,
            resizeMode: "cover",
            marginTop: 5,
          }}
        />
        <Text
          color="#fff"
          fontWeight={500}
          fontFamily={"mont-bold"}
          fontSize="lg"
          numberOfLines={2}
          textAlign={"center"}
          my={4}
          width={screenWidth}
        >
          {anime?.title}
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Spotlight;
