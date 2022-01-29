import React, { useEffect, useMemo } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import MasonryList from "@react-native-seoul/masonry-list";
import { MangaActions } from "../../store/Manga/Manga-Slice";
import { getMangaData, getMangaDetails } from "../../store/Manga/Manga-Actions";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store/index";
import { ListingItem, TopAirNavProps } from "../../types/types";

const TopManhua = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  useEffect(() => {
    dispatch(MangaActions.setMangaReset3());
    dispatch(getMangaData("manhua"));
  }, []);
  const topManhua = useSelector(
    (state: RootState) => state.Manga.topManhua.manga
  );

  const TextX = () => (
    <Text
      color="#fff"
      textAlign="center"
      fontSize="3xl"
      fontWeight={700}
      my={2}
      mt={2}
      fontFamily={"mont-bold"}
    >
      Top Manhua
    </Text>
  );
  return (
    <>
      <LinearGradient
        colors={["#52376A", "#52376A", "#000"]}
        style={{
          width: "100%",
          backgroundColor: "#52376A",
          position: "absolute",
          height: "100%",
          top: 0,
        }}
      />
      <MasonryList
        data={topManhua}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent={<TextX />}
        renderItem={({ item }) => {
          const manga = item.node;
          const { rank } = item.ranking;
          const randomBool = Math.floor(Math.random() * 3 + 1);
          return (
            <TouchableOpacity
              key={manga.id}
              style={{
                marginTop: 2,
              }}
              onPress={() => {
                dispatch(getMangaDetails(manga.id));
                navigation.navigate("MangaDetails", { manga });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <ImageBackground
                source={{
                  uri: manga?.main_picture?.large,
                }}
                resizeMode="cover"
                style={{
                  height: randomBool === 1 ? 225 : randomBool === 2 ? 350 : 450,
                }}
              >
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(0, 0, 0, .7)",
                    "rgba(0, 0, 0, 1)",
                  ]}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: 60,
                    bottom: 0,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 12,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    color="#fff"
                    fontSize="14"
                    fontFamily="mont-bold"
                    numberOfLines={2}
                  >
                    {rank}. {manga.title}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default TopManhua;
