import React from "react";
import { useSelector } from "react-redux";
import { Heading, Text, HStack, VStack } from "native-base";
import {
  View,
  Dimensions,
  Image,
  useColorScheme,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { DetailNavProps } from "../types/types";
import { RootState } from "../store/index";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import Genres from "../components/DetailsAnime/Genres";
import Carousel from "react-native-snap-carousel";

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

const imgLoad = [
  {
    large:
      "https://thumbs.gfycat.com/BackIllinformedAsianelephant-size_restricted.gif",
  },
];
type CarouselType = {
  item: { large: string };
  index: number;
};

const MangaDetailScreen = ({ navigation, route }: DetailNavProps) => {
  const mangaDetails = {
    details: useSelector(
      (state: RootState) => state.Manga.mangaDetails.details
    ),
    loader: useSelector(
      (state: RootState) => state.Manga.mangaDetails.detailLoader
    ),
  };

  const { manga } = route.params;
  const spacing: number = 23;
  // console.log(mangaDetails.details.genres);
  const colorScheme = useColorScheme();

  return (
    <LinearGradient
      colors={["#52376A", "#000", "#000"]}
      style={{
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <HStack mb={5} alignItems="center" justifyContent="space-between">
        <VStack
          space={3}
          width={screenWidth * 0.25}
          alignItems="center"
          justifyContent="space-around"
        >
          <AntDesign
            name="left"
            size={30}
            color="#825aa5"
            onPress={() => {
              navigation.goBack();
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            }}
            style={{
              marginBottom: 20,
            }}
          />
          {/* Author */}
          <VStack alignItems="center">
            <FontAwesome5 name="book-reader" size={30} color="#CCC" />

            <Text numberOfLines={1} color="#fff">
              {mangaDetails?.details?.authors
                ? mangaDetails?.details?.authors[0]?.node?.first_name
                : []}
            </Text>
            <Text numberOfLines={1} color="#fff">
              {mangaDetails?.details?.authors
                ? mangaDetails?.details?.authors[0]?.node?.last_name
                : []}
            </Text>
          </VStack>

          {/*  */}
          <VStack alignItems="center">
            <MaterialIcons name="menu-book" size={30} color="#CCC" />

            <Text fontSize="sm" color="#fff">
              {mangaDetails?.details?.num_chapters}
            </Text>
            <Text fontSize="sm" color="#fff">
              Chapters
            </Text>
          </VStack>

          <VStack alignItems="center">
            <FontAwesome5 name="calendar-day" size={30} color="#CCC" />
            <Text color="#fff">Published</Text>
            <Text color="#fff">{mangaDetails?.details?.start_date}</Text>
          </VStack>
        </VStack>
        {/* Snap carousel goes here */}
        <Carousel
          data={mangaDetails.loader ? imgLoad : mangaDetails.details.pictures}
          // data={mangaDetails?.details?.pictures}
          sliderWidth={screenWidth * 0.75}
          itemWidth={screenWidth * 0.75}
          layout="default"
          autoplay={true}
          renderItem={({ item, index }: CarouselType) => {
            return (
              <Image
                source={{
                  uri: item?.large,
                }}
                style={{
                  height: screenHeight * 0.55,
                  width: screenWidth * 0.75,
                  borderBottomLeftRadius: 30,
                  resizeMode: "cover",
                }}
              />
            );
          }}
        />
        {/* <Image
          source={{
            uri: manga?.main_picture?.large,
          }}
          style={{
            height: screenHeight * 0.55,
            width: screenWidth * 0.75,
            borderBottomLeftRadius: 30,
            resizeMode: "cover",
          }}
        /> */}
      </HStack>

      <Heading size="xl" pl={3} color="#fff" fontFamily={"mont-bold"}>
        {manga.title}
      </Heading>
      <View style={{ height: 60, paddingLeft: 10 }}>
        <Genres
          genres={
            mangaDetails.details.genres ? mangaDetails.details.genres : []
          }
          colorScheme={colorScheme}
        />
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Text color="#CCC">{mangaDetails.details.synopsis}</Text>
        <View style={{ paddingVertical: 15 }} />
      </ScrollView>
    </LinearGradient>
  );
};

export default MangaDetailScreen;
