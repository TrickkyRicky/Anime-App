import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import * as Haptics from "expo-haptics";
import SnapCarousel from "react-native-snap-carousel";
import { TopAirNavProps } from "../../types/types";

const { width, height } = Dimensions.get("window");

interface CarouselProps {
  novelTop5: any[];
  nav: TopAirNavProps;
  getDetails: (data: number) => void;
}

const Carousel = ({ novelTop5, nav, getDetails }: CarouselProps) => {
  const dispatch = useDispatch();
  return (
    <SnapCarousel
      data={novelTop5}
      sliderWidth={width}
      itemWidth={width}
      layout="default"
      autoplay={true}
      loop={true}
      showsVerticalScrollIndicator={true}
      renderItem={({ item }) => {
        const manga = item.node;
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
                height: 250,
              }}
            ></ImageBackground>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Carousel;
