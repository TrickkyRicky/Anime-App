import React, { useEffect, useRef } from "react";
import { Text } from "native-base";
import {
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import * as Haptics from "expo-haptics";
import Carousel from "../../components/TopManhwa/Carousel";
import Picture from "../../components/TopManhwa/Picture";
import { LinearGradient } from "expo-linear-gradient";

import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store/index";
import { getMangaData, getMangaDetails } from "../../store/Manga/Manga-Actions";
import { ListingItem, TopAirNavProps } from "../../types/types";
import { MangaActions } from "../../store/Manga/Manga-Slice";

const TopManhwa = () => {
  const count = useRef(0);
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const topManhwa = {
    manhwa: useSelector((state: RootState) => state.Manga.topManhwa.manga),
    manhwa5: useSelector((state: RootState) => state.Manga.topManhwa.manga5),
  };

  useEffect(() => {
    dispatch(getMangaData("manhwa"));
    dispatch(MangaActions.setMangaReset4());
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
        data={topManhwa.manhwa}
        keyExtractor={(item: ListingItem["item"]) => item.node.id.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={(props) => {
          count.current += 1;
          return count.current % 2 == 0 ? (
            <Picture
              nav={navigation}
              getDetails={getMangaDetails}
              arr={topManhwa.manhwa}
            />
          ) : null;
        }}
        renderItem={({ item, index }) => {
          const manga = item.node;
          const { rank } = item.ranking;
          return (
            <TouchableOpacity
              style={{
                width: "32.5%",
                marginTop: 3,
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
              Top Manhwa
            </Text>
            <Carousel
              manhwaTop5={topManhwa.manhwa5}
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

export default TopManhwa;
