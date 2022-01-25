import React from "react";
import { Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getAnimeDetails } from "../../store/Anime/Anime-Actions";
import { TopAirNavProps } from "../../types/types";
import * as Haptics from "expo-haptics";

interface Props {
  array: {
    node: {
      id: number;
      main_picture: {
        large: string;
        medium: string;
      };
      title: string;
    };
  }[];
  colorScheme: string | null | undefined;
  header: string;
}

const Details_Rel_Rec = ({ array, header, colorScheme }: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<TopAirNavProps>();
  return (
    <>
      <Text
        style={{
          color: colorScheme === "dark" ? "#654582" : "#52376A",
          fontWeight: "500",
          fontFamily: "mont-bold",
          fontSize: 15,
          marginVertical: 10,
        }}
      >
        {header}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={array}
        keyExtractor={(array) => array.node.id.toString()}
        renderItem={({ item }) => {
          const anime = item.node;
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(getAnimeDetails(anime.id, true));
                navigation.navigate("Details2", { anime });
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
              style={{
                width: 115,
                height: "100%",
                marginRight: 10,
                marginBottom: 5,
              }}
            >
              <Image
                source={{
                  uri: anime?.main_picture?.medium,
                }}
                style={{
                  borderRadius: 10,
                  width: "100%",
                  resizeMode: "cover",
                  height: 170,
                }}
              />
              <Text
                style={{
                  color: colorScheme === "dark" ? "#8e8e8e" : "#414141",
                  fontWeight: "500",
                  fontFamily: "mont-bold",
                  fontSize: 13,
                  marginTop: 5,
                }}
                numberOfLines={1}
              >
                {anime.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default Details_Rel_Rec;
