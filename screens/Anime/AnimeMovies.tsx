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
import { LinearGradient } from "expo-linear-gradient";

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

  return (
    <LinearGradient
      colors={["#52376A", "#000"]}
      style={{ width: "100%", backgroundColor: "#52376A", flex: 1 }}
    >
      <FlatList
        data={topMovies.anime}
        keyExtractor={(item: ListingItem["item"]) => item.node.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          const anime = item.node;
          return (
            <TouchableOpacity
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
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
                  borderRadius: 10,
                  width: screenWidth * 0.4,
                  height: 250,
                  resizeMode: "cover",
                  marginTop: 5,
                }}
              />
              <Text
                color="#fff"
                fontSize="sm"
                width={screenWidth * 0.4}
                fontFamily={"mont-medium"}
                numberOfLines={1}
              >
                {anime.title}
              </Text>
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
              Top Movies
            </Text>
          </>
        )}
      />
    </LinearGradient>
  );
};

export default AnimeMovies;
