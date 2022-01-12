import React, { useRef } from "react";
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useDispatch } from "react-redux";
import { TopAirNavProps } from "../types/types";
import SnapCarousel from "react-native-snap-carousel";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.55;
const SPACING = 10;

interface CarouselProps {
  animeTop5: any[];
  nav: TopAirNavProps;
  getDetails: (data: number) => void;
}

const Carousel = ({ animeTop5, nav, getDetails }: CarouselProps) => {
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SnapCarousel
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      data={animeTop5}
      sliderWidth={width}
      itemWidth={ITEM_SIZE}
      inactiveSlideOpacity={0.4}
      loop={true}
      renderItem={({ item, index }) => {
        const anime = item.node;
        const inputRange = [
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE,
          (index + 1) * ITEM_SIZE,
        ];
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [0, -50, 0],
        });
        return (
          <TouchableOpacity
            key={item.node.id}
            activeOpacity={0.4}
            style={{
              marginTop: SPACING * 5,
              width: ITEM_SIZE,
            }}
            onPress={() => {
              dispatch(getDetails(item.node.id));
              nav.navigate("Details", { anime });
            }}
          >
            <Animated.View
              style={{
                marginBottom: 10,
                marginHorizontal: SPACING,
                transform: [{ translateY }],
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: ITEM_SIZE * 1.2,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
                source={{ uri: item.node.main_picture.large }}
              />
              <View
                style={{
                  backgroundColor: "#A17CFE",
                  height: 60,
                  width: "100%",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              ></View>
            </Animated.View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Carousel;
