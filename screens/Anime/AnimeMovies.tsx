import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "native-base";
import {
  TouchableOpacity,
  FlatList,
  View,
  Dimensions,
  Image,
} from "react-native";
import * as Haptics from "expo-haptics";
import { getAnimeData, getAnimeDetails } from "../../store/Anime/Anime-Actions";
import { RootState } from "../../store/index";
import { ListingItem, TopAirNavProps } from "../../types/types";
import { useNavigation } from "@react-navigation/native";
import { AnimeActions } from "../../store/Anime/Anime-Slice";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AnimeMovies = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const topMovies = {
    anime: useSelector((state: RootState) => state.Anime.topMovies.anime),
    // anime5: useSelector((state: RootState) => state.Anime.topMovies.anime5)
  };

  useEffect(() => {
    dispatch(AnimeActions.setTopAiringReset());
    dispatch(getAnimeData("movie"));
  }, []);
  // console.log(topMovies.anime);

  return (
    <View style={{ width: "100%", backgroundColor: "#52376A", flex: 1 }}>
      <FlatList
        data={topMovies.anime}
        keyExtractor={(item: ListingItem["item"]) => item.node.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          const anime = item.node;
          return (
            <TouchableOpacity
              style={{ width: "50%" }}
              onPress={() => {
                dispatch(getAnimeDetails(anime.id));
                navigation.navigate("Details", { anime });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <Image
                source={{
                  uri: anime?.main_picture?.medium,
                }}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text color="#fff" fontFamily={"mont-medium"} numberOfLines={1}>
                {anime.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AnimeMovies;
