import React, { useEffect } from "react";
import { Box, FlatList, ScrollView, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { getSeasonalAnimeData } from "../../store/Anime/Anime-Actions";
import { getSeason } from "../../utility/utility";
import { AnimeActions } from "../../store/Anime/Anime-Slice";
import { RootState } from "../../store/index";

const SeasonalAnime = () => {
  const year = new Date().getFullYear();
  const dispatch = useDispatch();
  const season = getSeason();

  useEffect(() => {
    dispatch(getSeasonalAnimeData(year, season.current));
    // season.other.forEach((season) => {
    //   dispatch(getSeasonalAnimeData(year, season));
    // });
  }, []);

  const seasonAnime = {
    winter: useSelector((state: RootState) => state.Anime.topSeasonal.winter),
    fall: useSelector((state: RootState) => state.Anime.topSeasonal.fall),
    spring: useSelector((state: RootState) => state.Anime.topSeasonal.spring),
    summer: useSelector((state: RootState) => state.Anime.topSeasonal.summer),
  };

  const dataCheckHandler = () => {
    switch (season.current) {
      case "winter":
        return seasonAnime.winter;
      case "spring":
        return seasonAnime.spring;
      case "summer":
        return seasonAnime.summer;
      case "fall":
        return seasonAnime.fall;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#52376A" }}>
      <ScrollView>
        <Text
          color="#fff"
          textAlign="center"
          fontSize="3xl"
          fontWeight={700}
          my={1}
          fontFamily={"mont-medium"}
        >
          Seasonal Anime
        </Text>

        <View style={{ paddingLeft: 20 }}>
          <Text
            color="#fff"
            fontSize="xl"
            fontWeight={700}
            my={1}
            textTransform="capitalize"
            fontFamily={"mont-medium"}
          >
            {`Top ${year} ${season.current} Anime`}
          </Text>
          <FlatList
            data={dataCheckHandler()}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.node.id.toString()}
            renderItem={({ item }) => {
              const anime = item.node;
              return (
                <TouchableOpacity key={anime.id}>
                  <ImageBackground
                    source={{ uri: anime?.main_picture?.large }}
                    resizeMode="cover"
                    style={{ width: 250, height: 160, marginRight: 15 }}
                    imageStyle={{ borderRadius: 5 }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SeasonalAnime;
