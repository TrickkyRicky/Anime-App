import React, { useEffect } from "react";
import { Box, HStack, Text, VStack } from "native-base";
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";

import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store/index";
import { getMangaData, getMangaDetails } from "../../store/Manga/Manga-Actions";
import { MangaActions } from "../../store/Manga/Manga-Slice";
import { ListingItem, TopAirNavProps } from "../../types/types";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TopManga = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();

  const topManga = {
    manga: useSelector((state: RootState) => state.Manga.topManga.manga),
  };

  useEffect(() => {
    dispatch(MangaActions.setMangaReset());
    dispatch(getMangaData("manga"));
  }, []);

  return (
    <LinearGradient
      colors={["#52376A", "#52376A", "#000"]}
      style={{ width: "100%", backgroundColor: "#52376A" }}
    >
      <FlatList
        data={topManga.manga}
        keyExtractor={(item) => item.node.id.toString()}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => {
          const manga = item.node;
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
              onPress={() => {
                dispatch(getMangaDetails(manga.id));
                navigation.navigate("MangaDetails", { manga });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <Image
                source={{
                  uri: manga?.main_picture?.medium,
                }}
                style={{
                  borderRadius: 10,
                  width: screenWidth * 0.4,
                  height: 250,
                  resizeMode: "cover",
                  marginRight: 15,
                }}
              />
              <VStack>
                <Text
                  mb={2}
                  numberOfLines={2}
                  width={screenWidth * 0.4}
                  fontFamily={"mont-bold"}
                  fontSize="xl"
                  color="#fff"
                >
                  {manga.title}
                </Text>
                <Text fontFamily={"mont-light"} fontSize="xl" color="#fff">
                  Rank:{" "}
                  <Text fontFamily={"mont-bold"} fontSize="xl" color="#fff">
                    {item?.ranking?.rank}
                  </Text>
                </Text>
              </VStack>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={() => (
          <>
            <View>
              <Text
                color="#fff"
                textAlign="center"
                fontSize="3xl"
                fontWeight={700}
                my={1}
                fontFamily={"mont-bold"}
              >
                Top Manga
              </Text>
            </View>
          </>
        )}
      />
    </LinearGradient>
  );
};

export default TopManga;
