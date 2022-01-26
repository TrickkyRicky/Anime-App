import React, { useEffect } from "react";
import { Text } from "native-base";
import { useDispatch } from "react-redux";
import { View, ScrollView } from "react-native";
import SeasonOrganize from "../../components/Seasonal/SeasonOrganize";
import { getSeasonalAnimeData } from "../../store/Anime/Anime-Actions";
import { getSeason } from "../../utility/utility";
import { AnimeActions } from "../../store/Anime/Anime-Slice";
import { LinearGradient } from "expo-linear-gradient";

const SeasonalAnime = () => {
  const year = new Date().getFullYear();
  const dispatch = useDispatch();
  const season = getSeason();

  useEffect(() => {
    dispatch(AnimeActions.setTopSeasonalReset());
    dispatch(getSeasonalAnimeData(year, season.current));
    season.other.forEach((season) => {
      dispatch(getSeasonalAnimeData(year, season));
    });
  }, []);

  return (
    <LinearGradient
      colors={["#52376A", "#000"]}
      style={{ flex: 1, backgroundColor: "#52376A" }}
    >
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

        <View style={{ paddingLeft: 20, paddingBottom: 30, marginTop: 10 }}>
          <Text
            color="#fff"
            fontSize="xl"
            fontWeight={700}
            mb={3}
            textTransform="capitalize"
            fontFamily={"mont-medium"}
          >
            {`Top ${year} ${season.current} Anime`}
          </Text>
          <SeasonOrganize />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SeasonalAnime;
