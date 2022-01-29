import React from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text } from "native-base";
import { useDispatch } from "react-redux";
import * as Haptics from "expo-haptics";
import SnapCarousel from "react-native-snap-carousel";
import { TopAirNavProps } from "../../types/types";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

interface CarouselProps {
  manhwaTop5: any[];
  nav: TopAirNavProps;
  getDetails: (data: number) => void;
}

const Carousel = ({ manhwaTop5, nav, getDetails }: CarouselProps) => {
  const dispatch = useDispatch();
  return (
    <SnapCarousel
      data={manhwaTop5}
      sliderWidth={width}
      itemWidth={width}
      layout="default"
      autoplay={true}
      loop={true}
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => {
        const manga = item.node;
        const { rank } = item.ranking;
        return (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ width: width }}
            onPress={() => {
              dispatch(getDetails(manga.id));
              nav.navigate("MangaDetails", { manga });
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            }}
          >
            <ImageBackground
              source={{
                uri: manga?.main_picture?.large,
              }}
              resizeMode="cover"
              style={{
                width: width,
                height: height * 0.6,
                position: "relative",
              }}
            >
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(0, 0, 0, .8)",
                  "rgba(0, 0, 0, 1)",
                ]}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: 60,
                  bottom: 0,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 12,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  color="#fff"
                  fontSize="20"
                  fontFamily="mont-bold"
                  numberOfLines={1}
                >
                  {rank}. {manga.title}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Carousel;
