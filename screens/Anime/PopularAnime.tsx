import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, FlatList, View } from "react-native";
import * as Haptics from "expo-haptics";
import { getAnimeData, getAnimeDetails } from "../../store/Anime/Anime-Actions";
import { RootState } from "../../store/index";
import { ListingItem, TopAirNavProps } from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import PopularCard from "../../components/MostPopular/PopularCard";
import Spotlight from "../../components/MostPopular/Spotlight";
import { Text } from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";

const PopularAnime = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const popularAnime = {
    anime: useSelector((state: RootState) => state.Anime.mostPopular.anime),
    // animeRest: useSelector((state: RootState) => state.Anime.mostPopular.animeWithoutFirst),
    firstAnime: useSelector(
      (state: RootState) => state.Anime.mostPopular.firstAnime
    ),
  };

  useEffect(() => {
    dispatch(getAnimeData("bypopularity"));
  }, []);

  return (
    <View style={{ width: "100%", backgroundColor: "#000" }}>
      <FlatList
        data={popularAnime.anime}
        keyExtractor={(item: ListingItem["item"]) => item.node.id.toString()}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        renderItem={({ item }) => {
          const anime = item.node;
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={anime.id}
              style={{ width: "50%", paddingHorizontal: 10 }}
              onPress={() => {
                dispatch(getAnimeDetails(anime.id));
                navigation.navigate("Details", { anime });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <PopularCard
                title={anime.title}
                image={anime?.main_picture?.large}
                rank={item?.ranking?.rank}
              />
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={() => (
          <>
            <Text
              color="#fff"
              textAlign="center"
              fontSize="3xl"
              fontWeight={700}
              my={1}
              fontFamily={"mont-extrabold"}
            >
              #1 Anime <FontAwesome5 name="trophy" size={24} color="#fff" />
            </Text>
            <Spotlight
              anime={
                popularAnime.firstAnime[0]
                  ? popularAnime.firstAnime[0].node
                  : null
              }
              nav={navigation}
              getDetails={getAnimeDetails}
            />
          </>
        )}
      />
    </View>
  );
};

export default PopularAnime;
