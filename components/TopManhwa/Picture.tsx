import React from "react";
import { Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import * as Haptics from "expo-haptics";
import { TopAirNavProps } from "../../types/types";

const { width } = Dimensions.get("window");

interface CarouselProps {
  arr: any[];
  nav: TopAirNavProps;
  getDetails: (data: number) => void;
}

const Picture = ({ arr, nav, getDetails }: CarouselProps) => {
  const dispatch = useDispatch();
  let manga = arr[Math.floor(Math.random() * arr.length)].node;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ width: width, marginTop: 3 }}
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
          height: 300,
        }}
      />
    </TouchableOpacity>
  );
};

export default Picture;
