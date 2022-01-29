import React, { useEffect } from "react";
import { Box, HStack, Text, VStack } from "native-base";
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import * as Haptics from "expo-haptics";
import Carousel from "../../components/TopNovels/Carousel";
import { LinearGradient } from "expo-linear-gradient";

import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store/index";
import { getMangaData, getMangaDetails } from "../../store/Manga/Manga-Actions";
import { ListingItem, TopAirNavProps } from "../../types/types";
import { MangaActions } from "../../store/Manga/Manga-Slice";

const { width, height } = Dimensions.get("window");

const TopNovels = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const topNovel = {
    novel: useSelector((state: RootState) => state.Manga.topNovels.novel),
    novel5: useSelector((state: RootState) => state.Manga.topNovels.novel5),
  };

  useEffect(() => {
    dispatch(getMangaData("novels"));
    dispatch(MangaActions.setMangaReset2());
  }, []);

  return (
    <LinearGradient
      colors={["#52376A", "#52376A", "#000"]}
      style={{
        width: "100%",
        backgroundColor: "#52376A",
      }}
    >
      <FlatList
        data={topNovel.novel}
        keyExtractor={(item: ListingItem["item"]) => item.node.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const manga = item.node;
          const { rank } = item.ranking;
          return (
            <TouchableOpacity
              style={{
                width: "49.5%",
                marginTop: 4,
              }}
              onPress={() => {
                dispatch(getMangaDetails(manga.id));
                navigation.navigate("MangaDetails", { manga });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <ImageBackground
                source={{
                  uri: manga?.main_picture?.medium,
                }}
                resizeMode="cover"
                style={{
                  height: 250,
                }}
              >
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(0, 0, 0, .6)",
                    "rgba(0, 0, 0, 1)",
                  ]}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: 45,
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
                    numberOfLines={1}
                  >
                    {rank}. {manga.title}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={() => (
          <View>
            <Text
              color="#fff"
              textAlign="center"
              fontSize="3xl"
              fontWeight={700}
              my={2}
              mt={2}
              fontFamily={"mont-bold"}
            >
              Top Novels
            </Text>
            <Carousel
              novelTop5={topNovel.novel5}
              nav={navigation}
              getDetails={getMangaDetails}
            />
          </View>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </LinearGradient>
  );
};

export default TopNovels;
