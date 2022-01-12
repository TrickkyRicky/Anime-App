import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Box, Heading, HStack, Text, VStack } from "native-base";
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import * as Haptics from "expo-haptics";
import TopAiringCard from "../../components/TopAiringCard";
import Carousel from "../../components/Carousel";

import { RootState } from "../../store/index";
import { getAnimeData, getAnimeDetails } from "../../store/Anime/Anime-Actions";
import { AnimeActions } from "../../store/Anime/Anime-Slice";

import { StackNavigationProp } from "@react-navigation/stack";
import { ListingItem, TopAirNavProps } from "../../types/types";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TopAiringAnime = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const topAiring = {
    anime: useSelector((state: RootState) => state.Anime.topAiring.anime),
    anime5: useSelector((state: RootState) => state.Anime.topAiring.anime5),
  };

  useEffect(() => {
    dispatch(AnimeActions.setTopAiringReset());
    dispatch(getAnimeData("airing"));
  }, []);

  return (
    <View style={{ width: "100%", backgroundColor: "#52376A" }}>
      <FlatList
        data={topAiring.anime}
        keyExtractor={(item: ListingItem["item"]) => item.node.id.toString()}
        renderItem={({ item }) => {
          const anime = item.node;
          return (
            <TouchableOpacity
              activeOpacity={0.3}
              style={{ width: "33.333%", paddingHorizontal: 10 }}
              onPress={() => {
                dispatch(getAnimeDetails(anime.id));
                navigation.navigate("Details", { anime });
              }}
            >
              <TopAiringCard
                title={anime.title}
                image={anime?.main_picture?.medium}
                rank={item?.ranking?.rank}
              />
            </TouchableOpacity>
          );
        }}
        horizontal={false}
        ListHeaderComponent={() => (
          <>
            <Text
              color="#fff"
              textAlign="center"
              fontSize="3xl"
              fontWeight={700}
              mb={2}
              fontFamily={"mont-bold"}
            >
              Top Airing Anime
            </Text>
            <Carousel
              animeTop5={topAiring.anime5}
              nav={navigation}
              getDetails={getAnimeDetails}
            />
          </>
        )}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      />

      <View
        style={{
          backgroundColor: "#52376A",
          position: "absolute",
          width: screenWidth,
          height: screenHeight,
          transform: [{ translateY: screenHeight }],
          borderRadius: 32,
        }}
      />
    </View>
  );
};

export default TopAiringAnime;
