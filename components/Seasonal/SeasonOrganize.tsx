import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text } from "native-base";
import SeasonalList from "./SeasonalList";
import { LinearGradient } from "expo-linear-gradient";

import { getSeason } from "../../utility/utility";
import { getAnimeDetails } from "../../store/Anime/Anime-Actions";

import * as Haptics from "expo-haptics";
import { RootState } from "../../store";
import { TopAirNavProps } from "../../types/types";

const SeasonOrganize = () => {
  const season = getSeason();
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const seasonAnime = {
    winter: useSelector((state: RootState) => {
      return {
        data: state.Anime.topSeasonal.winter.data,
        year: state.Anime.topSeasonal.winter.year,
      };
    }),
    spring: useSelector((state: RootState) => {
      return {
        data: state.Anime.topSeasonal.spring.data,
        year: state.Anime.topSeasonal.spring.year,
      };
    }),
    summer: useSelector((state: RootState) => {
      return {
        data: state.Anime.topSeasonal.summer.data,
        year: state.Anime.topSeasonal.summer.year,
      };
    }),
    fall: useSelector((state: RootState) => {
      return {
        data: state.Anime.topSeasonal.fall.data,
        year: state.Anime.topSeasonal.fall.year,
      };
    }),
  };

  const dataCheckHandler = () => {
    switch (season.current) {
      case "winter":
        return seasonAnime.winter.data;
      case "spring":
        return seasonAnime.spring.data;
      case "summer":
        return seasonAnime.summer.data;
      case "fall":
        return seasonAnime.fall.data;
    }
  };

  let seasonListOrder;
  switch (season.current) {
    case "winter":
      seasonListOrder = (
        <>
          <SeasonalList
            array={seasonAnime.spring.data}
            title={`${seasonAnime.spring.year} Spring Anime`}
            season="Spring"
          />
          <SeasonalList
            array={seasonAnime.summer.data}
            title={`${seasonAnime.summer.year} Summer Anime`}
            season="Summer"
          />
          <SeasonalList
            array={seasonAnime.fall.data}
            title={`${seasonAnime.fall.year} Fall Anime`}
            season="Fall"
          />
        </>
      );
      break;
    case "spring":
      seasonListOrder = (
        <>
          <SeasonalList
            array={seasonAnime.summer.data}
            title={`${seasonAnime.summer.year} Summer Anime`}
            season="Summer"
          />
          <SeasonalList
            array={seasonAnime.fall.data}
            title={`${seasonAnime.fall.year} Fall Anime`}
            season="Fall"
          />
          <SeasonalList
            array={seasonAnime.winter.data}
            title={`${seasonAnime.winter.year} Winter Anime`}
            season="Winter"
          />
        </>
      );
      break;
    case "summer":
      seasonListOrder = (
        <>
          <SeasonalList
            array={seasonAnime.fall.data}
            title={`${seasonAnime.fall.year} Fall Anime`}
            season="Fall"
          />
          <SeasonalList
            array={seasonAnime.winter.data}
            title={`${seasonAnime.winter.year} Winter Anime`}
            season="Winter"
          />
          <SeasonalList
            array={seasonAnime.spring.data}
            title={`${seasonAnime.spring.year} Spring Anime`}
            season="Spring"
          />
        </>
      );
      break;
    case "fall":
      seasonListOrder = (
        <>
          <SeasonalList
            array={seasonAnime.winter.data}
            title={`${seasonAnime.winter.year} Winter Anime`}
            season="Winter"
          />
          <SeasonalList
            array={seasonAnime.spring.data}
            title={`${seasonAnime.spring.year} Spring Anime`}
            season="Spring"
          />
          <SeasonalList
            array={seasonAnime.summer.data}
            title={`${seasonAnime.summer.year} Summer Anime`}
            season="Summer"
          />
        </>
      );
      break;
  }
  return (
    <>
      <FlatList
        data={dataCheckHandler()}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.node.id.toString()}
        renderItem={({ item }) => {
          const anime = item.node;
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(getAnimeDetails(anime.id));
                navigation.navigate("Details", { anime });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <ImageBackground
                source={{ uri: anime?.main_picture?.large }}
                resizeMode="cover"
                style={{
                  width: 270,
                  height: 150,
                  marginRight: 15,
                  position: "relative",
                }}
                imageStyle={{ borderRadius: 5 }}
              >
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(0, 0, 0, .5)",
                    "rgba(0, 0, 0, .95)",
                  ]}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: 60,
                    bottom: 0,
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 10,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: 5,
                      width: 5,
                      height: 40,
                      backgroundColor: "#564DA2",
                    }}
                  />
                  <View style={{ paddingLeft: 5 }}>
                    <Text
                      color="#fff"
                      fontSize="12.5"
                      fontFamily="mont-bold"
                      numberOfLines={1}
                    >
                      {anime.title}
                    </Text>
                    <View
                      style={{
                        backgroundColor: "rgba(0, 0, 0, .8)",
                        borderRadius: 8,
                        alignSelf: "flex-start",
                        paddingHorizontal: 5,
                        paddingVertical: 3,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        color="#fff"
                        fontSize="10.5"
                        fontFamily="mont-bold"
                        textTransform="capitalize"
                        textAlign="center"
                      >
                        {season.current}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
      {seasonListOrder}
    </>
  );
};

export default SeasonOrganize;
