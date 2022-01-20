import { View, Text, ScrollView } from "react-native";
import React from "react";

type GenreProp = {
  genres: {
    id: number;
    name: string;
  }[];
  colorScheme: string | null | undefined;
};
const Genres = ({ genres, colorScheme }: GenreProp) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingTop: 5, paddingBottom: 13 }}
    >
      {genres.map((genre) => (
        <View
          key={genre.id}
          style={{
            paddingHorizontal: 10,
            marginRight: 8,
            paddingVertical: 4,
            borderWidth: 1,
            borderRadius: 6,
            alignSelf: "center",
            borderColor: "#52376A",
          }}
        >
          <Text
            style={{
              color: colorScheme === "dark" ? "white" : "#52376A",
            }}
          >
            {genre.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Genres;
