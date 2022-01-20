import React, { useRef } from "react";
import {
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Text,
  ImageBackground,
} from "react-native";
// import { Text } from 'native-base';
import { useDispatch } from "react-redux";
import { TopAirNavProps } from "../../types/types";
import SnapCarousel from "react-native-snap-carousel";
import * as Animatable from "react-native-animatable";
import * as Haptics from "expo-haptics";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.6;
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
            key={anime.id}
            activeOpacity={0.4}
            style={{
              marginTop: SPACING * 5,
              width: ITEM_SIZE,
            }}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              dispatch(getDetails(anime.id));
              nav.navigate("Details", { anime });
            }}
          >
            <Animatable.View animation="slideInRight" delay={650}>
              <Animated.View
                style={{
                  marginBottom: 10,
                  marginHorizontal: SPACING,
                  transform: [{ translateY }],
                }}
              >
                <ImageBackground
                  style={{
                    width: "100%",
                    height: ITEM_SIZE * 1.25,
                    borderRadius: 10,
                    position: "relative",
                  }}
                  imageStyle={{ borderRadius: 10 }}
                  resizeMode="cover"
                  source={{ uri: anime.main_picture.large }}
                >
                  <View
                    style={{
                      backgroundColor: "#A17CFE",
                      width: "100%",
                      height: "25%",
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      justifyContent: "center",
                      position: "absolute",
                      bottom: 0,
                      opacity: 0.85,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 17,
                        fontFamily: "mont-bold",
                      }}
                      numberOfLines={2}
                    >
                      {anime.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#A17CFE",
                      width: 25,
                      height: 35,
                      borderRadius: 5,
                      padding: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: 5,
                      left: 5,
                      opacity: 0.85,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        fontFamily: "mont-bold",
                      }}
                    >
                      {item.ranking.rank}
                    </Text>
                  </View>
                </ImageBackground>
              </Animated.View>
            </Animatable.View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Carousel;
